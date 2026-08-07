const OPENAI_IMAGE_ENDPOINT = "https://api.openai.com/v1/images/generations";

function imageSizeForRatio(ratio) {
  if (["16:9", "21:9", "4:3", "3:2"].includes(ratio)) {
    return "1536x1024";
  }

  if (["9:16", "3:4", "2:3"].includes(ratio)) {
    return "1024x1536";
  }

  return "1024x1024";
}

function scientificVisualPrompt({ prompt, format, subject, style, ratio }) {
  const safeFormat = format || "Scientific visual";
  const safeSubject = subject && subject !== "Default" ? subject : "research communication";
  const safeStyle = style && style !== "No Style" ? style : "clean scientific illustration";

  return [
    "Create a polished, publication-ready scientific visual for Paperpal.",
    `User request: ${prompt}`,
    `Visual format: ${safeFormat}.`,
    `Subject area: ${safeSubject}.`,
    `Visual style: ${safeStyle}.`,
    `Requested aspect ratio: ${ratio || "1:1"}.`,
    "Use a clear information hierarchy, scientifically credible diagrams, readable labels,",
    "precise arrows and callouts, generous spacing, and a professional academic color palette.",
    "Avoid logos, watermarks, decorative mockup frames, illegible text, and invented citations.",
    "The final image must be complete and ready to present, not a wireframe or template preview.",
  ].join(" ");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = globalThis.process?.env?.OPENAI_API_KEY;
  if (!apiKey) {
    return response.status(503).json({
      error: "OPENAI_API_KEY is not configured on this deployment.",
    });
  }

  let body = request.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return response.status(400).json({ error: "Request body must be valid JSON." });
    }
  }
  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";

  if (prompt.length < 3 || prompt.length > 4000) {
    return response.status(400).json({
      error: "Prompt must contain between 3 and 4,000 characters.",
    });
  }

  const size = imageSizeForRatio(body.ratio);

  try {
    const openAIResponse = await fetch(OPENAI_IMAGE_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt: scientificVisualPrompt({ ...body, prompt }),
        n: 1,
        size,
        quality: "medium",
        output_format: "png",
      }),
    });

    const result = await openAIResponse.json();

    if (!openAIResponse.ok) {
      const message = result?.error?.message || "OpenAI image generation failed.";
      return response.status(openAIResponse.status).json({ error: message });
    }

    const generatedImage = result?.data?.[0];
    if (!generatedImage?.b64_json && !generatedImage?.url) {
      return response.status(502).json({
        error: "The image service returned no image data.",
      });
    }

    return response.status(200).json({
      image: generatedImage.b64_json
        ? `data:image/png;base64,${generatedImage.b64_json}`
        : generatedImage.url,
      model: "gpt-image-2",
      size,
    });
  } catch (error) {
    console.error("OpenAI image generation request failed:", error);
    return response.status(502).json({
      error: "The image service could not be reached. Please try again.",
    });
  }
}
