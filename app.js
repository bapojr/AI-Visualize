const categories = ["Infographics", "Posters", "Graphical Abstract"];
const desktopCategories = ["All", "Infographics", "Posters", "Graphical Abstract", "Diagram"];

const templateCatalog = [
  {
    id: "infographic-crispr",
    title: "CRISPR-Cas9 Gene Editing Mechanism",
    category: "Infographics",
    type: "AI-generated",
    accent: "blueprint",
    subject: "Molecular Biology",
    image: "infographic-crispr.png",
    orientation: "landscape",
    summary: "A finished infographic showing target recognition, cutting, repair pathways, and edited outcomes.",
  },
  {
    id: "infographic-plants",
    title: "Nutrient Transport in Plants",
    category: "Infographics",
    type: "AI-generated",
    accent: "botanical",
    subject: "Plant Science",
    image: "infographic-plant-transport.png",
    orientation: "portrait",
    summary: "A detailed plant-transport infographic with xylem, phloem, transpiration, and mineral movement.",
  },
  {
    id: "infographic-climate",
    title: "Climate Change Impact Pathways",
    category: "Infographics",
    type: "AI-generated",
    accent: "sky",
    subject: "Environmental Science",
    image: "infographic-climate-pathways.png",
    orientation: "portrait",
    summary: "A polished climate-impact infographic linking greenhouse gases, temperature rise, ecosystems, and response.",
  },
  {
    id: "poster-diabetes",
    title: "How Type 2 Diabetes Develops in the Body",
    category: "Posters",
    type: "AI-generated",
    accent: "clinical",
    subject: "Medical Science",
    image: "poster-diabetes.png",
    orientation: "portrait",
    summary: "A research-style medical poster covering progression, insulin resistance, pancreas function, and warning signs.",
  },
  {
    id: "poster-microbiome",
    title: "The Human Gut Microbiome: Role in Health and Disease",
    category: "Posters",
    type: "AI-generated",
    accent: "amber",
    subject: "Microbiology",
    image: "poster-gut-microbiome.png",
    orientation: "portrait",
    summary: "A complete scientific poster with microbiome diversity, immune interaction, dysbiosis, and interventions.",
  },
  {
    id: "poster-alzheimers",
    title: "Neurodegeneration in Alzheimer’s Disease",
    category: "Posters",
    type: "AI-generated",
    accent: "violet",
    subject: "Neuroscience",
    image: "poster-alzheimers.png",
    orientation: "portrait",
    summary: "A detailed poster covering plaques, tangles, neuron damage, disease stages, and therapeutic targets.",
  },
  {
    id: "poster-glp",
    title: "GLP-1 Biology and Therapeutic Pathways",
    category: "Posters",
    type: "AI-generated",
    accent: "clinical",
    subject: "Medical Science",
    image: "GLP.png",
    orientation: "portrait",
    summary: "A finished GLP-1 poster treatment for metabolic science and therapeutic communication.",
  },
  {
    id: "ga-inflammation",
    title: "Inflammation Response Pathway",
    category: "Graphical Abstract",
    type: "AI-generated",
    accent: "sunset",
    subject: "Immunology",
    image: "ga-inflammation.png",
    orientation: "portrait",
    summary: "A finished pathway figure showing trigger detection, cytokine signaling, immune activation, and resolution.",
  },
  {
    id: "ga-rna",
    title: "mRNA Delivery Using Lipid Nanoparticles",
    category: "Graphical Abstract",
    type: "AI-generated",
    accent: "ocean",
    subject: "Biotechnology",
    image: "ga-mrna-delivery.png",
    orientation: "landscape",
    summary: "A polished delivery pathway figure showing nanoparticle uptake, endosomal escape, and release.",
  },
  {
    id: "ga-bacterial-response",
    title: "Bacterial Infection and Immune Response",
    category: "Graphical Abstract",
    type: "AI-generated",
    accent: "mint",
    subject: "Microbiology",
    image: "ga-bacterial-immune-response.png",
    orientation: "landscape",
    summary: "A mechanistic graphical abstract tracing entry, immune recognition, inflammation, and intervention.",
  },
];

const variants = [
  {
    id: 1,
    title: "Clinical infographic system",
    accent: "blueprint",
    summary: "Strong sectioning, medical blues, concise anatomy labels, and publication-style spacing.",
  },
  {
    id: 2,
    title: "Conference poster direction",
    accent: "clinical",
    summary: "A more editorial poster with larger title hierarchy and balanced visual panels.",
  },
  {
    id: 3,
    title: "Minimal graphical abstract",
    accent: "mint",
    summary: "Compact layout, cleaner line work, and a sharper emphasis on process flow.",
  },
  {
    id: 4,
    title: "Illustrated teaching visual",
    accent: "amber",
    summary: "A more expressive educational style with friendlier icons and bold segmentation.",
  },
];

const historyItems = [
  {
    title: "Current version",
    time: "Just now",
    note: "Change the background to blue",
    accent: "blueprint",
    image: "poster-diabetes.png",
    templateId: "poster-diabetes",
  },
  {
    title: "Colors refined",
    time: "2 min ago",
    note: "Create a clean scientific education poster treatment",
    accent: "clinical",
    image: "poster-alzheimers.png",
    templateId: "poster-alzheimers",
  },
  {
    title: "Poster layout pass",
    time: "5 min ago",
    note: "Make the colors more natural and simplify the labels",
    accent: "mint",
    image: "ga-inflammation.png",
    templateId: "ga-inflammation",
  },
];

const sidebarRecentItems = [
  {
    sidebarTitle: "Comprehensive Analysis of Quantum Entanglement",
    templateId: "infographic-crispr",
  },
  {
    sidebarTitle: "The Impact of Climate Change on Marine Biodiversity",
    templateId: "infographic-climate",
  },
  {
    sidebarTitle: "Advanced Computational Models for Predictive Analysis",
    templateId: "poster-diabetes",
  },
  {
    sidebarTitle: "Exploring Dark Matter: Theoretical Frameworks",
    templateId: "poster-alzheimers",
  },
  {
    sidebarTitle: "Innovations in Renewable Energy Storage Technologies",
    templateId: "infographic-plants",
  },
  {
    sidebarTitle: "Neuroscientific Insights into Cognitive Function",
    templateId: "poster-alzheimers",
  },
  {
    sidebarTitle: "The Role of CRISPR-Cas9 in Genome Editing",
    templateId: "infographic-crispr",
  },
];

const landingPromptExamples = [
  "Create a graphical abstract on...",
  "Create an infographic on...",
  "Create a poster on...",
];

const suggestionPills = [
  "More designs",
  "Make the colors more natural",
  "Simplify the labels",
  "Turn this into a poster",
  "Make the style more minimal",
];

const segmentationRegions = {
  "infographic-crispr": [
    { id: "title", type: "text", label: "Title", x: 24, y: 4, w: 52, h: 8 },
    { id: "guide-card", type: "graphic", label: "Guide RNA module", x: 6, y: 14, w: 38, h: 25 },
    { id: "cutting-card", type: "graphic", label: "DNA cutting module", x: 57, y: 14, w: 35, h: 25 },
    { id: "repair-panel", type: "graphic", label: "Repair pathways", x: 10, y: 52, w: 38, h: 30 },
    { id: "outcome-panel", type: "graphic", label: "Edited outcomes", x: 58, y: 52, w: 29, h: 28 },
  ],
  "infographic-plants": [
    { id: "title", type: "text", label: "Title", x: 22, y: 3, w: 48, h: 8 },
    { id: "plant", type: "graphic", label: "Main plant diagram", x: 20, y: 12, w: 48, h: 66 },
    { id: "xylem", type: "callout", label: "Xylem callout", x: 7, y: 31, w: 22, h: 14 },
    { id: "phloem", type: "callout", label: "Phloem callout", x: 68, y: 31, w: 22, h: 14 },
    { id: "roots", type: "callout", label: "Roots callout", x: 7, y: 59, w: 22, h: 14 },
  ],
  "infographic-climate": [
    { id: "title", type: "text", label: "Title", x: 15, y: 3, w: 62, h: 8 },
    { id: "emissions", type: "graphic", label: "Emissions module", x: 5, y: 14, w: 34, h: 22 },
    { id: "ecosystem", type: "graphic", label: "Ecosystem module", x: 52, y: 30, w: 37, h: 17 },
    { id: "sea-level", type: "graphic", label: "Sea-level module", x: 5, y: 50, w: 36, h: 18 },
    { id: "response", type: "graphic", label: "Response module", x: 12, y: 79, w: 76, h: 14 },
  ],
  "poster-diabetes": [
    { id: "title", type: "text", label: "Poster title", x: 3, y: 2, w: 78, h: 6 },
    { id: "progression", type: "graphic", label: "Disease progression", x: 4, y: 9, w: 55, h: 13 },
    { id: "risk", type: "text", label: "Risk factors", x: 66, y: 9, w: 28, h: 20 },
    { id: "body-1", type: "graphic", label: "Insulin resistance", x: 4, y: 24, w: 57, h: 24 },
    { id: "warning", type: "text", label: "Warning signs", x: 67, y: 26, w: 27, h: 19 },
    { id: "body-2", type: "graphic", label: "Pancreas function", x: 4, y: 52, w: 57, h: 24 },
    { id: "glucose", type: "graphic", label: "Blood glucose buildup", x: 4, y: 84, w: 91, h: 10 },
  ],
  "poster-microbiome": [
    { id: "title", type: "text", label: "Poster title", x: 4, y: 2, w: 85, h: 7 },
    { id: "intro", type: "text", label: "Introduction", x: 4, y: 12, w: 28, h: 34 },
    { id: "diversity", type: "graphic", label: "Microbial diversity", x: 35, y: 12, w: 33, h: 32 },
    { id: "immune", type: "graphic", label: "Immune interaction", x: 70, y: 12, w: 25, h: 24 },
    { id: "inflammation", type: "graphic", label: "Inflammation panel", x: 35, y: 48, w: 33, h: 18 },
    { id: "therapy", type: "text", label: "Therapeutic interventions", x: 72, y: 58, w: 22, h: 28 },
  ],
  "poster-alzheimers": [
    { id: "title", type: "text", label: "Poster title", x: 4, y: 2, w: 82, h: 7 },
    { id: "intro", type: "text", label: "Introduction", x: 3, y: 11, w: 27, h: 17 },
    { id: "brain", type: "graphic", label: "Brain overview", x: 33, y: 11, w: 62, h: 18 },
    { id: "plaques", type: "graphic", label: "Amyloid plaques", x: 3, y: 30, w: 44, h: 20 },
    { id: "tau", type: "graphic", label: "Tau tangles", x: 49, y: 30, w: 46, h: 20 },
    { id: "stages", type: "graphic", label: "Disease stages", x: 49, y: 52, w: 46, h: 14 },
    { id: "targets", type: "text", label: "Therapeutic targets", x: 61, y: 75, w: 34, h: 20 },
  ],
  "poster-glp": [
    { id: "title", type: "text", label: "Poster title", x: 4, y: 2, w: 82, h: 7 },
    { id: "overview", type: "graphic", label: "Main overview", x: 5, y: 11, w: 90, h: 18 },
    { id: "pathway-1", type: "graphic", label: "Pathway panel 1", x: 5, y: 31, w: 42, h: 20 },
    { id: "pathway-2", type: "graphic", label: "Pathway panel 2", x: 51, y: 31, w: 44, h: 20 },
    { id: "pathway-3", type: "graphic", label: "Pathway panel 3", x: 5, y: 54, w: 42, h: 20 },
    { id: "callout", type: "text", label: "Callout panel", x: 51, y: 54, w: 44, h: 20 },
    { id: "footer", type: "text", label: "Footer notes", x: 5, y: 78, w: 90, h: 14 },
  ],
  "ga-inflammation": [
    { id: "title", type: "text", label: "Title", x: 14, y: 4, w: 62, h: 8 },
    { id: "trigger", type: "graphic", label: "Trigger detection", x: 5, y: 17, w: 38, h: 14 },
    { id: "cytokine", type: "graphic", label: "Cytokine signaling", x: 49, y: 17, w: 40, h: 16 },
    { id: "inflammation", type: "graphic", label: "Tissue inflammation", x: 5, y: 50, w: 85, h: 18 },
    { id: "resolution", type: "graphic", label: "Resolution", x: 5, y: 78, w: 85, h: 14 },
  ],
  "ga-rna": [
    { id: "title", type: "text", label: "Title", x: 18, y: 3, w: 58, h: 8 },
    { id: "delivery", type: "graphic", label: "Nanoparticle delivery", x: 3, y: 18, w: 27, h: 42 },
    { id: "entry", type: "graphic", label: "Cell entry", x: 32, y: 18, w: 19, h: 42 },
    { id: "escape", type: "graphic", label: "Endosomal escape", x: 52, y: 18, w: 22, h: 42 },
    { id: "release", type: "graphic", label: "mRNA release", x: 76, y: 18, w: 18, h: 42 },
  ],
  "ga-bacterial-response": [
    { id: "title", type: "text", label: "Title", x: 14, y: 3, w: 66, h: 8 },
    { id: "entry", type: "graphic", label: "Bacterial entry", x: 4, y: 16, w: 22, h: 22 },
    { id: "recognition", type: "graphic", label: "Immune recognition", x: 35, y: 16, w: 22, h: 22 },
    { id: "inflammation", type: "graphic", label: "Tissue inflammation", x: 73, y: 25, w: 22, h: 19 },
    { id: "neutrophil", type: "graphic", label: "Neutrophil activation", x: 4, y: 58, w: 25, h: 24 },
    { id: "intervention", type: "graphic", label: "Therapeutic intervention", x: 66, y: 58, w: 24, h: 24 },
  ],
};

const subjectGroups = {
  "Suggested": ["Default"],
  "Life Sciences": [
    "Medical Science",
    "Nutrition",
    "Odontology",
    "Pharmacy",
    "Nursing",
    "Animal Science",
    "Plant Science",
    "Biology",
    "Molecular Sciences",
    "Life Science",
    "Pharmacology",
  ],
  "Broader Disciplines": ["Environmental Science", "Humanities", "STEM", "Others"],
};

const state = {
  desktop: {
    activeScreen: "landing-desktop",
    activeCategory: null,
    galleryCount: 9,
    subject: "Default",
    style: "No Style",
    model: "GPT Image 1",
    ratio: "1:1",
  },
  mobile: {
    activeScreen: "landing-mobile",
    activeCategory: null,
    galleryCount: 4,
    subject: "Default",
    style: "No Style",
    model: "GPT Image 1",
    ratio: "1:1",
  },
  prompt: "",
  selectedVariant: 1,
  activeOverlay: null,
  editorState: "text",
  zoom: 100,
  canvasTool: "select",
  canvasShape: "rectangle",
  canvasLine: "line",
  canvasPanX: 0,
  canvasPanY: 0,
  editorLeftPanelCollapsed: false,
  editorLeftPanelView: "edit",
  editorRightPanelView: "chat",
  currentEditorTemplate: templateCatalog[0],
  editorBackground: "#F5F7F9",
  editorTitle: "Untitled",
  selectedEditorSegmentId: null,
  selectedEditorSegmentType: null,
  isEditorFrameSelected: false,
  hasHistory: false,
  mixedOrder: shuffle([...templateCatalog]),
  generatedResultTemplate: templateCatalog[0],
  pendingGeneratedResultTemplate: null,
  isGeneratingImage: false,
  generationTimer: null,
  generationRequestId: 0,
  generationController: null,
  generationNotice: "",
  isBlankEditor: false,
};

const desktopScreens = document.querySelectorAll(".desktop-shell .screen");
const mobileScreens = document.querySelectorAll(".mobile-shell .screen");
const overlayBackdrop = document.getElementById("overlayBackdrop");
const overlayIds = [
  "preview-panel",
  "gallery-preview-modal",
  "chat-panel",
  "history-modal",
  "export-modal",
  "share-modal",
  "overflow-menu",
  "remove-bg",
  "segment-overlay",
  "rename-visualization-modal",
  "subject-dropdown",
  "ratio-dropdown",
  "style-dropdown",
  "model-dropdown",
  "mobile-drawer",
  "mobile-preview",
  "mobile-history",
  "mobile-export",
  "download-toast",
  "mobile-select-note",
];

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function isMobileViewport() {
  return window.innerWidth <= 920;
}

function variantById(id) {
  return variants.find((item) => item.id === id) || variants[0];
}

function randomTemplateItem() {
  return templateCatalog[Math.floor(Math.random() * templateCatalog.length)];
}

function normalizedPromptValue(prompt = "") {
  return prompt
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function templateForPrompt(prompt = "") {
  const normalized = normalizedPromptValue(prompt);
  if (normalized === "create me a poster on glp 1's" || normalized === "create me a poster on glp-1's") {
    return templateCatalog.find((item) => item.id === "poster-glp") || null;
  }
  return null;
}

function activeGenerationSettings() {
  return isMobileViewport() ? state.mobile : state.desktop;
}

function generationFormat() {
  const activeCategory = activeGenerationSettings().activeCategory;
  return activeCategory || "Scientific visual";
}

function generatedImageOrientation(ratio = "1:1") {
  if (["16:9", "21:9", "4:3", "3:2"].includes(ratio)) return "landscape";
  if (["9:16", "3:4", "2:3"].includes(ratio)) return "portrait";
  return "landscape";
}

function generatedTemplateFromResponse(result, settings) {
  const format = generationFormat();
  const title = state.prompt.length > 72
    ? `${state.prompt.slice(0, 69).trim()}...`
    : state.prompt;

  return {
    id: `gpt-image-2-${Date.now()}`,
    title: title || "AI-generated scientific visual",
    category: format,
    type: "AI-generated",
    accent: "blueprint",
    subject: settings.subject === "Default" ? "Research Communication" : settings.subject,
    image: result.image,
    orientation: generatedImageOrientation(settings.ratio),
    summary: "A publication-ready scientific visual generated from your prompt with GPT Image 2.",
  };
}

async function requestGeneratedImage(settings, signal) {
  const response = await fetch("/api/generate-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: state.prompt,
      format: generationFormat(),
      subject: settings.subject,
      style: settings.style,
      ratio: settings.ratio,
    }),
    signal,
  });

  const contentType = response.headers.get("content-type") || "";
  const result = contentType.includes("application/json")
    ? await response.json()
    : null;

  if (!response.ok || !result?.image) {
    throw new Error(result?.error || `Image generation failed (${response.status}).`);
  }

  return result;
}

async function startImageGeneration() {
  const settings = activeGenerationSettings();
  const localTemplate = templateForPrompt(state.prompt);
  const fallbackTemplate = localTemplate || randomTemplateItem();
  const requestId = state.generationRequestId + 1;

  state.generationRequestId = requestId;
  state.pendingGeneratedResultTemplate = fallbackTemplate;
  state.isGeneratingImage = true;
  state.generationNotice = "";

  if (state.generationTimer) {
    clearTimeout(state.generationTimer);
    state.generationTimer = null;
  }

  if (state.generationController) {
    state.generationController.abort();
  }

  renderVariants();
  updatePreviewVisuals();

  // Preserve the dedicated GLP-1 demo route while live generation handles all other prompts.
  if (localTemplate) {
    state.generationTimer = setTimeout(() => {
      if (requestId !== state.generationRequestId) return;
      state.generatedResultTemplate = localTemplate;
      state.pendingGeneratedResultTemplate = null;
      state.isGeneratingImage = false;
      renderVariants();
      updatePreviewVisuals();
      state.generationTimer = null;
    }, 1200);
    return;
  }

  const controller = new AbortController();
  state.generationController = controller;

  try {
    const result = await requestGeneratedImage(settings, controller.signal);
    if (requestId !== state.generationRequestId) return;
    state.generatedResultTemplate = generatedTemplateFromResponse(result, settings);
  } catch (error) {
    if (error.name === "AbortError" || requestId !== state.generationRequestId) return;
    console.warn("GPT Image 2 generation unavailable; using a demo visual:", error);
    state.generatedResultTemplate = fallbackTemplate;
    state.generationNotice =
      "Live image generation is not configured on this deployment yet, so a demo visual is shown.";
  } finally {
    if (requestId !== state.generationRequestId) return;
    state.pendingGeneratedResultTemplate = null;
    state.isGeneratingImage = false;
    state.generationController = null;
    renderVariants();
    updatePreviewVisuals();
  }
}

function getGalleryItems(category) {
  if (!category) {
    return state.mixedOrder;
  }
  return templateCatalog.filter((item) => item.category === category);
}

function setScreen(name) {
  const isMobile = name.includes("mobile");
  const targetScreens = isMobile ? mobileScreens : desktopScreens;

  targetScreens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === name);
  });

  if (isMobile) {
    state.mobile.activeScreen = name;
  } else {
    state.desktop.activeScreen = name;
  }

  if (name === "conversation-desktop") {
    syncConversationPrompt();
    state.hasHistory = true;
    renderLandingHistoryVisibility();
  }

  if (name === "conversation-mobile") {
    syncMobileConversationPrompt();
    state.hasHistory = true;
    renderLandingHistoryVisibility();
  }

  if (name === "editor-desktop") {
    renderEditorCanvas();
  }
}

function positionOverlayToTrigger(overlay, trigger) {
  if (!overlay || !trigger) return;
  const rect = trigger.getBoundingClientRect();
  const overlayRect = overlay.getBoundingClientRect();
  const gap = 8;
  const viewportPadding = 16;
  let left = rect.left + rect.width / 2 - overlayRect.width / 2;
  left = Math.max(viewportPadding, Math.min(left, window.innerWidth - overlayRect.width - viewportPadding));
  let top = rect.bottom + gap;

  if (top + overlayRect.height > window.innerHeight - viewportPadding) {
    top = rect.top - overlayRect.height - gap;
  }

  overlay.style.left = `${left}px`;
  overlay.style.top = `${Math.max(viewportPadding, top)}px`;
  overlay.style.bottom = "auto";
  overlay.style.transform = "none";
}

function showOverlay(id, trigger = null) {
  hideOverlay();
  const overlay = document.getElementById(id);
  if (!overlay) return;
  if (id === "rename-visualization-modal") {
    const input = document.getElementById("renameVisualizationInput");
    if (input) {
      input.value = state.editorTitle;
      setTimeout(() => {
        input.focus();
        input.select();
      }, 0);
    }
  }
  overlay.classList.remove("hidden");
  if (trigger && overlay.classList.contains("dropdown")) {
    positionOverlayToTrigger(overlay, trigger);
  }
  overlayBackdrop.classList.remove("hidden");
  overlayBackdrop.classList.toggle("preview-active", id === "preview-panel");
  state.activeOverlay = id;
}

function hideOverlay() {
  overlayIds.forEach((id) => {
    document.getElementById(id)?.classList.add("hidden");
  });
  overlayBackdrop.classList.add("hidden");
  overlayBackdrop.classList.remove("preview-active");
  state.activeOverlay = null;
}

function showToast() {
  const toast = document.getElementById("download-toast");
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 1800);
}

function renderGalleryPreview(template) {
  const preview = document.getElementById("galleryPreviewImage");
  if (!preview || !template) return;
  preview.innerHTML = `<img src="${template.image}" alt="${template.title}" class="preview-real-image" />`;
}

function createTemplateCard(template) {
  const card = document.createElement("button");
  card.className = `template-card template-card-image orientation-${template.orientation} accent-${template.accent}`;
  card.innerHTML = `
    <div class="template-thumb template-image-thumb orientation-${template.orientation}">
      <div class="template-corner-badge">${template.category === "Graphical Abstract" ? "GA" : template.category}</div>
      <img src="${template.image}" alt="${template.title}" class="template-real-image" />
    </div>
  `;

  card.addEventListener("click", () => {
    state.generatedResultTemplate = template;
    state.currentEditorTemplate = template;
    renderGalleryPreview(template);
    showOverlay("gallery-preview-modal");
  });

  return card;
}

function renderCategoryPills(targetId, scope) {
  const container = document.getElementById(targetId);
  if (!container) return;
  container.innerHTML = "";

  const availableCategories = scope === "desktop" ? desktopCategories : categories;

  availableCategories.forEach((category) => {
    const button = document.createElement("button");
    const categoryValue = category === "All" ? null : category;
    const isActive = state[scope].activeCategory === categoryValue;
    button.className = `pill ${isActive ? "active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      state[scope].activeCategory = scope === "desktop" ? categoryValue : isActive ? null : categoryValue;
      renderCategoryPills("desktopCategoryPills", "desktop");
      renderCategoryPills("mobileCategoryPills", "mobile");
      renderGalleries();
    });
    container.appendChild(button);
  });
}

function renderGalleries() {
  const desktopGallery = document.getElementById("desktopGallery");
  const desktopItems = getGalleryItems(state.desktop.activeCategory).slice(0, state.desktop.galleryCount);
  if (desktopGallery) {
    desktopGallery.innerHTML = "";
    desktopItems.forEach((item) => desktopGallery.appendChild(createTemplateCard(item)));
  }

  const mobileGallery = document.getElementById("mobileGallery");
  const mobileItems = getGalleryItems(state.mobile.activeCategory).slice(0, state.mobile.galleryCount);
  if (mobileGallery) {
    mobileGallery.innerHTML = "";
    mobileItems.forEach((item) => mobileGallery.appendChild(createTemplateCard(item)));
  }
}

function createHistoryNode(item, compact = false, isActive = false) {
  const button = document.createElement("button");
  button.className = compact ? "history-thumb" : `history-entry ${isActive ? "active" : ""}`;

  if (compact) {
    const latestTemplate = state.generatedResultTemplate || templateCatalog[0];
    button.className = `${button.className} orientation-${latestTemplate.orientation}`;
    button.innerHTML = `
      <div class="thumb-preview accent-${item.accent}">
        <img src="${latestTemplate.image}" alt="${latestTemplate.title}" class="history-thumb-image" />
      </div>
      <div class="thumb-time">${item.time}</div>
    `;
  } else {
    button.innerHTML = `
      <div class="history-entry-image-wrap">
        <img src="${item.image}" alt="${item.note}" class="history-entry-image" />
      </div>
      <div class="history-entry-copy">
        <div class="history-entry-note">${item.note}</div>
        <div class="thumb-time">${item.time}</div>
      </div>
    `;
  }

  button.addEventListener("click", () => {
    if (compact) {
      setScreen("conversation-desktop");
    } else {
      const nextTemplate = templateCatalog.find((template) => template.id === item.templateId) || templateCatalog[0];
      state.selectedVariant = 1;
      state.generatedResultTemplate = nextTemplate;
      state.currentEditorTemplate = nextTemplate;
      renderEditorCanvas();
      updatePreviewVisuals();
      }
  });

  return button;
}

function renderHistory() {
  renderSidebarRecent();

  [
    "editorHistoryList",
    "editorHistoryListSelect",
    "historyModalList",
    "mobileHistoryList",
  ].forEach((id) => {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = "";
    if (!state.isBlankEditor) {
      historyItems.forEach((item, index) => {
        container.appendChild(createHistoryNode(item, false, index === 0));
      });
    }
  });
}

function renderLandingHistoryVisibility() {
  renderSidebarRecent();
}

function createSidebarRecentNode(item, index) {
  const button = document.createElement("button");
  button.className = "sidebar-recent-item";
  button.type = "button";
  button.textContent = item.sidebarTitle || "Untitled";
  button.title = item.sidebarTitle || "Untitled";
  button.addEventListener("click", () => {
    const nextTemplate = templateCatalog.find((template) => template.id === item.templateId) || templateCatalog[0];
    state.generatedResultTemplate = nextTemplate;
    state.currentEditorTemplate = nextTemplate;
    updatePreviewVisuals();
    setScreen("conversation-desktop");
  });
  return button;
}

function renderSidebarRecent() {
  const container = document.getElementById("sidebarRecentList");
  if (!container) return;

  container.innerHTML = "";

  sidebarRecentItems.forEach((item, index) => {
    container.appendChild(createSidebarRecentNode(item, index));
  });
}

function createVariantCard(item) {
  const button = document.createElement("button");
  button.className = `variant-card variant-card-image accent-${item.accent} active`;

  if (state.isGeneratingImage) {
    button.classList.add("is-loading");
    button.innerHTML = `
      <div class="variant-image variant-image-real variant-image-loading orientation-${item.orientation} accent-${item.accent}">
        <div class="generation-dot-grid" aria-hidden="true"></div>
        <div class="generation-image-shell">
          <img src="${item.image}" alt="${item.title}" class="variant-real-image generation-preview-image" />
          <div class="generation-reveal-mask" aria-hidden="true"></div>
          <div class="generation-blur-band" aria-hidden="true"></div>
        </div>
      </div>
    `;
  } else {
    button.innerHTML = `
      <div class="variant-image variant-image-real orientation-${item.orientation} accent-${item.accent}">
        <img src="${item.image}" alt="${item.title}" class="variant-real-image" />
      </div>
    `;
  }

  button.addEventListener("click", () => {
    if (state.isGeneratingImage) return;
    state.generatedResultTemplate = item;
    updatePreviewVisuals();
    renderVariants();
    showOverlay(isMobileViewport() ? "mobile-preview" : "preview-panel");
  });

  return button;
}

function renderVariants() {
  const desktop = document.getElementById("desktopVariants");
  const mobile = document.getElementById("mobileVariants");
  const item = state.isGeneratingImage
    ? state.pendingGeneratedResultTemplate || state.generatedResultTemplate
    : state.generatedResultTemplate;

  if (desktop) {
    desktop.innerHTML = "";
    if (item) desktop.appendChild(createVariantCard(item));
  }

  if (mobile) {
    mobile.innerHTML = "";
    if (item) mobile.appendChild(createVariantCard(item));
  }
}

function renderSuggestions() {
  ["desktopSuggestions", "mobileSuggestions"].forEach((id) => {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = "";
    suggestionPills.forEach((text) => {
      const button = document.createElement("button");
      button.className = "pill";
      button.textContent = text;
      button.addEventListener("click", () => {
        const target = id === "desktopSuggestions"
          ? document.getElementById("conversationPromptBar")
          : document.getElementById("mobilePromptBar");
        target.value = text;
      });
      container.appendChild(button);
    });
  });
}

function renderSubjectList(filter = "") {
  const list = document.getElementById("subjectList");
  if (!list) return;

  list.innerHTML = "";

  Object.entries(subjectGroups).forEach(([group, items]) => {
    const matched = items.filter((item) =>
      item.toLowerCase().includes(filter.trim().toLowerCase())
    );
    if (!matched.length) return;

    matched.forEach((item) => {
      const button = document.createElement("button");
      const isActive = item === state.desktop.subject || item === state.mobile.subject;
      button.className = `dropdown-item ${isActive ? "active" : ""}`;
      button.textContent = item;
      button.addEventListener("click", () => {
        state.desktop.subject = item;
        state.mobile.subject = item;
        document.querySelectorAll(".subject-pill-text").forEach((node) => {
          node.textContent = item;
        });
        hideOverlay();
        renderSubjectList(filter);
      });
      list.appendChild(button);
    });
  });
}

function updatePreviewVisuals() {
  const activeVariant = (
    state.isGeneratingImage
      ? state.pendingGeneratedResultTemplate || state.generatedResultTemplate
      : state.generatedResultTemplate
  ) || templateCatalog[0];
  const preview = document.getElementById("previewPanelImage");
  const mobilePreview = document.getElementById("mobilePreviewImage");
  const conversationAiOutput = document.getElementById("conversationAiOutput");
  const previewConversationUserPrompt = document.getElementById("previewConversationUserPrompt");
  const previewConversationAiOutput = document.getElementById("previewConversationAiOutput");
  const previewConversationImage = document.getElementById("previewConversationImage");
  const previewConversationPills = document.getElementById("previewConversationPills");

  if (conversationAiOutput) {
    conversationAiOutput.textContent = state.isGeneratingImage
      ? `Generating a ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. This will be ready in a moment.`
      : state.generationNotice ||
        `Here is a generated ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. You can continue refining the visual, ask for a different layout, or generate another direction.`;
  }

  if (previewConversationUserPrompt) {
    previewConversationUserPrompt.textContent =
      state.prompt || document.getElementById("conversationUserPrompt")?.textContent || "";
  }

  if (previewConversationAiOutput) {
    previewConversationAiOutput.textContent = state.isGeneratingImage
      ? `Generating a ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. This will be ready in a moment.`
      : state.generationNotice ||
        `Here is a generated ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. You can continue refining the visual, ask for a different layout, or generate another direction.`;
  }

  if (previewConversationImage) {
    previewConversationImage.className = `preview-thread-image-card orientation-${activeVariant.orientation}`;
    previewConversationImage.innerHTML = `<img src="${activeVariant.image}" alt="${activeVariant.title}" class="preview-real-image" />`;
  }

  if (previewConversationPills) {
    previewConversationPills.innerHTML = "";
    suggestionPills.forEach((text) => {
      const button = document.createElement("button");
      button.className = "pill";
      button.textContent = text;
      previewConversationPills.appendChild(button);
    });
  }

  if (preview) {
    preview.className = `preview-image large orientation-${activeVariant.orientation} accent-${activeVariant.accent}`;
    preview.innerHTML = `<img src="${activeVariant.image}" alt="${activeVariant.title}" class="variant-real-image preview-real-image" />`;
  }

  if (mobilePreview) {
    mobilePreview.className = `preview-image mobile-large orientation-${activeVariant.orientation} accent-${activeVariant.accent}`;
    mobilePreview.innerHTML = `<img src="${activeVariant.image}" alt="${activeVariant.title}" class="variant-real-image preview-real-image" />`;
  }

  [document.getElementById("previewDots"), document.getElementById("mobilePreviewDots")].forEach((container) => {
    if (!container) return;
    container.innerHTML = "";
    [activeVariant].forEach((item) => {
      const dot = document.createElement("button");
      dot.className = "dot active";
      dot.addEventListener("click", () => {
        state.generatedResultTemplate = item;
        updatePreviewVisuals();
        renderVariants();
      });
      container.appendChild(dot);
    });
  });
}

function renderEditorTitle() {
  document.querySelectorAll("#editorDocumentTitle, .editor-document-title-text").forEach((node) => {
    node.textContent = state.editorTitle;
  });
}

function syncConversationPrompt() {
  const value = document.getElementById("landingPromptDesktop")?.value.trim() || state.prompt;
  state.prompt = value;
  document.getElementById("conversationUserPrompt").textContent = value;
}

function syncMobileConversationPrompt() {
  const value = document.getElementById("landingPromptMobile")?.value.trim() || state.prompt;
  state.prompt = value;
  document.getElementById("mobileConversationUserPrompt").textContent = value;
}

function toggleSubmitStates() {
  const desktopValue = document.getElementById("landingPromptDesktop")?.value.trim() || "";
  const mobileValue = document.getElementById("landingPromptMobile")?.value.trim() || "";
  const conversationValue = document.getElementById("conversationPromptBar")?.value.trim() || "";
  const editorValue = document.getElementById("editorChatPrompt")?.value.trim() || "";
  const desktopButton = document.getElementById("landingSubmitDesktop");
  const mobileButton = document.getElementById("landingSubmitMobile");
  const editorButton = document.getElementById("editorChatSubmit");
  const landingHelper = document.getElementById("landingPromptHelper");
  const conversationHelper = document.getElementById("conversationPromptHelper");
  document
    .getElementById("desktopLandingChatbox")
    ?.classList.toggle("has-value", Boolean(desktopValue));
  document
    .getElementById("mobileLandingChatbox")
    ?.classList.toggle("has-value", Boolean(mobileValue));
  if (desktopButton) desktopButton.disabled = !desktopValue;
  if (mobileButton) mobileButton.disabled = !mobileValue;
  if (editorButton) editorButton.disabled = !editorValue;
  if (landingHelper) {
    landingHelper.disabled = !desktopValue;
    landingHelper.classList.toggle("is-enabled", Boolean(desktopValue));
  }
  if (conversationHelper) {
    conversationHelper.disabled = !conversationValue;
    conversationHelper.classList.toggle("is-enabled", Boolean(conversationValue));
  }
}

function initLandingPromptTyping() {
  const placeholder = document.getElementById("landingTypingPlaceholder");
  if (!placeholder) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    placeholder.textContent = landingPromptExamples[0];
    return;
  }

  let exampleIndex = 0;
  let characterIndex = 0;

  const typeNextCharacter = () => {
    const example = landingPromptExamples[exampleIndex];
    placeholder.textContent = example.slice(0, characterIndex + 1);
    characterIndex += 1;

    if (characterIndex < example.length) {
      window.setTimeout(typeNextCharacter, 55);
      return;
    }

    window.setTimeout(() => {
      exampleIndex = (exampleIndex + 1) % landingPromptExamples.length;
      characterIndex = 0;
      placeholder.textContent = "";
      window.setTimeout(typeNextCharacter, 280);
    }, 1400);
  };

  typeNextCharacter();
}

function updateEditorToolbar(kind) {
  const toolbar = document.getElementById("editorContextToolbar");
  if (!toolbar) return;

  if (kind === "text") {
    toolbar.innerHTML = `
      <div class="toolbar-group">
        <span class="toolbar-chip">Manrope</span>
        <span class="toolbar-chip">28.0</span>
        <span class="toolbar-chip">A</span>
        <span class="toolbar-chip strong">B</span>
        <span class="toolbar-chip italic">I</span>
        <span class="toolbar-chip">Align</span>
        <span class="toolbar-chip">Spacing</span>
        <span class="toolbar-chip">Effects</span>
        <span class="toolbar-chip">Position</span>
      </div>
    `;
    return;
  }

  if (kind === "shape") {
    toolbar.innerHTML = `
      <div class="toolbar-group">
        <span class="toolbar-chip">Fill</span>
        <span class="toolbar-chip">Border</span>
        <span class="toolbar-chip">Opacity 100%</span>
        <span class="toolbar-chip">Shadow</span>
        <span class="toolbar-chip">Arrange</span>
        <span class="toolbar-chip">Position</span>
      </div>
    `;
    return;
  }

  toolbar.innerHTML = '<div class="toolbar-group"><span class="toolbar-chip">Select any element to edit its properties</span></div>';
}

function renderEditorCanvas() {
  const activeTemplate = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];

  const canvas = document.getElementById("editorCanvas");
  const image = document.getElementById("editorCanvasImage");
  const mediaShell = document.getElementById("editorCanvasMediaShell");
  const stageContent = document.getElementById("editorCanvasStageContent");
  const segmentation = document.getElementById("editorImageSegmentation");
  const actionStack = document.getElementById("editorImageActionStack");
  const textActionStack = document.getElementById("editorTextActionStack");
  if (!canvas || !image) return;

  canvas.classList.add("image-mode");
  if (mediaShell) {
    mediaShell.style.background = state.editorBackground;
  }

  if (state.isBlankEditor) {
    image.removeAttribute("src");
    image.alt = "";
    image.className = "editor-canvas-image hidden";
    stageContent?.classList.remove("is-frame-selected");
    stageContent?.classList.add("is-blank-canvas");
    if (segmentation) segmentation.innerHTML = "";
    actionStack?.classList.add("hidden");
    textActionStack?.classList.add("hidden");
    updateZoom();
    return;
  }

  state.currentEditorTemplate = activeTemplate;
  stageContent?.classList.remove("is-blank-canvas");
  image.src = activeTemplate.image;
  image.alt = activeTemplate.title;
  image.className = `editor-canvas-image orientation-${activeTemplate.orientation}`;
  stageContent?.classList.toggle("is-frame-selected", state.isEditorFrameSelected);
  if (segmentation) {
    segmentation.innerHTML = "";
    (segmentationRegions[activeTemplate.id] || []).forEach((region) => {
      const button = document.createElement("button");
      button.className = `editor-segment ${state.selectedEditorSegmentId === region.id ? "active" : ""}`;
      button.style.left = `${region.x}%`;
      button.style.top = `${region.y}%`;
      button.style.width = `${region.w}%`;
      button.style.height = `${region.h}%`;
      button.dataset.segmentId = region.id;
      button.dataset.segmentType = region.type;
      button.setAttribute("aria-label", region.label);
      button.innerHTML = `<span class="editor-segment-label">${region.label}</span>`;
      segmentation.appendChild(button);
    });
  }
  actionStack?.classList.add("hidden");
  textActionStack?.classList.add("hidden");
  updateZoom();
}

function updateSuggestionsRailState() {
  const rail = document.getElementById("desktopSuggestions");
  const leftArrow = document.querySelector(".suggestions-arrow-left");
  const rightArrow = document.querySelector(".suggestions-arrow-right");
  const leftFade = document.querySelector(".suggestions-fade-left");
  const rightFade = document.querySelector(".suggestions-fade-right");
  if (!rail || !leftArrow || !rightArrow || !leftFade || !rightFade) return;

  const maxScroll = rail.scrollWidth - rail.clientWidth;
  const atStart = rail.scrollLeft <= 2;
  const atEnd = rail.scrollLeft >= maxScroll - 2 || maxScroll <= 0;

  leftArrow.classList.toggle("is-hidden", atStart);
  leftFade.classList.toggle("is-hidden", atStart);
  rightArrow.classList.toggle("is-hidden", atEnd);
  rightFade.classList.toggle("is-hidden", atEnd);
}

function bindCanvasSelection() {
  document.querySelectorAll("[data-select]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      state.editorState = node.dataset.select;
      document.querySelectorAll("[data-select]").forEach((item) => item.classList.remove("focused"));
      node.classList.add("focused");
      updateEditorToolbar(state.editorState);
    });
  });

  document.getElementById("editorCanvas")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      state.editorState = "default";
      document.querySelectorAll("[data-select]").forEach((item) => item.classList.remove("focused"));
      updateEditorToolbar(state.editorState);
    }
  });

  const editorImage = document.getElementById("editorCanvasImage");
  const stageContent = document.getElementById("editorCanvasStageContent");
  const imageToolbar = document.getElementById("editorImageActionStack");
  const textToolbar = document.getElementById("editorTextActionStack");
  const moreMenu = document.getElementById("editorImageMoreMenu");
  const moreTrigger = document.getElementById("editorImageMoreTrigger");
  const segmentation = document.getElementById("editorImageSegmentation");

  const clearEditorSelection = () => {
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = null;
    state.isEditorFrameSelected = false;
    stageContent?.classList.remove("is-frame-selected");
    segmentation?.querySelectorAll(".editor-segment").forEach((segment) => {
      segment.classList.remove("active");
    });
    imageToolbar?.classList.add("hidden");
    textToolbar?.classList.add("hidden");
    moreMenu?.classList.add("hidden");
  };

  editorImage?.addEventListener("click", (event) => {
    event.stopPropagation();
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = "frame";
    state.isEditorFrameSelected = true;
    stageContent?.classList.add("is-frame-selected");
    segmentation?.querySelectorAll(".editor-segment").forEach((segment) => {
      segment.classList.remove("active");
    });
    imageToolbar?.classList.remove("hidden");
    textToolbar?.classList.add("hidden");
    moreMenu?.classList.add("hidden");
  });

  moreTrigger?.addEventListener("click", (event) => {
    event.stopPropagation();
    moreMenu?.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!imageToolbar) return;
    if (
      !event.target.closest("#editorImageActionStack") &&
      !event.target.closest("#editorTextActionStack") &&
      !event.target.closest("#editorCanvasStageContent") &&
      !event.target.closest("#editorCanvasImage")
    ) {
      clearEditorSelection();
    }
  });

  segmentation?.addEventListener("click", (event) => {
    const segment = event.target.closest(".editor-segment");
    if (!segment) return;
    event.stopPropagation();
    state.selectedEditorSegmentId = segment.dataset.segmentId;
    state.selectedEditorSegmentType = segment.dataset.segmentType;
    state.isEditorFrameSelected = false;
    stageContent?.classList.remove("is-frame-selected");
    segmentation.querySelectorAll(".editor-segment").forEach((item) => {
      item.classList.toggle("active", item === segment);
    });
    moreMenu?.classList.add("hidden");
    if (segment.dataset.segmentType === "text") {
      textToolbar?.classList.remove("hidden");
      imageToolbar?.classList.add("hidden");
    } else {
      imageToolbar?.classList.remove("hidden");
      textToolbar?.classList.add("hidden");
    }
  });
}

function setCanvasTool(tool) {
  state.canvasTool = tool;
  const stage = document.getElementById("editorCanvasStage");
  if (stage) stage.dataset.canvasTool = tool;

  document.querySelectorAll(".canvas-tool-button[data-canvas-tool]").forEach((button) => {
    button.classList.toggle("active", button.dataset.canvasTool === tool);
  });
  document.querySelectorAll("[data-canvas-tool-group]").forEach((group) => {
    group.classList.toggle("active", group.dataset.canvasToolGroup === tool);
  });
}

function updateCanvasTransform() {
  const stageContent = document.getElementById("editorCanvasStageContent");
  if (!stageContent) return;
  stageContent.style.setProperty("--editor-zoom-scale", `${state.zoom / 100}`);
  stageContent.style.setProperty("--canvas-pan-x", `${state.canvasPanX}px`);
  stageContent.style.setProperty("--canvas-pan-y", `${state.canvasPanY}px`);
}

function setEditorPanelView(panel, view) {
  if (panel === "left") state.editorLeftPanelView = view;
  if (panel === "right") state.editorRightPanelView = view;

  document.querySelectorAll(`[data-editor-panel-tab="${panel}"]`).forEach((tab) => {
    const selected = tab.dataset.panelView === view;
    tab.classList.toggle("selected", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  document.querySelectorAll(`[data-editor-panel-view="${panel}"]`).forEach((panelView) => {
    const selected = panelView.dataset.panelView === view;
    panelView.classList.toggle("active", selected);
    panelView.hidden = !selected;
  });

  if (panel === "right") {
    document.getElementById("historyPanel")?.setAttribute("aria-label", view === "chat" ? "Editor chat" : "Editor edit");
  }
}

function setEditorLeftPanelCollapsed(collapsed) {
  state.editorLeftPanelCollapsed = collapsed;
  document.getElementById("editorDesktopScreen")?.classList.toggle("editor-left-panel-collapsed", collapsed);
  ["editorLeftPanelCollapse", "editorLeftPanelOpen"].forEach((id) => {
    document.getElementById(id)?.setAttribute("aria-expanded", String(!collapsed));
  });
}

function bindCanvasToolbar() {
  const stage = document.getElementById("editorCanvasStage");
  const stageContent = document.getElementById("editorCanvasStageContent");
  const drawingLayer = document.getElementById("canvasDrawingLayer");
  const importInput = document.getElementById("canvasImportInput");
  const shapeToolButton = document.getElementById("canvasShapeToolButton");
  const lineToolButton = document.getElementById("canvasLineToolButton");
  if (!stage || !stageContent || !drawingLayer) return;

  const closeToolMenus = () => {
    document.querySelectorAll(".canvas-tool-menu").forEach((menu) => {
      menu.hidden = true;
    });
    document.querySelectorAll("[data-canvas-menu-toggle]").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
    });
  };

  const updateToolChoice = (type, option) => {
    const isShape = type === "shape";
    const toolButton = isShape ? shapeToolButton : lineToolButton;
    const optionSelector = isShape ? "[data-canvas-shape-option]" : "[data-canvas-line-option]";
    const value = isShape ? option.dataset.canvasShapeOption : option.dataset.canvasLineOption;
    const label = option.dataset.toolLabel;
    if (isShape) state.canvasShape = value;
    else state.canvasLine = value;

    document.querySelectorAll(optionSelector).forEach((item) => {
      const selected = item === option;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-checked", String(selected));
    });

    const icon = option.querySelector("svg")?.cloneNode(true);
    if (toolButton && icon) toolButton.replaceChildren(icon);
    toolButton?.setAttribute("data-tooltip", label);
    toolButton?.setAttribute("aria-label", label);
    document.querySelector(`[data-canvas-menu-toggle="${type}"]`)?.setAttribute("aria-label", `${label} options`);
    closeToolMenus();
    setCanvasTool(type);
  };

  document.querySelectorAll("[data-canvas-menu-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const menu = document.getElementById(toggle.getAttribute("aria-controls"));
      const willOpen = menu?.hidden ?? false;
      closeToolMenus();
      if (!menu || !willOpen) return;
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    });
  });

  document.querySelectorAll("[data-canvas-shape-option]").forEach((option) => {
    option.addEventListener("click", () => updateToolChoice("shape", option));
  });
  document.querySelectorAll("[data-canvas-line-option]").forEach((option) => {
    option.addEventListener("click", () => updateToolChoice("line", option));
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".canvas-main-toolbar")) closeToolMenus();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeToolMenus();
  });

  const selectObject = (object) => {
    drawingLayer.querySelectorAll(".canvas-object.is-selected").forEach((item) => {
      item.classList.remove("is-selected");
    });
    object?.classList.add("is-selected");
  };

  const pointInCanvas = (event) => {
    const rect = stageContent.getBoundingClientRect();
    const scale = state.zoom / 100;
    return {
      x: Math.min(stageContent.offsetWidth, Math.max(0, (event.clientX - rect.left) / scale)),
      y: Math.min(stageContent.offsetHeight, Math.max(0, (event.clientY - rect.top) / scale)),
    };
  };

  const positionBox = (object, start, point, constrainSquare = false) => {
    let deltaX = point.x - start.x;
    let deltaY = point.y - start.y;
    if (constrainSquare) {
      const size = Math.max(Math.abs(deltaX), Math.abs(deltaY));
      deltaX = (deltaX < 0 ? -1 : 1) * size;
      deltaY = (deltaY < 0 ? -1 : 1) * size;
    }
    object.style.left = `${Math.min(start.x, start.x + deltaX)}px`;
    object.style.top = `${Math.min(start.y, start.y + deltaY)}px`;
    object.style.width = `${Math.abs(deltaX)}px`;
    object.style.height = `${Math.abs(deltaY)}px`;
  };

  const positionLine = (object, start, point, snapAngle = false) => {
    let deltaX = point.x - start.x;
    let deltaY = point.y - start.y;
    let angle = Math.atan2(deltaY, deltaX);
    const length = Math.hypot(deltaX, deltaY);
    if (snapAngle) angle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
    object.style.left = `${start.x}px`;
    object.style.top = `${start.y}px`;
    object.style.width = `${length}px`;
    object.style.transform = `rotate(${angle}rad)`;
  };

  document.querySelectorAll("[data-canvas-tool]").forEach((button) => {
    button.addEventListener("click", () => {
      const tool = button.dataset.canvasTool;
      closeToolMenus();
      setCanvasTool(tool);
      if (tool === "import") {
        importInput?.click();
        setCanvasTool("select");
      }
    });
  });

  let panSession = null;
  stage.addEventListener("pointerdown", (event) => {
    if (state.canvasTool !== "hand" || event.button !== 0 || event.target.closest(".canvas-zoom-controls")) return;
    event.preventDefault();
    panSession = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      panX: state.canvasPanX,
      panY: state.canvasPanY,
    };
    stage.setPointerCapture?.(event.pointerId);
    stage.classList.add("is-panning");
  });

  stage.addEventListener("pointermove", (event) => {
    if (!panSession || event.pointerId !== panSession.pointerId) return;
    state.canvasPanX = panSession.panX + event.clientX - panSession.startX;
    state.canvasPanY = panSession.panY + event.clientY - panSession.startY;
    updateCanvasTransform();
  });

  const endPan = (event) => {
    if (!panSession || event.pointerId !== panSession.pointerId) return;
    stage.releasePointerCapture?.(event.pointerId);
    panSession = null;
    stage.classList.remove("is-panning");
  };
  stage.addEventListener("pointerup", endPan);
  stage.addEventListener("pointercancel", endPan);

  let drawSession = null;
  stageContent.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !["shape", "line", "pen", "text", "frame"].includes(state.canvasTool)) return;
    event.preventDefault();
    event.stopPropagation();
    const start = pointInCanvas(event);

    if (state.canvasTool === "text") {
      const text = document.createElement("div");
      text.className = "canvas-object canvas-text-object is-selected";
      text.contentEditable = "true";
      text.spellcheck = true;
      text.style.left = `${start.x}px`;
      text.style.top = `${start.y}px`;
      drawingLayer.appendChild(text);
      selectObject(text);
      setCanvasTool("select");
      window.setTimeout(() => text.focus(), 0);
      return;
    }

    let object;
    if (state.canvasTool === "pen") {
      object = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      object.classList.add("canvas-object", "canvas-pen-object");
      object.setAttribute("viewBox", `0 0 ${stageContent.offsetWidth} ${stageContent.offsetHeight}`);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M ${start.x} ${start.y}`);
      object.appendChild(path);
      drawingLayer.appendChild(object);
      drawSession = {tool: "pen", object, path, points: [start], pointerId: event.pointerId};
    } else {
      object = document.createElement("div");
      if (state.canvasTool === "shape") {
        object.className = `canvas-object canvas-shape-object canvas-${state.canvasShape}-object`;
      } else if (state.canvasTool === "line") {
        object.className = `canvas-object canvas-line-object${state.canvasLine === "arrow" ? " canvas-arrow-object" : ""}`;
      } else {
        object.className = `canvas-object canvas-${state.canvasTool}-object`;
      }
      drawingLayer.appendChild(object);
      drawSession = {tool: state.canvasTool, object, start, pointerId: event.pointerId};
      if (state.canvasTool === "line") positionLine(object, start, start);
      else positionBox(object, start, start);
    }
    stageContent.setPointerCapture?.(event.pointerId);
  });

  stageContent.addEventListener("pointermove", (event) => {
    if (!drawSession || event.pointerId !== drawSession.pointerId) return;
    const point = pointInCanvas(event);
    if (drawSession.tool === "pen") {
      drawSession.points.push(point);
      const pathData = drawSession.points.map((item, index) => `${index ? "L" : "M"} ${item.x} ${item.y}`).join(" ");
      drawSession.path.setAttribute("d", pathData);
    } else if (drawSession.tool === "line") {
      positionLine(drawSession.object, drawSession.start, point, event.shiftKey);
    } else {
      positionBox(drawSession.object, drawSession.start, point, event.shiftKey);
    }
  });

  const endDrawing = (event) => {
    if (!drawSession || event.pointerId !== drawSession.pointerId) return;
    stageContent.releasePointerCapture?.(event.pointerId);
    const {object, tool, points = []} = drawSession;
    const width = parseFloat(object.style.width || "0");
    const height = parseFloat(object.style.height || "0");
    const tooSmall = tool === "pen" ? points.length < 2 : tool === "line" ? width < 4 : width < 4 || height < 4;
    if (tooSmall) object.remove();
    else selectObject(object);
    drawSession = null;
  };
  stageContent.addEventListener("pointerup", endDrawing);
  stageContent.addEventListener("pointercancel", endDrawing);

  drawingLayer.addEventListener("click", (event) => {
    if (state.canvasTool !== "select") return;
    const object = event.target.closest(".canvas-object");
    if (!object) return;
    event.stopPropagation();
    selectObject(object);
  });

  importInput?.addEventListener("change", () => {
    const file = importInput.files?.[0];
    if (!file) {
      setCanvasTool("select");
      return;
    }
    const image = document.createElement("img");
    const objectUrl = URL.createObjectURL(file);
    image.className = "canvas-object canvas-imported-image is-selected";
    image.alt = file.name;
    image.draggable = false;
    image.src = objectUrl;
    image.style.left = `${Math.max(0, (stageContent.offsetWidth - 180) / 2)}px`;
    image.style.top = "40px";
    image.addEventListener("load", () => URL.revokeObjectURL(objectUrl), {once: true});
    drawingLayer.appendChild(image);
    selectObject(image);
    importInput.value = "";
    setCanvasTool("select");
  });

  setCanvasTool(state.canvasTool);
}

function bindSelectGroups() {
  document.querySelectorAll(".selectable").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest(".pill");
      if (!button) return;
      group.querySelectorAll(".pill").forEach((pill) => pill.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

function handlePromptSubmit(destination) {
  state.isBlankEditor = false;
  state.hasHistory = true;
  renderLandingHistoryVisibility();
  setScreen(destination);
  syncConversationPrompt();
  syncMobileConversationPrompt();
  startImageGeneration();
}

function initActions() {
  document.addEventListener("click", (event) => {
    const go = event.target.closest("[data-go-screen]");
    if (go) {
      const destination = go.dataset.goScreen;
      if (
        destination === "editor-desktop" &&
        !go.closest('[data-screen="editor-desktop"], [data-screen="editor-select-area"], [data-screen="editor-collapsed-history"]')
      ) {
        state.isBlankEditor = false;
        renderHistory();
      }
      setScreen(destination);
      if (destination.includes("conversation")) {
        state.hasHistory = true;
        renderLandingHistoryVisibility();
        syncConversationPrompt();
        syncMobileConversationPrompt();
      }
      if (go.hasAttribute("data-close-overlay")) {
        hideOverlay();
      }
    }

    const open = event.target.closest("[data-open-overlay]");
    if (open) {
      showOverlay(open.dataset.openOverlay, open);
    }

    if (event.target.hasAttribute("data-close-overlay")) {
      hideOverlay();
    }

    const ratioOption = event.target.closest("[data-ratio-option]");
    if (ratioOption) {
      document.querySelectorAll("[data-ratio-option]").forEach((node) => {
        node.classList.toggle("active", node === ratioOption);
      });
      document.querySelectorAll(".ratio-trigger-text").forEach((node) => {
        node.textContent = ratioOption.dataset.ratioOption;
      });
      state.desktop.ratio = ratioOption.dataset.ratioOption;
      state.mobile.ratio = ratioOption.dataset.ratioOption;
      hideOverlay();
    }

    const styleOption = event.target.closest("[data-style-option]");
    if (styleOption) {
      document.querySelectorAll("[data-style-option]").forEach((node) => {
        node.classList.toggle("active", node === styleOption);
      });
      state.desktop.style = styleOption.dataset.styleOption;
      state.mobile.style = styleOption.dataset.styleOption;
      hideOverlay();
    }

    const modelOption = event.target.closest("[data-model-option]");
    if (modelOption) {
      document.querySelectorAll("[data-model-option]").forEach((node) => {
        node.classList.toggle("active", node === modelOption);
      });
      document.querySelectorAll(".model-trigger-text").forEach((node) => {
        node.textContent = modelOption.dataset.modelOption;
      });
      state.desktop.model = modelOption.dataset.modelOption;
      state.mobile.model = modelOption.dataset.modelOption;
      hideOverlay();
    }

    const editorDropdownTrigger = event.target.closest("[data-editor-dropdown-trigger]");
    if (editorDropdownTrigger) {
      const dropdown = editorDropdownTrigger.closest("[data-editor-dropdown]");
      document.querySelectorAll("[data-editor-dropdown].open").forEach((node) => {
        if (node !== dropdown) node.classList.remove("open");
      });
      dropdown?.classList.toggle("open");
    }

    const editorDropdownOption = event.target.closest("[data-editor-dropdown-option]");
    if (editorDropdownOption) {
      const dropdown = editorDropdownOption.closest("[data-editor-dropdown]");
      const triggerText = dropdown?.querySelector("[data-editor-dropdown-trigger] span:first-child");
      if (triggerText) triggerText.textContent = editorDropdownOption.textContent;
      dropdown?.querySelectorAll("[data-editor-dropdown-option]").forEach((node) => {
        node.classList.toggle("selected", node === editorDropdownOption);
      });
      dropdown?.classList.remove("open");
    }

    const segmentedOption = event.target.closest(".editor-segmented button");
    if (segmentedOption) {
      segmentedOption.parentElement.querySelectorAll("button").forEach((node) => {
        node.classList.toggle("active", node === segmentedOption);
      });
    }
  });

  overlayBackdrop.addEventListener("click", hideOverlay);

  document.getElementById("landingPromptDesktop")?.addEventListener("input", toggleSubmitStates);
  document.getElementById("landingPromptMobile")?.addEventListener("input", toggleSubmitStates);
  document.getElementById("conversationPromptBar")?.addEventListener("input", toggleSubmitStates);
  document.getElementById("editorChatPrompt")?.addEventListener("input", toggleSubmitStates);
  document.getElementById("editorChatPrompt")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      document.getElementById("editorChatSubmit")?.click();
    }
  });
  document.getElementById("editorChatSubmit")?.addEventListener("click", () => {
    const input = document.getElementById("editorChatPrompt");
    const message = input?.value.trim();
    if (!input || !message) return;

    const messageNode = document.createElement("div");
    messageNode.className = "editor-chat-message";
    messageNode.textContent = message;
    document.getElementById("editorChatThread")?.appendChild(messageNode);
    input.value = "";
    toggleSubmitStates();
    input.focus();
  });
  document.querySelectorAll("[data-editor-panel-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      setEditorPanelView(tab.dataset.editorPanelTab, tab.dataset.panelView);
    });
  });
  document.getElementById("editorLeftPanelCollapse")?.addEventListener("click", () => {
    setEditorLeftPanelCollapsed(true);
  });
  document.getElementById("editorLeftPanelOpen")?.addEventListener("click", () => {
    setEditorLeftPanelCollapsed(false);
  });
  document.querySelector(".sidebar-auth-cta")?.addEventListener("click", () => {
    document.querySelector(".landing-sidebar")?.classList.add("is-signed-in");
  });
  document.getElementById("sidebarLogoToggle")?.addEventListener("click", () => {
    document.querySelector(".first-user-shell")?.classList.toggle("sidebar-collapsed");
  });
  document.getElementById("subjectSearch")?.addEventListener("input", (event) => {
    renderSubjectList(event.target.value);
  });

  document.getElementById("desktopLoadMore")?.addEventListener("click", () => {
    state.desktop.galleryCount = Math.min(templateCatalog.length, state.desktop.galleryCount + 3);
    renderGalleries();
  });

  document.getElementById("mobileLoadMore")?.addEventListener("click", () => {
    state.mobile.galleryCount = Math.min(templateCatalog.length, state.mobile.galleryCount + 2);
    renderGalleries();
  });

  document.getElementById("landingSubmitDesktop")?.addEventListener("click", () => {
    if (!document.getElementById("landingPromptDesktop").value.trim()) return;
    handlePromptSubmit("conversation-desktop");
  });

  document.getElementById("startFromScratchButton")?.addEventListener("click", () => {
    state.isBlankEditor = true;
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = null;
    state.isEditorFrameSelected = false;
    renderHistory();
    setScreen("editor-desktop");
  });

  document.getElementById("landingSubmitMobile")?.addEventListener("click", () => {
    if (!document.getElementById("landingPromptMobile").value.trim()) return;
    handlePromptSubmit("conversation-mobile");
  });

  document.getElementById("downloadFromPreview")?.addEventListener("click", showToast);
  document.getElementById("mobileDownloadBtn")?.addEventListener("click", showToast);

  document.getElementById("confirmExport")?.addEventListener("click", () => {
    hideOverlay();
    showToast();
  });

  document.getElementById("mobileExportConfirm")?.addEventListener("click", () => {
    hideOverlay();
    showToast();
  });

  document.getElementById("copyShareBtn")?.addEventListener("click", (event) => {
    navigator.clipboard?.writeText("https://paperpal.app/share/crispr-visual");
    event.target.textContent = "Copied";
    setTimeout(() => {
      event.target.textContent = "Copy";
    }, 1200);
  });

  document.getElementById("conversationSubmit")?.addEventListener("click", () => {
    const input = document.getElementById("conversationPromptBar");
    if (!input.value.trim()) return;
    document.getElementById("conversationUserPrompt").textContent = input.value.trim();
    state.prompt = input.value.trim();
    input.value = "";
    startImageGeneration();
  });

  document.getElementById("mobileConversationSubmit")?.addEventListener("click", () => {
    const input = document.getElementById("mobilePromptBar");
    if (!input.value.trim()) return;
    document.getElementById("mobileConversationUserPrompt").textContent = input.value.trim();
    state.prompt = input.value.trim();
    input.value = "";
  });

  document.querySelector("[data-scroll-chat]")?.addEventListener("click", () => {
    document.querySelector(".landing-chat")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.querySelector(".suggestions-arrow-right")?.addEventListener("click", () => {
    const rail = document.getElementById("desktopSuggestions");
    const firstPill = rail?.querySelector(".pill");
    if (!rail || !firstPill) return;
    const styles = window.getComputedStyle(rail);
    const gap = parseFloat(styles.columnGap || styles.gap || "12") || 12;
    rail.scrollBy({
      left: firstPill.offsetWidth + gap,
      behavior: "smooth",
    });
    setTimeout(updateSuggestionsRailState, 260);
  });

  document.querySelector(".suggestions-arrow-left")?.addEventListener("click", () => {
    const rail = document.getElementById("desktopSuggestions");
    const firstPill = rail?.querySelector(".pill");
    if (!rail || !firstPill) return;
    const styles = window.getComputedStyle(rail);
    const gap = parseFloat(styles.columnGap || styles.gap || "12") || 12;
    rail.scrollBy({
      left: -(firstPill.offsetWidth + gap),
      behavior: "smooth",
    });
    setTimeout(updateSuggestionsRailState, 260);
  });

  document.getElementById("desktopSuggestions")?.addEventListener("scroll", updateSuggestionsRailState);
  window.addEventListener("resize", updateSuggestionsRailState);

  document.getElementById("saveVisualizationName")?.addEventListener("click", () => {
    const input = document.getElementById("renameVisualizationInput");
    const nextTitle = input?.value.trim() || "Untitled";
    state.editorTitle = nextTitle;
    renderEditorTitle();
    hideOverlay();
  });

  document.getElementById("renameVisualizationInput")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("saveVisualizationName")?.click();
    }
  });

  document.getElementById("canvasZoomIn")?.addEventListener("click", () => {
    setCanvasZoom(state.zoom + 10);
  });

  document.getElementById("canvasZoomOut")?.addEventListener("click", () => {
    setCanvasZoom(state.zoom - 10);
  });

  document.getElementById("canvasZoomReset")?.addEventListener("click", () => {
    state.canvasPanX = 0;
    state.canvasPanY = 0;
    setCanvasZoom(100);
  });

  document.getElementById("editorCanvasStage")?.addEventListener("wheel", (event) => {
    if (!event.deltaY) return;
    event.preventDefault();
    setCanvasZoom(state.zoom + (event.deltaY < 0 ? 5 : -5));
  }, { passive: false });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (state.activeOverlay) {
        hideOverlay();
      } else if (state.desktop.activeScreen === "editor-select-area") {
        setScreen("editor-desktop");
      }
    }
  });
}

function setCanvasZoom(nextZoom) {
  state.zoom = Math.min(200, Math.max(10, nextZoom));
  updateZoom();
}

function updateZoom() {
  const zoomLabel = `${state.zoom}%`;
  const canvasZoomPill = document.getElementById("canvasZoomPill");
  if (canvasZoomPill) canvasZoomPill.textContent = zoomLabel;
  updateCanvasTransform();
}

function bindEditorBackgroundSwatches() {
  document.querySelectorAll(".editor-bg-swatch").forEach((button) => {
    button.addEventListener("click", () => {
      state.editorBackground = button.dataset.color || "#F5F7F9";
      document.querySelectorAll(".editor-bg-swatch").forEach((swatch) => {
        swatch.classList.toggle("active", swatch === button);
      });
      renderEditorCanvas();
    });
  });
}

function init() {
  renderCategoryPills("desktopCategoryPills", "desktop");
  renderCategoryPills("mobileCategoryPills", "mobile");
  renderGalleries();
  renderHistory();
  renderLandingHistoryVisibility();
  renderVariants();
  renderSuggestions();
  renderSubjectList();
  updatePreviewVisuals();
  renderEditorTitle();
  updateSuggestionsRailState();
  toggleSubmitStates();
  initLandingPromptTyping();
  updateEditorToolbar("text");
  bindCanvasSelection();
  bindCanvasToolbar();
  setEditorPanelView("left", state.editorLeftPanelView);
  setEditorPanelView("right", state.editorRightPanelView);
  setEditorLeftPanelCollapsed(state.editorLeftPanelCollapsed);
  bindSelectGroups();
  bindEditorBackgroundSwatches();
  initActions();
  syncConversationPrompt();
  syncMobileConversationPrompt();
  renderEditorCanvas();
  updateZoom();
}

init();
