# Paperpal AI Visualizer

Interactive Paperpal visual-generation prototype with a secure GPT Image 2
generation endpoint.

## Run the static prototype

```bash
python3 -m http.server 8000
```

The existing local demo images remain available when the generation API is not
configured.

## Enable live GPT Image 2 generation

The OpenAI API key must stay on the server. This repository includes a
Vercel-compatible endpoint at `api/generate-image.js`.

1. Import this repository into Vercel.
2. In the Vercel project, open **Settings > Environment Variables**.
3. Add `OPENAI_API_KEY` with your OpenAI API key as its value.
4. Redeploy the project.

Do not add the real key to `app.js`, GitHub, or any browser-side file.
