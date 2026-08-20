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

const editorLibraryCategories = [
  {id: "medical-science", name: "Medical Science", icon: "heart", labels: ["Human heart anatomy", "Brain pathways", "Cellular response", "Clinical anatomy", "Immune signaling", "Organ systems"]},
  {id: "nutrition", name: "Nutrition", icon: "apple", labels: ["Balanced nutrition", "Food groups", "Nutrient absorption", "Healthy metabolism", "Dietary fiber", "Micronutrients"]},
  {id: "odontology", name: "Odontology", icon: "stethoscope", labels: ["Tooth anatomy", "Dental implant", "Oral microbiome", "Gum health", "Dental arch", "Root canal"]},
  {id: "pharmacy", name: "Pharmacy", icon: "capsule", labels: ["Drug delivery", "Capsule release", "Pharmacokinetics", "Medication pathway", "Dosage forms", "Therapeutic action"]},
  {id: "nursing", name: "Nursing", icon: "nursing", labels: ["Patient monitoring", "Clinical care", "Vital signs", "Wound management", "Bedside assessment", "Care pathway"]},
  {id: "animal-science", name: "Animal Science", icon: "paw", labels: ["Animal anatomy", "Veterinary care", "Companion health", "Animal nutrition", "Wildlife biology", "Livestock science"]},
  {id: "plant-science", name: "Plant Science", icon: "leaf", labels: ["Leaf anatomy", "Plant transport", "Photosynthesis", "Root structure", "Plant growth", "Crop biology"]},
  {id: "biology", name: "Biology", icon: "microscope", labels: ["Antigen receptor", "Cell membrane", "Immune cell", "Cell division", "Receptor binding", "Cell signaling"]},
  {id: "molecular-sciences", name: "Molecular Sciences", icon: "atom", labels: ["Molecular structure", "Protein binding", "DNA mechanism", "RNA delivery", "Chemical interaction", "Molecular pathway"]},
  {id: "life-science", name: "Life Science", icon: "dna", labels: ["DNA helix", "Cell lifecycle", "Genetic pathway", "Tissue biology", "Protein synthesis", "Biological process"]},
  {id: "pharmacology", name: "Pharmacology", icon: "flask", labels: ["Dose response", "Drug target", "Receptor action", "Clinical compound", "Therapeutic pathway", "Drug metabolism"]},
  {id: "environmental-science", name: "Environmental Science", icon: "tree", labels: ["Climate system", "Ecosystem cycle", "Carbon pathway", "Water cycle", "Renewable energy", "Biodiversity"]},
  {id: "humanities", name: "Humanities", icon: "book", labels: ["Research framework", "Historical timeline", "Cultural studies", "Literature analysis", "Social theory", "Learning model"]},
  {id: "stem", name: "STEM", icon: "cap", labels: ["Engineering process", "Mathematical model", "Technology system", "Physics diagram", "Learning pathway", "Scientific method"]},
  {id: "others", name: "Others", icon: "grid", labels: ["Concept diagram", "Process flow", "Research model", "Visual summary", "Comparison chart", "General illustration"]},
];

const editorLibraryImages = [
  "ga-inflammation.png",
  "ga-mrna-delivery.png",
  "infographic-plant-transport.png",
  "poster-alzheimers.png",
  "ga-bacterial-immune-response.png",
  "infographic-climate-pathways.png",
  "poster-diabetes.png",
  "infographic-crispr.png",
];

function editorLibraryIconSource(content) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#F8F9FD"/><g fill="none" stroke="#1C4DC1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${content}</g></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const editorLibraryIconAssets = [
  {id: "gallery-icon-heart", title: "Heart", src: editorLibraryIconSource('<path d="M32 49S13 39 13 25a10 10 0 0 1 19-5 10 10 0 0 1 19 5c0 14-19 24-19 24Z"/>')},
  {id: "gallery-icon-cell", title: "Cell", src: editorLibraryIconSource('<circle cx="32" cy="32" r="19"/><circle cx="32" cy="32" r="8"/><path d="m16 23 6 3m26-3-6 3M16 41l6-3m26 3-6-3"/>')},
  {id: "gallery-icon-dna", title: "DNA", src: editorLibraryIconSource('<path d="M21 13c0 13 22 25 22 38M43 13c0 13-22 25-22 38M24 20h16M22 30h20M22 40h20M24 49h16"/>')},
  {id: "gallery-icon-flask", title: "Laboratory Flask", src: editorLibraryIconSource('<path d="M25 13h14M29 13v13L18 45a4 4 0 0 0 4 6h20a4 4 0 0 0 4-6L35 26V13M23 41h18"/>')},
  {id: "gallery-icon-leaf", title: "Leaf", src: editorLibraryIconSource('<path d="M48 15C29 15 18 24 18 37c0 8 6 13 14 13 13 0 20-12 16-35Z"/><path d="M16 52c4-13 12-21 25-28"/>')},
  {id: "gallery-icon-molecule", title: "Molecule", src: editorLibraryIconSource('<circle cx="18" cy="35" r="6"/><circle cx="37" cy="18" r="6"/><circle cx="46" cy="43" r="6"/><path d="m23 31 9-8m8 1 4 13m-20 1 16 4"/>')},
  {id: "gallery-icon-microscope", title: "Microscope", src: editorLibraryIconSource('<path d="M25 14h12v8H25zM29 22v12m8-8a15 15 0 0 1 5 27M18 51h30M21 42h17M21 35h14"/>')},
  {id: "gallery-icon-capsule", title: "Capsule", src: editorLibraryIconSource('<path d="M20 44a10 10 0 0 1 0-14l13-13a10 10 0 1 1 14 14L34 44a10 10 0 0 1-14 0Z"/><path d="m27 24 14 14"/>')},
];

const editorLibraryTemplateAssets = templateCatalog
  .filter((template) => template.image)
  .map((template) => ({
    id: `gallery-template-${template.id}`,
    title: template.title,
    src: template.image,
    kind: "template",
    category: template.category,
  }));

const editorLibraryIconPaths = {
  heart: '<path d="M10.36 1.31c-.75 0-1.45.36-1.89.96L7.53 3.58a.65.65 0 0 1-1.06 0l-.94-1.31a2.33 2.33 0 0 0-4.21 1.37c0 1.36.87 2.69 1.86 3.89 1.12 1.37 2.5 2.57 3.44 3.29.09.07.22.12.38.12s.3-.05.39-.12c.94-.72 2.32-1.93 3.44-3.29.99-1.2 1.86-2.53 1.86-3.89a2.33 2.33 0 0 0-2.33-2.33ZM7.41 1.51A3.64 3.64 0 0 1 14 3.64c0 1.88-1.17 3.53-2.16 4.73-1.21 1.46-2.66 2.73-3.66 3.49-.34.26-.75.39-1.18.39s-.84-.13-1.18-.39c-1-.76-2.45-2.03-3.66-3.49C1.17 7.17 0 5.52 0 3.64A3.64 3.64 0 0 1 6.59 1.51L7 2.07l.41-.56Z"/>',
  apple: '<path d="M6.13 3.06h.43A2.19 2.19 0 0 0 8.75.88V.44A.44.44 0 0 0 8.31 0h-.43a2.19 2.19 0 0 0-2.19 2.19v.44c0 .24.2.43.44.43ZM3.06 3.5C.98 3.5 0 5.79 0 7.88 0 11.38 2.19 14 4.38 14c.32 0 .72-.09 1.06-.19.45-.14.93-.14 1.38 0 .33.1.73.19 1.06.19 2.19 0 4.38-2.62 4.38-6.12 0-2.09-.98-4.38-3.06-4.38-.75 0-1.63.28-2.26.53-.52.2-1.09.2-1.61 0-.62-.25-1.51-.53-2.26-.53Zm-1.75 4.38c0-.87.21-1.71.56-2.29.33-.55.72-.78 1.19-.78.49 0 1.18.2 1.79.44.82.32 1.73.32 2.55 0 .61-.24 1.3-.44 1.79-.44.47 0 .86.23 1.19.78.35.58.56 1.42.56 2.29 0 1.48-.47 2.73-1.1 3.58-.66.88-1.4 1.23-1.96 1.23-.13 0-.37-.05-.68-.14a3.72 3.72 0 0 0-2.14 0c-.31.09-.56.14-.68.14-.56 0-1.3-.35-1.96-1.23-.64-.85-1.1-2.1-1.1-3.58Z"/>',
  stethoscope: '<path d="M2 1v3.25a3.25 3.25 0 0 0 6.5 0V1M1 1h2M7.5 1h2M5.25 7.5v1.25a3 3 0 0 0 6 0V7.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="11.25" cy="5.75" r="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  capsule: '<path d="M0 8.54c0-.99.39-1.93 1.09-2.63l4.82-4.82A3.71 3.71 0 1 1 11.16 6.34l-4.82 4.82A3.71 3.71 0 0 1 0 8.54Zm7.36-.25L3.96 4.89 2.02 6.84a2.4 2.4 0 1 0 3.39 3.4l1.95-1.95Zm.93-.93 1.95-1.95a2.4 2.4 0 1 0-3.4-3.4L4.89 3.96l3.4 3.4Z"/>',
  nursing: '<path d="M10.36 1.31a2.33 2.33 0 0 0-1.89.96L7 4.31 5.53 2.27a2.33 2.33 0 0 0-4.21 1.37c0 .85.34 1.68.83 2.49h1.23c.08 0 .16-.05.2-.13l.86-1.9a.66.66 0 0 1 1.18-.03l1.43 2.7L8.2 4.91a.66.66 0 0 1 1.13.02l.62 1.09c.04.07.11.11.19.11h1.72c.49-.8.83-1.64.83-2.49a2.33 2.33 0 0 0-2.33-2.33ZM2.49 8.75h1.79c.84.85 1.69 1.58 2.34 2.07.09.07.22.12.38.12s.3-.05.39-.12c.65-.49 1.5-1.22 2.34-2.07h1.79a19.1 19.1 0 0 1-3.34 3.11c-.34.26-.75.39-1.18.39s-.84-.13-1.17-.39a19.1 19.1 0 0 1-3.34-3.11Z"/>',
  paw: '<path d="M5.25 1.31A1.31 1.31 0 1 1 2.63 1.31a1.31 1.31 0 0 1 2.62 0Zm-.02 4c.2-.31.53-.5.9-.5s.7.19.89.5l1.34 2.15c.24.38.58.62.89.77.49.23.82.72.82 1.28a1.42 1.42 0 0 1-2.23 1.17c-.54-.37-1.2-.48-1.71-.48s-1.17.11-1.71.48a1.42 1.42 0 1 1-1.41-2.45c.31-.15.64-.39.88-.77l1.34-2.15ZM9.63 1.31a1.31 1.31 0 1 1-2.63 0 1.31 1.31 0 0 1 2.63 0Zm2.62 3.06a1.31 1.31 0 1 1-2.63 0 1.31 1.31 0 0 1 2.63 0Zm-9.63 0A1.31 1.31 0 1 1 0 4.37a1.31 1.31 0 0 1 2.62 0Z"/>',
  leaf: '<path d="M12.89.18c.17-.16.43-.22.66-.15.27.09.45.34.45.63v5.11a6.48 6.48 0 0 1-6.53 6.48 4.87 4.87 0 0 1-4.69-3.59 4.57 4.57 0 0 0-1.47 3.37v.44a.66.66 0 0 1-1.31 0v-.44c0-2.05 1.05-3.86 2.64-4.92A4.82 4.82 0 0 1 7.44 2.63c1.81 0 3.16-.61 4.06-1.21.53-.35.98-.77 1.39-1.24Zm-.2 2c-1.05.81-2.8 1.76-5.25 1.76a3.5 3.5 0 0 0-3.35 2.47 5.89 5.89 0 0 1 1.82-.28h2.18a.66.66 0 0 1 0 1.31H5.91c-.7 0-1.35.16-1.95.43a3.54 3.54 0 0 0 3.51 3.07 5.2 5.2 0 0 0 5.22-5.17V2.18Z"/>',
  microscope: '<path d="M4.81 1.31v6.13h1.75V1.31H4.81Zm-1.31 0C3.5.59 4.09 0 4.81 0h1.75c.73 0 1.31.59 1.31 1.31V3.5h.88A5.25 5.25 0 0 1 12.22 12.69h1.12a.66.66 0 0 1 0 1.31H.66a.66.66 0 0 1 0-1.31h8.09a3.94 3.94 0 0 0 0-7.88h-.88v2.63c0 .72-.58 1.31-1.31 1.31H4.81c-.72 0-1.31-.59-1.31-1.31V1.31Zm-.22 8.75h4.81a.66.66 0 0 1 0 1.31H3.28a.66.66 0 0 1 0-1.31Z"/>',
  atom: '<path d="M1.57 10.67c.22.22.86.47 2.2.02.36-.12.75-.28 1.14-.49a15.7 15.7 0 0 1-2.86-2.86c-.21.39-.37.78-.49 1.14-.45 1.34-.2 1.98.01 2.19ZM1.22 6.12C-.12 3.88-.42 1.72.65.65 1.72-.42 3.88-.12 6.12 1.22 8.37-.12 10.53-.42 11.6.65c1.07 1.07.77 3.23-.58 5.47 1.35 2.25 1.65 4.41.58 5.48-1.07 1.07-3.23.77-5.48-.58-2.24 1.35-4.4 1.65-5.47.58-1.07-1.07-.77-3.23.57-5.48Zm4.9-3.33c-.6.42-1.21.93-1.81 1.52-.59.6-1.1 1.21-1.52 1.81.42.61.93 1.22 1.52 1.81.6.6 1.21 1.11 1.81 1.53.61-.42 1.22-.93 1.82-1.53.59-.59 1.1-1.2 1.52-1.81-.42-.6-.93-1.21-1.52-1.81-.6-.59-1.21-1.1-1.82-1.52Zm-.9 3.33a.89.89 0 1 1 1.78 0 .89.89 0 0 1-1.78 0Z"/>',
  dna: '<path d="M9.84 0c.36 0 .66.29.66.66 0 1.52-.67 2.78-1.59 3.88A18.8 18.8 0 0 1 6.29 7c.94.77 1.88 1.58 2.62 2.46.92 1.1 1.59 2.37 1.59 3.88a.66.66 0 0 1-1.32.06H1.32a.66.66 0 0 1-1.32-.06c0-1.51.67-2.78 1.59-3.88A18.8 18.8 0 0 1 4.21 7a18.8 18.8 0 0 1-2.62-2.46A5.9 5.9 0 0 1 0 .66a.66.66 0 0 1 1.32-.06h7.86A.66.66 0 0 1 9.84 0ZM1.63 2.19c.19.45.47.88.81 1.31h5.62c.34-.43.61-.86.81-1.31H1.63Zm2.05 2.62c.49.45 1.02.9 1.57 1.35.55-.45 1.09-.9 1.57-1.35H3.68Zm-2.05 7h7.23c-.19-.45-.46-.88-.8-1.31H2.44c-.34.43-.62.86-.81 1.31Zm2.05-2.62h3.14c-.48-.45-1.02-.89-1.57-1.34-.55.45-1.08.89-1.57 1.34Z"/>',
  flask: '<path d="M2.63.66c0-.37.29-.66.65-.66h5.69a.66.66 0 0 1 0 1.31h-.22v4.64l3.3 5.78A1.52 1.52 0 0 1 10.73 14H1.52A1.52 1.52 0 0 1 .2 11.73l3.3-5.78V1.31h-.22a.66.66 0 0 1-.65-.65Zm2.18.65v4.82a.66.66 0 0 1-.09.32L3.66 8.31h4.93L7.52 6.45a.66.66 0 0 1-.09-.32V1.31H4.81Zm-1.9 8.32-1.57 2.75a.21.21 0 0 0 .18.31h9.21a.21.21 0 0 0 .18-.31L9.34 9.63H2.91Z"/>',
  tree: '<path d="M5.44 0c.17 0 .34.08.45.21l3.3 3.89c.15.17.19.41.09.62-.09.2-.3.34-.53.34h-.61l1.83 2.15c.15.17.18.41.09.62-.1.21-.31.34-.53.34h-.94l2.16 2.54c.15.17.18.41.08.62-.09.2-.3.34-.52.34H6.03v1.75a.58.58 0 0 1-1.17 0v-1.75H.58a.58.58 0 0 1-.44-.96L2.3 8.17h-.94a.58.58 0 0 1-.44-.96l1.82-2.15h-.6a.58.58 0 0 1-.45-.96L5 .21A.58.58 0 0 1 5.44 0ZM3.4 3.89h.61a.58.58 0 0 1 .44.96L2.62 7h.94A.58.58 0 0 1 4 7.96L1.84 10.5h7.2L6.89 7.96A.58.58 0 0 1 7.33 7h.94L6.44 4.85a.58.58 0 0 1 .44-.96h.61L5.44 1.48 3.4 3.89Z"/>',
  book: '<path d="M6.34 2.24 5.81 2A9.18 9.18 0 0 0 2.28 1.31h-.96v9.63h.96c1.39 0 2.77.24 4.07.72V2.24Zm1.32 9.42a12 12 0 0 1 4.06-.72h.97V1.31h-.97c-1.21 0-2.41.24-3.53.71l-.53.22v9.42ZM6.31.81 7 1.09l.69-.28A10.5 10.5 0 0 1 11.72 0h.97C13.41 0 14 .59 14 1.31v9.63c0 .72-.59 1.31-1.31 1.31h-.97c-1.38 0-2.75.27-4.03.81l-.35.14a.88.88 0 0 1-.68 0l-.35-.14a10.5 10.5 0 0 0-4.03-.81h-.97C.59 12.25 0 11.66 0 10.94V1.31C0 .59.59 0 1.31 0h.97c1.38 0 2.75.27 4.03.81Z"/>',
  cap: '<path d="M7.75.15A1.97 1.97 0 0 0 6.25.15L.36 2.57A.58.58 0 0 0 0 3.11v7.19a.58.58 0 0 0 1.17 0V3.98l1.16.48v4.1c0 1.29 2.09 2.33 4.67 2.33s4.67-1.04 4.67-2.33v-4.1l1.97-.81a.58.58 0 0 0 0-1.08L7.75.15ZM3.5 8.56V4.94l2.75 1.13c.48.2 1.02.2 1.5 0l2.75-1.13v3.62c-.1.35-1.54 1.16-3.5 1.16s-3.4-.81-3.5-1.16ZM2.12 3.11 6.7 1.23a.8.8 0 0 1 .6 0l4.58 1.88L7.3 5a.8.8 0 0 1-.6 0L2.12 3.11Z"/>',
  grid: '<path d="M10.5 1.31c.24 0 .44.2.44.44v3.72H6.78V1.31h3.72Zm.44 5.47v3.72c0 .24-.2.44-.44.44H6.78V6.78h4.16ZM5.47 5.47H1.31V1.75c0-.24.2-.44.44-.44h3.72v4.16ZM1.31 6.78h4.16v4.16H1.75a.44.44 0 0 1-.44-.44V6.78ZM1.75 0C.78 0 0 .78 0 1.75v8.75c0 .97.78 1.75 1.75 1.75h8.75c.97 0 1.75-.78 1.75-1.75V1.75C12.25.78 11.47 0 10.5 0H1.75Z"/>',
};

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

const landingHeadingPhrases = ["Graphical Abstract", "Poster", "Infographic"];

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
  landingTourStep: 0,
  selectedVariant: 1,
  activeOverlay: null,
  editorState: "text",
  zoom: 100,
  canvasTool: "select",
  canvasShape: "rectangle",
  shapeFill: "transparent",
  shapeFillCustom: false,
  shapeStroke: "#13161B",
  shapeStrokeCustom: false,
  shapeStrokeWidth: 2,
  shapeStrokeStyle: "solid",
  shapeEdges: "sharp",
  shapeOpacity: 100,
  canvasLine: "line",
  lineStroke: "#13161B",
  lineStrokeCustom: false,
  lineStrokeWidth: 1,
  lineStrokeStyle: "solid",
  lineEdges: "sharp",
  lineOpacity: 100,
  arrowType: "straight",
  arrowStarthead: "none",
  arrowEndhead: "arrow",
  penStroke: "#13161B",
  penStrokeCustom: false,
  penStrokeWidth: 1,
  penOpacity: 100,
  textStroke: "#13161B",
  textStrokeCustom: false,
  textTypography: 500,
  textAlign: "left",
  textOpacity: 100,
  frameRatio: "16:9",
  frameOpacity: 100,
  tableRows: 3,
  tableColumns: 3,
  tableStyle: "plain",
  tableAlternating: false,
  tableHeaderFill: "#EDF3FF",
  tableBodyFill: "#FFFFFF",
  tableOutlineColor: "#BCC7DC",
  tableOutlineWidth: 1,
  tableOutlineDash: 0,
  tableOutlineMode: "all",
  tableFont: "IBM Plex Sans",
  tableFontSize: 14,
  tableTextColor: "#13161B",
  tableLineHeight: 1.15,
  tableAlign: "left",
  tableVerticalAlign: "top",
  tableListStyle: "none",
  tableBold: false,
  tableItalic: false,
  tableUnderline: false,
  tableTransparency: 0,
  selectedTableCell: null,
  chartDraft: null,
  chartEditingObject: null,
  chartEditorTab: "content",
  canvasPanX: 0,
  canvasPanY: 0,
  editorLeftPanelCollapsed: false,
  editorLeftPanelView: "edit",
  editorRightPanelView: "chat",
  editorSlides: [],
  editorUploads: [],
  editorLibraryCategoryId: null,
  editorLibraryType: "illustrations",
  editorLibraryQuery: "",
  editorLibraryReferenceId: null,
  activeEditorSlideId: null,
  currentEditorTemplate: templateCatalog[0],
  editorBackground: "#F5F7F9",
  editorTitle: "Untitled",
  selectedEditorSegmentId: null,
  selectedEditorSegmentType: null,
  isEditorFrameSelected: false,
  imageRotation: 0,
  imageOffsetX: 0,
  imageOffsetY: 0,
  imageFlipX: 1,
  imageFlipY: 1,
  imageWidth: null,
  imageHeight: null,
  imageUnits: "in",
  imageAspectLocked: true,
  imageTransformTemplateId: null,
  isEditorCropping: false,
  editorCropRect: null,
  editorCroppedImages: {},
  isEditorRegionEditing: false,
  editorRegionTool: "rectangle",
  editorRegionStrokeWidth: 12,
  editorRegionColor: "#0062FF",
  imageOpacity: 100,
  imageLayer: 1,
  imagePromptExpanded: false,
  imageClipboard: null,
  imageFavorite: false,
  editorExportFormat: "png",
  editorExportDpi: "96",
  editorExportCertificate: true,
  editorInspectorPromptExpanded: false,
  editorInspectorTemplateId: null,
  editorSegmentStyles: {},
  blankCanvasPreset: "10:7",
  blankCanvasWidth: 10,
  blankCanvasHeight: 7,
  blankCanvasUnit: "in",
  blankCanvasAspectLocked: true,
  blankCanvasColor: "#FFFFFF",
  blankCanvasDraft: null,
  isEditingBlankCanvasSize: false,
  hasHistory: false,
  mixedOrder: shuffle([...templateCatalog]),
  generatedResultTemplate: templateCatalog[0],
  pendingGeneratedResultTemplate: null,
  isGeneratingImage: false,
  generationTimer: null,
  generationRequestId: 0,
  generationController: null,
  generationNotice: "",
  editorChatSessionPrompt: "",
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

const landingTourSteps = [
  {
    title: "Describe your visual",
    description: "Tell Paperpal what you want to create, then choose your ratio, style, and image model.",
    animation: "assets/tour/describe-visual.lottie",
  },
  {
    title: "Guide it with scientific illustrations",
    description: "Browse 25,000+ expert-designed scientific illustrations and use them as references for a more accurate visual.",
    animation: "assets/tour/scientific-illustrations.lottie",
  },
  {
    title: "Refine with simple prompts",
    description: "Ask Paperpal to change, add, remove, or restyle elements until the illustration looks right.",
    animation: "assets/tour/refine-prompts.lottie",
  },
  {
    title: "Export, edit, and present anywhere",
    description: "Export high-resolution PNG, SVG, or PPTX, then continue editing vector elements, labels, colours, and layouts directly in PowerPoint.",
    animation: "assets/tour/export-powerpoint.lottie",
  },
];

function bindLandingTour() {
  const backdrop = document.getElementById("landingHowTour");
  const dialog = backdrop?.querySelector(".how-tour-dialog");
  const trigger = document.getElementById("landingHowItWorksTrigger");
  const close = document.getElementById("landingHowTourClose");
  const skip = document.getElementById("landingHowTourSkip");
  const previous = document.getElementById("landingHowTourPrevious");
  const forward = document.getElementById("landingHowTourForward");
  const primary = document.getElementById("landingHowTourPrimary");
  const title = document.getElementById("landingHowTourTitle");
  const description = document.getElementById("landingHowTourDescription");
  const media = document.getElementById("landingHowTourMedia");
  const progress = document.getElementById("landingHowTourProgress");
  if (!backdrop || !dialog || !trigger || !close || !skip || !previous || !forward || !primary || !title || !description || !media || !progress) return;

  let returnFocus = null;

  landingTourSteps.forEach((step, index) => {
    const indicator = document.createElement("button");
    indicator.className = "how-tour-progress-button";
    indicator.type = "button";
    indicator.dataset.tourStep = String(index);
    indicator.setAttribute("aria-label", `Go to step ${index + 1}: ${step.title}`);
    progress.appendChild(indicator);
  });

  const render = () => {
    const step = landingTourSteps[state.landingTourStep];
    const isFirst = state.landingTourStep === 0;
    const isLast = state.landingTourStep === landingTourSteps.length - 1;
    title.textContent = step.title;
    description.textContent = step.description;
    media.dataset.tourStep = String(state.landingTourStep + 1);
    media.setAttribute("aria-label", `Animation for step ${state.landingTourStep + 1}: ${step.title}`);
    const player = document.createElement("dotlottie-wc");
    player.setAttribute("src", step.animation);
    player.setAttribute("autoplay", "true");
    player.setAttribute("loop", "true");
    player.setAttribute("aria-hidden", "true");
    media.replaceChildren(player);
    previous.disabled = isFirst;
    forward.disabled = isLast;
    primary.textContent = isLast ? "Start Creating" : "Next";
    progress.querySelectorAll(".how-tour-progress-button").forEach((indicator, index) => {
      const isActive = index === state.landingTourStep;
      indicator.classList.toggle("active", isActive);
      indicator.setAttribute("aria-current", isActive ? "step" : "false");
    });
  };

  const open = () => {
    returnFocus = document.activeElement instanceof HTMLElement && document.activeElement !== document.body
      ? document.activeElement
      : trigger;
    state.landingTourStep = 0;
    render();
    backdrop.hidden = false;
    document.body.classList.add("how-tour-open");
    trigger.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(() => dialog.focus());
  };

  const dismiss = () => {
    backdrop.hidden = true;
    media.replaceChildren();
    document.body.classList.remove("how-tour-open");
    trigger.setAttribute("aria-expanded", "false");
    const focusTarget = returnFocus && document.contains(returnFocus) ? returnFocus : trigger;
    focusTarget.focus({preventScroll: true});
  };

  const goToStep = (step) => {
    state.landingTourStep = Math.max(0, Math.min(landingTourSteps.length - 1, step));
    render();
  };

  trigger.addEventListener("click", open);
  close.addEventListener("click", dismiss);
  skip.addEventListener("click", dismiss);
  previous.addEventListener("click", () => goToStep(state.landingTourStep - 1));
  forward.addEventListener("click", () => goToStep(state.landingTourStep + 1));
  primary.addEventListener("click", () => {
    if (state.landingTourStep === landingTourSteps.length - 1) {
      dismiss();
      return;
    }
    goToStep(state.landingTourStep + 1);
  });
  progress.addEventListener("click", (event) => {
    const indicator = event.target.closest("[data-tour-step]");
    if (indicator) goToStep(Number(indicator.dataset.tourStep));
  });
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) dismiss();
  });
  backdrop.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dismiss();
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToStep(state.landingTourStep - 1);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToStep(state.landingTourStep + 1);
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(dialog.querySelectorAll("button:not(:disabled)"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === dialog || document.activeElement === first)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

}

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

function activeGeneratedTemplate() {
  return (
    state.isGeneratingImage
      ? state.pendingGeneratedResultTemplate || state.generatedResultTemplate
      : state.generatedResultTemplate
  ) || state.currentEditorTemplate || templateCatalog[0];
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
      if (state.desktop.activeScreen === "editor-desktop") renderEditorCanvas();
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
    if (state.desktop.activeScreen === "editor-desktop") renderEditorCanvas();
  }
}

function getGalleryItems(category) {
  if (!category) {
    return state.mixedOrder;
  }
  return templateCatalog.filter((item) => item.category === category);
}

function setScreen(name) {
  if (name !== "editor-desktop") hideEditorLibraryPreview();
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
      state.imageRotation = 0;
      state.imageOffsetX = 0;
      state.imageOffsetY = 0;
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

function editorChatResponseText(template = activeGeneratedTemplate()) {
  const visualTypeByCategory = {
    Infographics: "infographic",
    Posters: "poster",
    "Graphical Abstracts": "graphical abstract",
    Diagram: "diagram",
    Diagrams: "diagram",
  };
  const visualType =
    visualTypeByCategory[template.category] ||
    String(template.category || "visual")
      .replace(/s$/i, "")
      .toLowerCase();

  if (state.isGeneratingImage) {
    return `I’m creating a ${visualType} for you. I’ll turn your prompt into a clean, publication-ready visual design.`;
  }
  if (state.generationNotice) return state.generationNotice;
  return `Here is your generated ${visualType}. You can refine the design with a suggestion below or describe another change.`;
}

function syncEditorChatHistory(template = activeGeneratedTemplate()) {
  const session = document.querySelector("[data-editor-generation-session]");
  if (!session) return;

  const response = session.querySelector("[data-editor-generation-response]");
  const image = session.querySelector("[data-editor-generation-image]");
  const status = session.querySelector("[data-editor-generation-status]");

  if (response) response.textContent = editorChatResponseText(template);
  if (image) {
    image.src = template.image;
    image.alt = template.title;
  }
  if (status) status.textContent = state.isGeneratingImage ? "Generating visual" : "Generated visual";
  session.classList.toggle("is-generating", state.isGeneratingImage);
}

function renderEditorChatHistory({reset = false} = {}) {
  const thread = document.getElementById("editorChatThread");
  const prompt = state.editorChatSessionPrompt.trim();
  if (!thread || !prompt) return;

  if (reset) thread.replaceChildren();
  let session = thread.querySelector("[data-editor-generation-session]");
  if (!session) {
    session = document.createElement("section");
    session.className = "editor-chat-generation-session";
    session.dataset.editorGenerationSession = "";

    const userMessage = document.createElement("div");
    userMessage.className = "editor-chat-message editor-chat-message-user";
    userMessage.textContent = prompt;

    const assistant = document.createElement("div");
    assistant.className = "editor-chat-assistant";

    const response = document.createElement("p");
    response.className = "editor-chat-assistant-copy";
    response.dataset.editorGenerationResponse = "";

    const resultCard = document.createElement("figure");
    resultCard.className = "editor-chat-result-card";
    const status = document.createElement("figcaption");
    status.className = "editor-chat-result-status";
    status.dataset.editorGenerationStatus = "";
    const image = document.createElement("img");
    image.dataset.editorGenerationImage = "";
    resultCard.append(image, status);

    const suggestions = document.createElement("div");
    suggestions.className = "editor-chat-suggestions";
    suggestions.setAttribute("aria-label", "Suggested refinements");
    ["More designs", "Make colors more natural", "Simplify the labels"].forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => {
        const composer = document.getElementById("editorChatPrompt");
        if (!composer) return;
        composer.value = label;
        toggleSubmitStates();
        composer.focus();
      });
      suggestions.appendChild(button);
    });

    const feedback = document.createElement("div");
    feedback.className = "editor-chat-feedback";
    [
      ["Copy response", "copy", '<path d="M5 5h7v9H5zM2 2h7v3H5v6H2z"/>'],
      ["Helpful", "helpful", '<path d="M6 14H3V7h3m0 7h5.5a1.5 1.5 0 0 0 1.45-1.12l1-4A1.5 1.5 0 0 0 12.5 7H9l.5-3A1.7 1.7 0 0 0 8 2L6 7"/>'],
      ["Not helpful", "unhelpful", '<path d="M6 2H3v7h3m0-7h5.5a1.5 1.5 0 0 1 1.45 1.12l1 4A1.5 1.5 0 0 1 12.5 9H9l.5 3A1.7 1.7 0 0 1 8 14L6 9"/>'],
    ].forEach(([label, action, icon]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.chatFeedback = action;
      button.setAttribute("aria-label", label);
      button.title = label;
      button.innerHTML = `<svg viewBox="0 0 16 16" aria-hidden="true">${icon}</svg>`;
      button.addEventListener("click", async () => {
        if (action === "copy") {
          await navigator.clipboard?.writeText(response.textContent || "");
          button.classList.add("selected");
          window.setTimeout(() => button.classList.remove("selected"), 900);
          return;
        }
        feedback.querySelectorAll("[data-chat-feedback='helpful'], [data-chat-feedback='unhelpful']").forEach((item) => {
          item.classList.toggle("selected", item === button && !button.classList.contains("selected"));
        });
      });
      feedback.appendChild(button);
    });

    assistant.append(response, resultCard, suggestions, feedback);
    session.append(userMessage, assistant);
    thread.appendChild(session);
  }

  syncEditorChatHistory();
  requestAnimationFrame(() => {
    thread.scrollTop = thread.scrollHeight;
  });
}

function updatePreviewVisuals() {
  const activeVariant = activeGeneratedTemplate();
  const preview = document.getElementById("previewPanelImage");
  const mobilePreview = document.getElementById("mobilePreviewImage");
  const conversationAiOutput = document.getElementById("conversationAiOutput");
  const previewConversationUserPrompt = document.getElementById("previewConversationUserPrompt");
  const previewConversationAiOutput = document.getElementById("previewConversationAiOutput");
  const previewConversationImage = document.getElementById("previewConversationImage");
  const previewConversationPills = document.getElementById("previewConversationPills");

  syncEditorChatHistory(activeVariant);

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

function initLandingHeadingTyping() {
  const heading = document.getElementById("landingHeadingTyping");
  if (!heading) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heading.textContent = landingHeadingPhrases[0];
    return;
  }

  let phraseIndex = 0;
  let characterIndex = landingHeadingPhrases[0].length;
  let deleting = true;

  const updateHeading = () => {
    const phrase = landingHeadingPhrases[phraseIndex];
    if (deleting) {
      characterIndex = Math.max(0, characterIndex - 1);
      heading.textContent = phrase.slice(0, characterIndex);
      if (characterIndex === 0) {
        phraseIndex = (phraseIndex + 1) % landingHeadingPhrases.length;
        deleting = false;
        window.setTimeout(updateHeading, 280);
        return;
      }
      window.setTimeout(updateHeading, 48);
      return;
    }

    characterIndex = Math.min(landingHeadingPhrases[phraseIndex].length, characterIndex + 1);
    heading.textContent = landingHeadingPhrases[phraseIndex].slice(0, characterIndex);
    if (characterIndex === landingHeadingPhrases[phraseIndex].length) {
      deleting = true;
      window.setTimeout(updateHeading, 1400);
      return;
    }
    window.setTimeout(updateHeading, 82);
  };

  window.setTimeout(updateHeading, 1400);
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

const blankCanvasPresetDimensions = {
  "16:9": {width: 16, height: 9},
  "10:7": {width: 10, height: 7},
  "4:3": {width: 4, height: 3},
  "1:1": {width: 8, height: 8},
  "2:3": {width: 6, height: 9},
};

function resetBlankCanvasState() {
  state.blankCanvasPreset = "10:7";
  state.blankCanvasWidth = 10;
  state.blankCanvasHeight = 7;
  state.blankCanvasUnit = "in";
  state.blankCanvasAspectLocked = true;
  state.blankCanvasColor = "#FFFFFF";
  state.blankCanvasDraft = null;
  state.isEditingBlankCanvasSize = false;
}

function formatBlankCanvasDimension(value) {
  const rounded = Math.round(Number(value) * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function blankCanvasDisplaySize(width, height) {
  const shell = document.getElementById("editorCanvasMediaShell");
  const ratio = Math.max(0.05, Number(width) / Math.max(0.05, Number(height)));
  const shellWidth = shell?.clientWidth || 900;
  const shellHeight = shell?.clientHeight || 760;
  const maxWidth = Math.max(280, shellWidth - 112);
  const maxHeight = Math.max(280, shellHeight - 178);
  let displayWidth = maxWidth;
  let displayHeight = displayWidth / ratio;
  if (displayHeight > maxHeight) {
    displayHeight = maxHeight;
    displayWidth = displayHeight * ratio;
  }
  return {
    width: Math.round(Math.max(220, displayWidth)),
    height: Math.round(Math.max(180, displayHeight)),
  };
}

function syncBlankCanvasDimensionLabel(canvas = state) {
  const label = document.getElementById("editorBlankCanvasDimensionLabel");
  if (!label) return;
  const width = canvas.width ?? canvas.blankCanvasWidth;
  const height = canvas.height ?? canvas.blankCanvasHeight;
  const unit = canvas.unit ?? canvas.blankCanvasUnit;
  label.textContent = `${formatBlankCanvasDimension(width)} x ${formatBlankCanvasDimension(height)} ${unit}`;
}

function applyBlankCanvasAppearance(canvas = state) {
  const stageContent = document.getElementById("editorCanvasStageContent");
  if (!stageContent || !state.isBlankEditor) return;
  const width = canvas.width ?? canvas.blankCanvasWidth;
  const height = canvas.height ?? canvas.blankCanvasHeight;
  const color = canvas.color ?? canvas.blankCanvasColor;
  const size = blankCanvasDisplaySize(width, height);
  stageContent.style.width = `${size.width}px`;
  stageContent.style.height = `${size.height}px`;
  stageContent.style.setProperty("--blank-canvas-color", color);
  syncBlankCanvasDimensionLabel(canvas);
}

function renderEditorCanvas() {
  const activeTemplate = activeGeneratedTemplate();

  const canvas = document.getElementById("editorCanvas");
  const image = document.getElementById("editorCanvasImage");
  const canvasShell = document.querySelector("#editorDesktopScreen .canvas-shell");
  const canvasStage = document.getElementById("editorCanvasStage");
  const mediaShell = document.getElementById("editorCanvasMediaShell");
  const stageContent = document.getElementById("editorCanvasStageContent");
  const segmentation = document.getElementById("editorImageSegmentation");
  const actionStack = document.getElementById("editorImageActionStack");
  const textActionStack = document.getElementById("editorTextActionStack");
  if (!canvas || !image) return;

  if (state.imageTransformTemplateId !== activeTemplate.id) {
    state.imageTransformTemplateId = activeTemplate.id;
    state.imageRotation = 0;
    state.imageOffsetX = 0;
    state.imageOffsetY = 0;
    state.imageFlipX = 1;
    state.imageFlipY = 1;
    state.imageWidth = null;
    state.imageHeight = null;
    if (stageContent) {
      stageContent.style.width = "";
      stageContent.style.height = "";
    }
    image.style.width = "";
    image.style.height = "";
  }

  setEditorCropMode(false);
  setEditorRegionMode(false, {clear: true});

  canvas.classList.add("image-mode");
  [canvasShell, canvasStage, mediaShell].forEach((layer) => {
    if (layer) layer.style.background = state.editorBackground;
  });

  if (state.isBlankEditor) {
    image.removeAttribute("src");
    image.alt = "";
    image.className = "editor-canvas-image hidden";
    stageContent?.classList.remove("is-frame-selected");
    stageContent?.classList.add("is-blank-canvas");
    applyBlankCanvasAppearance();
    if (segmentation) segmentation.innerHTML = "";
    actionStack?.classList.add("hidden");
    textActionStack?.classList.add("hidden");
    updateZoom();
    renderEditorInspector();
    return;
  }

  if (document.getElementById("editorDesktopScreen")?.classList.contains("active")) {
    rememberGeneratedEditorUpload(activeTemplate);
  }
  state.currentEditorTemplate = activeTemplate;
  stageContent?.classList.remove("is-blank-canvas");
  stageContent?.style.removeProperty("--blank-canvas-color");
  if (stageContent && !state.imageWidth && !state.imageHeight) {
    stageContent.style.width = "";
    stageContent.style.height = "";
  }
  const croppedImage = state.editorCroppedImages[activeTemplate.id];
  image.src = croppedImage?.src || activeTemplate.image;
  image.alt = activeTemplate.title;
  image.className = `editor-canvas-image orientation-${croppedImage?.orientation || activeTemplate.orientation}`;
  applyImageAppearance();
  stageContent?.classList.toggle("is-frame-selected", state.isEditorFrameSelected);
  if (segmentation) {
    segmentation.innerHTML = "";
    (croppedImage ? [] : segmentationRegions[activeTemplate.id] || []).forEach((region) => {
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
  renderEditorInspector();
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
  const imageActionToolbar = document.getElementById("editorImageToolbar");
  const textToolbar = document.getElementById("editorTextActionStack");
  const useReference = document.getElementById("editorUseReference");
  const extractText = document.getElementById("editorExtractText");
  const editRegion = document.getElementById("editorEditRegion");
  const cropImage = document.getElementById("editorCropImage");
  const segmentation = document.getElementById("editorImageSegmentation");
  const rotateHandle = document.getElementById("editorImageRotateHandle");

  const resetImageToolbarState = () => {
    imageActionToolbar?.querySelectorAll(".editor-image-tool").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-pressed", "false");
    });
  };

  const selectWholeImage = () => {
    showEditorLeftEditPanel();
    clearCanvasObjectSelection();
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = "frame";
    state.isEditorFrameSelected = true;
    stageContent?.classList.add("is-frame-selected");
    segmentation?.querySelectorAll(".editor-segment").forEach((segment) => {
      segment.classList.remove("active", "is-multi-selected");
    });
    document.querySelectorAll(".editor-object-item").forEach((item) => item.classList.remove("selected"));
    document.activeElement?.closest?.(".editor-segment")?.blur();
    imageToolbar?.classList.remove("hidden");
    textToolbar?.classList.add("hidden");
    resetImageToolbarState();
    setEditorSegmentDetailVisible(false);
    setCanvasTool(state.canvasTool);
  };

  const clearEditorSelection = () => {
    clearCanvasObjectSelection();
    setEditorCropMode(false);
    setEditorRegionMode(false, {clear: true});
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = null;
    state.isEditorFrameSelected = false;
    stageContent?.classList.remove("is-frame-selected");
    segmentation?.querySelectorAll(".editor-segment").forEach((segment) => {
      segment.classList.remove("active", "is-multi-selected");
    });
    document.querySelectorAll(".editor-object-item").forEach((item) => item.classList.remove("selected"));
    imageToolbar?.classList.add("hidden");
    textToolbar?.classList.add("hidden");
    resetImageToolbarState();
    setEditorSegmentDetailVisible(false);
    setCanvasTool(state.canvasTool);
  };

  editorImage?.addEventListener("click", (event) => {
    event.stopPropagation();
    selectWholeImage();
  });

  let imageMoveSession = null;
  editorImage?.addEventListener("pointerdown", (event) => {
    if (
      event.button !== 0 ||
      state.canvasTool !== "select" ||
      state.isEditorCropping ||
      state.isEditorRegionEditing
    ) return;
    event.preventDefault();
    event.stopPropagation();
    selectWholeImage();
    imageMoveSession = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: state.imageOffsetX,
      offsetY: state.imageOffsetY,
      moved: false,
    };
    editorImage.setPointerCapture?.(event.pointerId);
  });

  editorImage?.addEventListener("pointermove", (event) => {
    if (!imageMoveSession || event.pointerId !== imageMoveSession.pointerId) return;
    const scale = state.zoom / 100;
    const deltaX = (event.clientX - imageMoveSession.startX) / scale;
    const deltaY = (event.clientY - imageMoveSession.startY) / scale;
    if (!imageMoveSession.moved && Math.hypot(deltaX, deltaY) < 3) return;
    imageMoveSession.moved = true;
    state.imageOffsetX = imageMoveSession.offsetX + deltaX;
    state.imageOffsetY = imageMoveSession.offsetY + deltaY;
    stageContent?.classList.add("is-moving");
    updateCanvasTransform();
  });

  const endImageMove = (event) => {
    if (!imageMoveSession || event.pointerId !== imageMoveSession.pointerId) return;
    if (editorImage?.hasPointerCapture?.(event.pointerId)) editorImage.releasePointerCapture(event.pointerId);
    imageMoveSession = null;
    stageContent?.classList.remove("is-moving");
  };
  editorImage?.addEventListener("pointerup", endImageMove);
  editorImage?.addEventListener("pointercancel", endImageMove);

  imageToolbar?.addEventListener("click", () => showEditorLeftEditPanel());
  textToolbar?.addEventListener("click", () => showEditorLeftEditPanel());

  editRegion?.addEventListener("click", (event) => {
    event.stopPropagation();
    setEditorRegionMode(true, {clear: true});
  });

  cropImage?.addEventListener("click", (event) => {
    event.stopPropagation();
    setEditorCropMode(true);
  });

  let rotateSession = null;
  rotateHandle?.addEventListener("click", (event) => event.stopPropagation());
  rotateHandle?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !state.isEditorFrameSelected || !stageContent) return;
    event.preventDefault();
    event.stopPropagation();
    const bounds = stageContent.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    rotateSession = {
      pointerId: event.pointerId,
      startAngle: Math.atan2(event.clientY - centerY, event.clientX - centerX),
      startRotation: state.imageRotation,
      centerX,
      centerY,
    };
    rotateHandle.setPointerCapture?.(event.pointerId);
    rotateHandle.classList.add("is-rotating");
    document.getElementById("editorCanvasStage")?.classList.add("is-rotating");
  });

  document.addEventListener("pointermove", (event) => {
    if (!rotateSession || event.pointerId !== rotateSession.pointerId) return;
    const angle = Math.atan2(event.clientY - rotateSession.centerY, event.clientX - rotateSession.centerX);
    let rotation = rotateSession.startRotation + ((angle - rotateSession.startAngle) * 180) / Math.PI;
    if (event.shiftKey) rotation = Math.round(rotation / 15) * 15;
    state.imageRotation = rotation;
    updateCanvasTransform();
  });

  const endImageRotation = (event) => {
    if (!rotateSession || event.pointerId !== rotateSession.pointerId) return;
    rotateHandle.releasePointerCapture?.(event.pointerId);
    state.imageRotation = ((state.imageRotation + 180) % 360 + 360) % 360 - 180;
    rotateSession = null;
    rotateHandle.classList.remove("is-rotating");
    document.getElementById("editorCanvasStage")?.classList.remove("is-rotating");
    updateCanvasTransform();
  };
  document.addEventListener("pointerup", endImageRotation);
  document.addEventListener("pointercancel", endImageRotation);

  imageActionToolbar?.addEventListener("click", (event) => {
    const action = event.target.closest(".editor-image-tool");
    if (!action) return;
    showEditorLeftEditPanel();
    const wasPressed = action.getAttribute("aria-pressed") === "true";
    resetImageToolbarState();
    const pressed = action === useReference ? !wasPressed : true;
    action.classList.toggle("active", pressed);
    action.setAttribute("aria-pressed", String(pressed));
  });

  extractText?.addEventListener("click", (event) => {
    event.stopPropagation();
    segmentation?.querySelector('.editor-segment[data-segment-type="text"]')?.click();
  });

  document.addEventListener("click", (event) => {
    if (!imageToolbar) return;
    if (
      !event.target.closest("#editorImageActionStack") &&
      !event.target.closest("#editorTextActionStack") &&
      !event.target.closest("#editorImageSettings") &&
      !event.target.closest("#editorSegmentGraphicSettings") &&
      !event.target.closest("#editorSegmentTextSettings") &&
      !event.target.closest("#editorSegmentDetail") &&
      !event.target.closest("#editorRegionPrompt") &&
      !event.target.closest(".canvas-main-toolbar") &&
      !event.target.closest(".canvas-zoom-controls") &&
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
    showEditorLeftEditPanel();
    clearCanvasObjectSelection();
    state.selectedEditorSegmentId = segment.dataset.segmentId;
    state.selectedEditorSegmentType = segment.dataset.segmentType;
    state.isEditorFrameSelected = false;
    stageContent?.classList.remove("is-frame-selected");
    setEditorPanelView("right", "edit");
    setCanvasTool(state.canvasTool);
    setEditorSegmentDetailVisible(true);
    segmentation.querySelectorAll(".editor-segment").forEach((item) => {
      item.classList.remove("is-multi-selected");
      item.classList.toggle("active", item === segment);
    });
    document.querySelectorAll(".editor-object-item").forEach((item) => {
      item.classList.toggle("selected", item.dataset.editorObjectId === segment.dataset.segmentId);
    });
    resetImageToolbarState();
    if (segment.dataset.segmentType === "text") {
      textToolbar?.classList.remove("hidden");
      imageToolbar?.classList.add("hidden");
    } else {
      imageToolbar?.classList.remove("hidden");
      textToolbar?.classList.add("hidden");
    }
  });
}

function bindEditorImageMoreMenu() {
  const trigger = document.getElementById("editorImageMoreTrigger");
  const menu = document.getElementById("editorImageMoreMenu");
  const selectWrap = document.getElementById("editorImageMoreSelect");
  const selectTrigger = menu?.querySelector('[data-image-more-action="select"]');
  const selectMenu = document.getElementById("editorImageSelectMenu");
  const drawingLayer = document.getElementById("canvasWorkspaceLayer");
  const segmentation = document.getElementById("editorImageSegmentation");
  if (!trigger || !menu || !selectWrap || !selectTrigger || !selectMenu || !drawingLayer || !segmentation) return;

  const setSelectOpen = (open) => {
    selectMenu.hidden = !open;
    selectTrigger.setAttribute("aria-expanded", String(open));
  };

  const setOpen = (open) => {
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", String(open));
    if (!open) setSelectOpen(false);
  };

  const imageSnapshot = () => {
    const template = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];
    const image = document.getElementById("editorCanvasImage");
    return {
      template,
      src: image?.currentSrc || image?.src || template.image,
      alt: image?.alt || template.title,
      orientation: image?.classList.contains("orientation-landscape") ? "landscape" : "portrait",
    };
  };

  const copyImage = async () => {
    const snapshot = imageSnapshot();
    state.imageClipboard = snapshot;
    try {
      await navigator.clipboard?.writeText(snapshot.src);
    } catch (error) {
      // The editor clipboard remains available when browser clipboard permission is denied.
    }
    return snapshot;
  };

  const addImageCopy = (snapshot) => {
    const workspaceLayer = document.getElementById("canvasWorkspaceLayer");
    if (!workspaceLayer || !snapshot?.src) return;
    showEditorLeftEditPanel();
    clearEditorImageSelectionForCanvasObject();
    drawingLayer.querySelectorAll(".canvas-object.is-selected").forEach((object) => object.classList.remove("is-selected"));
    const image = document.createElement("img");
    image.className = "canvas-object canvas-imported-image is-selected";
    image.src = snapshot.src;
    image.alt = `${snapshot.alt} copy`;
    image.draggable = false;
    const copyIndex = drawingLayer.querySelectorAll(".canvas-imported-image").length;
    image.style.left = `${Math.max(12, (workspaceLayer.offsetWidth - 180) / 2 + copyIndex * 14)}px`;
    image.style.top = `${Math.max(12, (workspaceLayer.offsetHeight - 180) / 2 + copyIndex * 14)}px`;
    drawingLayer.appendChild(image);
  };

  const pasteImage = () => {
    const snapshot = state.imageClipboard;
    if (!snapshot) return;
    if (state.isBlankEditor) {
      state.isBlankEditor = false;
      state.currentEditorTemplate = snapshot.template;
      state.generatedResultTemplate = snapshot.template;
      if (snapshot.src !== snapshot.template.image) {
        state.editorCroppedImages[snapshot.template.id] = {src: snapshot.src, orientation: snapshot.orientation};
      }
      renderEditorCanvas();
      return;
    }
    addImageCopy(snapshot);
  };

  const clearMultiSelection = () => {
    drawingLayer.querySelectorAll(".canvas-object.is-selected").forEach((object) => object.classList.remove("is-selected"));
    segmentation.querySelectorAll(".editor-segment.is-multi-selected").forEach((segment) => segment.classList.remove("is-multi-selected"));
  };

  const applySelection = (action) => {
    clearMultiSelection();
    const objectSelectors = {
      all: ".canvas-object",
      text: ".canvas-text-object",
      icons: ".canvas-shape-object, .canvas-imported-image, .canvas-frame-object",
      lines: ".canvas-line-object, .canvas-pen-object",
      "lines-text": ".canvas-line-object, .canvas-pen-object, .canvas-text-object",
      connectors: ".canvas-arrow-object",
    };
    const segmentSelectors = {
      all: ".editor-segment",
      text: '.editor-segment[data-segment-type="text"]',
      icons: '.editor-segment[data-segment-type="graphic"], .editor-segment[data-segment-type="callout"]',
      lines: '.editor-segment[data-segment-type="callout"]',
      "lines-text": '.editor-segment[data-segment-type="callout"], .editor-segment[data-segment-type="text"]',
      connectors: '.editor-segment[data-segment-type="callout"]',
    };
    drawingLayer.querySelectorAll(objectSelectors[action] || "").forEach((object) => object.classList.add("is-selected"));
    segmentation.querySelectorAll(segmentSelectors[action] || "").forEach((segment) => segment.classList.add("is-multi-selected"));
    setSelectOpen(false);
    setOpen(false);
  };

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(menu.hidden);
  });
  menu.addEventListener("click", (event) => event.stopPropagation());
  selectWrap.addEventListener("mouseenter", () => setSelectOpen(true));
  selectWrap.addEventListener("mouseleave", () => setSelectOpen(false));
  selectWrap.addEventListener("focusin", () => setSelectOpen(true));
  selectWrap.addEventListener("focusout", (event) => {
    if (!selectWrap.contains(event.relatedTarget)) setSelectOpen(false);
  });
  selectTrigger.addEventListener("click", () => setSelectOpen(true));

  selectMenu.querySelectorAll("[data-image-select-action]").forEach((button) => {
    button.addEventListener("click", () => applySelection(button.dataset.imageSelectAction));
  });

  menu.querySelectorAll("[data-image-more-action]").forEach((button) => {
    if (button === selectTrigger) return;
    button.addEventListener("click", async () => {
      const action = button.dataset.imageMoreAction;
      if (action === "favorite") {
        state.imageFavorite = !state.imageFavorite;
        button.setAttribute("aria-checked", String(state.imageFavorite));
        setOpen(false);
        return;
      }
      if (action === "copy") await copyImage();
      if (action === "cut") {
        await copyImage();
        state.isBlankEditor = true;
        state.isEditorFrameSelected = false;
        renderEditorCanvas();
      }
      if (action === "duplicate") addImageCopy(await copyImage());
      if (action === "paste") pasteImage();
      if (action === "delete") {
        state.isBlankEditor = true;
        state.isEditorFrameSelected = false;
        renderEditorCanvas();
      }
      if (action === "copy-name") {
        const snapshot = imageSnapshot();
        try {
          await navigator.clipboard?.writeText(snapshot.alt);
        } catch (error) {
          state.imageClipboard = snapshot;
        }
      }
      setOpen(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("#editorImageActionStack")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      setOpen(false);
      trigger.focus();
      return;
    }
    if ((!event.metaKey && !event.ctrlKey) || event.target?.closest?.("input, textarea, [contenteditable='true']")) return;
    const key = event.key.toLowerCase();
    if (key === "c" && state.isEditorFrameSelected) {
      event.preventDefault();
      copyImage();
    }
    if (key === "x" && state.isEditorFrameSelected) {
      event.preventDefault();
      copyImage().then(() => {
        state.isBlankEditor = true;
        state.isEditorFrameSelected = false;
        renderEditorCanvas();
      });
    }
    if (key === "v" && state.imageClipboard) {
      event.preventDefault();
      pasteImage();
    }
  });
}

function updateEditorCropSelection() {
  const selection = document.getElementById("editorCropSelection");
  const rect = state.editorCropRect;
  if (!selection || !rect) return;
  selection.style.setProperty("--crop-x", `${rect.x}px`);
  selection.style.setProperty("--crop-y", `${rect.y}px`);
  selection.style.setProperty("--crop-width", `${rect.width}px`);
  selection.style.setProperty("--crop-height", `${rect.height}px`);
}

function setEditorCropMode(active, options = {}) {
  const stageContent = document.getElementById("editorCanvasStageContent");
  const layer = document.getElementById("editorCropLayer");
  const actionStack = document.getElementById("editorImageActionStack");
  state.isEditorCropping = Boolean(active);
  stageContent?.classList.toggle("is-cropping", state.isEditorCropping);
  if (layer) layer.hidden = !state.isEditorCropping;

  if (state.isEditorCropping) {
    setEditorRegionMode(false, {clear: true});
    state.editorCropRect = {
      x: 0,
      y: 0,
      width: layer?.offsetWidth || stageContent?.offsetWidth || 0,
      height: layer?.offsetHeight || stageContent?.offsetHeight || 0,
    };
    actionStack?.classList.add("hidden");
    updateEditorCropSelection();
  } else {
    state.editorCropRect = null;
    document.getElementById("editorCropSelection")?.classList.remove("is-dragging");
    if (options.restoreToolbar && state.isEditorFrameSelected) actionStack?.classList.remove("hidden");
  }
}

function bindEditorCrop() {
  const layer = document.getElementById("editorCropLayer");
  const selection = document.getElementById("editorCropSelection");
  const image = document.getElementById("editorCanvasImage");
  const stageContent = document.getElementById("editorCanvasStageContent");
  if (!layer || !selection || !image || !stageContent) return;

  let cropSession = null;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const getLocalPoint = (event) => {
    const bounds = stageContent.getBoundingClientRect();
    const computed = window.getComputedStyle(stageContent);
    const transform = computed.transform === "none" ? new DOMMatrix() : new DOMMatrix(computed.transform);
    const originParts = computed.transformOrigin.split(" ");
    const originX = parseFloat(originParts[0]) || 0;
    const originY = parseFloat(originParts[1]) || 0;
    const width = stageContent.offsetWidth;
    const height = stageContent.offsetHeight;
    const corners = [
      [0, 0],
      [width, 0],
      [width, height],
      [0, height],
    ].map(([x, y]) => {
      const point = new DOMPoint(x - originX, y - originY).matrixTransform(transform);
      return {x: point.x + originX, y: point.y + originY};
    });
    const layoutLeft = bounds.left - Math.min(...corners.map((point) => point.x));
    const layoutTop = bounds.top - Math.min(...corners.map((point) => point.y));
    const relative = new DOMPoint(event.clientX - layoutLeft - originX, event.clientY - layoutTop - originY).matrixTransform(transform.inverse());
    return {
      x: clamp(relative.x + originX, 0, width),
      y: clamp(relative.y + originY, 0, height),
    };
  };

  selection.addEventListener("pointerdown", (event) => {
    if (!state.isEditorCropping || event.button !== 0 || event.target.closest(".editor-crop-controls")) return;
    event.preventDefault();
    event.stopPropagation();
    const handle = event.target.closest("[data-crop-handle]");
    cropSession = {
      pointerId: event.pointerId,
      mode: handle ? "resize" : "move",
      direction: handle?.dataset.cropHandle || "",
      startPoint: getLocalPoint(event),
      startRect: {...state.editorCropRect},
    };
    selection.setPointerCapture?.(event.pointerId);
    selection.classList.add("is-dragging");
  });

  document.addEventListener("pointermove", (event) => {
    if (!cropSession || event.pointerId !== cropSession.pointerId || !state.editorCropRect) return;
    const point = getLocalPoint(event);
    const dx = point.x - cropSession.startPoint.x;
    const dy = point.y - cropSession.startPoint.y;
    const start = cropSession.startRect;
    const maxWidth = layer.offsetWidth;
    const maxHeight = layer.offsetHeight;
    const minSize = Math.min(50, maxWidth, maxHeight);
    const next = {...start};

    if (cropSession.mode === "move") {
      next.x = clamp(start.x + dx, 0, maxWidth - start.width);
      next.y = clamp(start.y + dy, 0, maxHeight - start.height);
    } else {
      if (cropSession.direction.includes("e")) next.width = clamp(start.width + dx, minSize, maxWidth - start.x);
      if (cropSession.direction.includes("s")) next.height = clamp(start.height + dy, minSize, maxHeight - start.y);
      if (cropSession.direction.includes("w")) {
        next.x = clamp(start.x + dx, 0, start.x + start.width - minSize);
        next.width = start.width + start.x - next.x;
      }
      if (cropSession.direction.includes("n")) {
        next.y = clamp(start.y + dy, 0, start.y + start.height - minSize);
        next.height = start.height + start.y - next.y;
      }
    }
    state.editorCropRect = next;
    updateEditorCropSelection();
  });

  const endCropDrag = (event) => {
    if (!cropSession || event.pointerId !== cropSession.pointerId) return;
    if (selection.hasPointerCapture?.(event.pointerId)) selection.releasePointerCapture(event.pointerId);
    cropSession = null;
    selection.classList.remove("is-dragging");
  };
  document.addEventListener("pointerup", endCropDrag);
  document.addEventListener("pointercancel", endCropDrag);

  const cancelCrop = () => setEditorCropMode(false, {restoreToolbar: true});
  document.getElementById("editorCropCancel")?.addEventListener("click", (event) => {
    event.stopPropagation();
    cancelCrop();
  });

  document.getElementById("editorCropConfirm")?.addEventListener("click", async (event) => {
    event.stopPropagation();
    const rect = state.editorCropRect;
    if (!rect || !image.naturalWidth || !image.naturalHeight || !layer.offsetWidth || !layer.offsetHeight) return;
    const scaleX = image.naturalWidth / layer.offsetWidth;
    const scaleY = image.naturalHeight / layer.offsetHeight;
    const sourceX = Math.round(rect.x * scaleX);
    const sourceY = Math.round(rect.y * scaleY);
    const sourceWidth = Math.max(1, Math.round(rect.width * scaleX));
    const sourceHeight = Math.max(1, Math.round(rect.height * scaleY));
    const canvas = document.createElement("canvas");
    canvas.width = sourceWidth;
    canvas.height = sourceHeight;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight);
    const croppedSource = canvas.toDataURL("image/png");
    const orientation = sourceWidth >= sourceHeight ? "landscape" : "portrait";
    const activeTemplate = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];
    state.editorCroppedImages[activeTemplate.id] = {src: croppedSource, orientation};
    image.src = croppedSource;
    image.className = `editor-canvas-image orientation-${orientation}`;
    document.getElementById("editorImageSegmentation")?.replaceChildren();
    try {
      await image.decode();
    } catch (_) {
      // The image remains usable even when decode() is not available.
    }
    applyImageAppearance();
    setEditorCropMode(false, {restoreToolbar: true});
    updateCanvasTransform();
    renderEditorInspector();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !state.isEditorCropping) return;
    event.preventDefault();
    cancelCrop();
  });
}

function setEditorRegionTool(tool) {
  state.editorRegionTool = tool === "pen" ? "pen" : "rectangle";
  const layer = document.getElementById("editorRegionDrawingLayer");
  if (layer) layer.dataset.regionTool = state.editorRegionTool;
  document.querySelectorAll("[data-region-tool]").forEach((button) => {
    const selected = button.dataset.regionTool === state.editorRegionTool;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function syncEditorRegionActions() {
  const hasMarks = Boolean(document.querySelector("#editorRegionDrawingLayer .editor-region-mark"));
  const undo = document.getElementById("editorRegionUndo");
  const clear = document.getElementById("editorRegionClear");
  if (undo) undo.disabled = !hasMarks;
  if (clear) clear.disabled = !hasMarks;
}

function clearEditorRegionMarks() {
  document.getElementById("editorRegionDrawingLayer")?.replaceChildren();
  document.getElementById("editorRegionPrompt")?.classList.add("hidden");
  const input = document.getElementById("editorRegionPromptInput");
  if (input) input.value = "";
  syncEditorRegionActions();
}

function setEditorRegionMode(active, options = {}) {
  const stageContent = document.getElementById("editorCanvasStageContent");
  const actionStack = document.getElementById("editorImageActionStack");
  const imageToolbar = document.getElementById("editorImageToolbar");
  const regionToolbar = document.getElementById("editorRegionToolbar");
  state.isEditorRegionEditing = Boolean(active);
  if (state.isEditorRegionEditing) setEditorCropMode(false);
  stageContent?.classList.toggle("is-region-editing", state.isEditorRegionEditing);
  if (imageToolbar) imageToolbar.hidden = state.isEditorRegionEditing;
  if (regionToolbar) regionToolbar.hidden = !state.isEditorRegionEditing;
  if (state.isEditorRegionEditing) {
    actionStack?.classList.remove("hidden");
    setEditorRegionTool("rectangle");
  } else {
    document.getElementById("editorRegionPrompt")?.classList.add("hidden");
  }
  if (options.clear) clearEditorRegionMarks();
}

function bindEditorRegionEditing() {
  const layer = document.getElementById("editorRegionDrawingLayer");
  const prompt = document.getElementById("editorRegionPrompt");
  const input = document.getElementById("editorRegionPromptInput");
  const widthLabel = document.getElementById("editorRegionWidthLabel");
  if (!layer || !prompt || !input) return;

  let drawSession = null;
  const localPoint = (event) => {
    const bounds = layer.getBoundingClientRect();
    const scaleX = bounds.width ? layer.offsetWidth / bounds.width : 1;
    const scaleY = bounds.height ? layer.offsetHeight / bounds.height : 1;
    return {
      x: Math.max(0, Math.min(layer.offsetWidth, (event.clientX - bounds.left) * scaleX)),
      y: Math.max(0, Math.min(layer.offsetHeight, (event.clientY - bounds.top) * scaleY)),
    };
  };

  const removeLatestMark = () => {
    layer.querySelector(".editor-region-mark:last-child")?.remove();
    prompt.classList.add("hidden");
    input.value = "";
    syncEditorRegionActions();
  };

  const showRegionPrompt = () => {
    prompt.classList.remove("hidden");
    input.value = "";
    syncEditorRegionActions();
    window.setTimeout(() => input.focus(), 0);
  };

  document.querySelectorAll("[data-region-tool]").forEach((button) => {
    button.addEventListener("click", () => setEditorRegionTool(button.dataset.regionTool));
  });

  document.getElementById("editorRegionWidth")?.addEventListener("click", () => {
    const widths = [4, 8, 12, 16];
    const currentIndex = widths.indexOf(state.editorRegionStrokeWidth);
    state.editorRegionStrokeWidth = widths[(currentIndex + 1) % widths.length];
    if (widthLabel) widthLabel.textContent = `${state.editorRegionStrokeWidth}px`;
  });

  layer.addEventListener("pointerdown", (event) => {
    if (!state.isEditorRegionEditing || event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    prompt.classList.add("hidden");
    const start = localPoint(event);

    if (state.editorRegionTool === "pen") {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.classList.add("editor-region-mark", "editor-region-pen-mark");
      svg.setAttribute("viewBox", `0 0 ${layer.offsetWidth} ${layer.offsetHeight}`);
      svg.style.setProperty("--region-color", state.editorRegionColor);
      svg.style.setProperty("--region-width", `${state.editorRegionStrokeWidth}`);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M ${start.x} ${start.y}`);
      svg.appendChild(path);
      layer.appendChild(svg);
      drawSession = {pointerId: event.pointerId, tool: "pen", mark: svg, path, points: [start]};
    } else {
      const rectangle = document.createElement("div");
      rectangle.className = "editor-region-mark editor-region-rectangle";
      rectangle.style.left = `${start.x}px`;
      rectangle.style.top = `${start.y}px`;
      rectangle.style.width = "0px";
      rectangle.style.height = "0px";
      layer.appendChild(rectangle);
      drawSession = {pointerId: event.pointerId, tool: "rectangle", mark: rectangle, start};
    }
    layer.setPointerCapture?.(event.pointerId);
  });

  layer.addEventListener("pointermove", (event) => {
    if (!drawSession || event.pointerId !== drawSession.pointerId) return;
    const point = localPoint(event);
    if (drawSession.tool === "pen") {
      drawSession.points.push(point);
      drawSession.path.setAttribute("d", drawSession.points.map((item, index) => `${index ? "L" : "M"} ${item.x} ${item.y}`).join(" "));
      return;
    }
    const left = Math.min(drawSession.start.x, point.x);
    const top = Math.min(drawSession.start.y, point.y);
    drawSession.mark.style.left = `${left}px`;
    drawSession.mark.style.top = `${top}px`;
    drawSession.mark.style.width = `${Math.abs(point.x - drawSession.start.x)}px`;
    drawSession.mark.style.height = `${Math.abs(point.y - drawSession.start.y)}px`;
  });

  const endRegionDrawing = (event, cancelled = false) => {
    if (!drawSession || event.pointerId !== drawSession.pointerId) return;
    if (layer.hasPointerCapture?.(event.pointerId)) layer.releasePointerCapture(event.pointerId);
    const session = drawSession;
    drawSession = null;
    const width = parseFloat(session.mark.style.width || "0");
    const height = parseFloat(session.mark.style.height || "0");
    const invalid = cancelled || (session.tool === "pen" ? session.points.length < 3 : width < 8 || height < 8);
    if (invalid) {
      session.mark.remove();
      syncEditorRegionActions();
      return;
    }
    showRegionPrompt();
  };
  layer.addEventListener("pointerup", (event) => endRegionDrawing(event));
  layer.addEventListener("pointercancel", (event) => endRegionDrawing(event, true));
  document.addEventListener("pointerup", (event) => endRegionDrawing(event));
  document.addEventListener("pointercancel", (event) => endRegionDrawing(event, true));
  document.addEventListener("mouseup", () => {
    if (drawSession) endRegionDrawing({pointerId: drawSession.pointerId});
  });

  document.getElementById("editorRegionUndo")?.addEventListener("click", removeLatestMark);
  document.getElementById("editorRegionClear")?.addEventListener("click", clearEditorRegionMarks);
  document.getElementById("editorRegionPromptClose")?.addEventListener("click", removeLatestMark);
  document.getElementById("editorRegionCancel")?.addEventListener("click", removeLatestMark);
  document.getElementById("editorRegionClose")?.addEventListener("click", () => setEditorRegionMode(false, {clear: true}));

  document.getElementById("editorRegionApply")?.addEventListener("click", (event) => {
    const value = input.value.trim();
    if (!value) {
      input.focus();
      return;
    }
    const applyButton = event.currentTarget;
    const message = document.createElement("div");
    message.className = "editor-chat-message";
    message.textContent = `Edit selected region: ${value}`;
    document.getElementById("editorChatThread")?.appendChild(message);
    setEditorPanelView("right", "chat");
    applyButton.textContent = "Applied";
    applyButton.disabled = true;
    window.setTimeout(() => {
      applyButton.textContent = "Apply changes";
      applyButton.disabled = false;
      setEditorRegionMode(false, {clear: true});
    }, 650);
  });

  setEditorRegionTool("rectangle");
  syncEditorRegionActions();
}

function applyShapeAppearance(object) {
  if (!object) return;
  const hasStroke = state.shapeStroke !== "transparent";
  const renderedStroke = hasStroke ? state.shapeStroke : state.shapeFill;
  object.style.setProperty("--shape-fill", state.shapeFill);
  object.style.setProperty("--shape-stroke", renderedStroke);
  object.style.setProperty("--shape-stroke-width", `${hasStroke ? state.shapeStrokeWidth : 0}px`);
  object.style.setProperty("--shape-stroke-style", state.shapeStrokeStyle);
  object.style.setProperty("--shape-radius", state.shapeEdges === "rounded" ? "12px" : "0px");
  object.style.opacity = `${state.shapeOpacity / 100}`;
}

function syncShapeSettingsPanel() {
  const heading = document.getElementById("editorShapeSettingsHeading");
  const shapeLabel = state.canvasShape.charAt(0).toUpperCase() + state.canvasShape.slice(1);
  if (heading) heading.textContent = shapeLabel;
  const edgesGroup = document.getElementById("editorShapeEdgesGroup");
  if (edgesGroup) edgesGroup.hidden = state.canvasShape === "ellipse";

  document.querySelectorAll("[data-shape-fill]").forEach((button) => {
    button.classList.toggle("active", !state.shapeFillCustom && button.dataset.shapeFill === state.shapeFill);
  });
  document.querySelector('[data-shape-custom="fill"]')?.classList.toggle("active", state.shapeFillCustom);
  document.querySelectorAll("[data-shape-stroke]").forEach((button) => {
    button.classList.toggle("active", !state.shapeStrokeCustom && button.dataset.shapeStroke === state.shapeStroke);
  });
  document.querySelector('[data-shape-custom="stroke"]')?.classList.toggle("active", state.shapeStrokeCustom);
  document.querySelectorAll("[data-shape-width]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.shapeWidth) === state.shapeStrokeWidth);
  });
  document.querySelectorAll("[data-shape-style]").forEach((button) => {
    button.classList.toggle("active", button.dataset.shapeStyle === state.shapeStrokeStyle);
  });
  document.querySelectorAll("[data-shape-edges]").forEach((button) => {
    button.classList.toggle("active", button.dataset.shapeEdges === state.shapeEdges);
  });
  const opacity = document.getElementById("editorShapeOpacity");
  if (opacity) opacity.value = `${state.shapeOpacity}`;
}

function applyLineAppearance(object) {
  if (!object) return;
  object.style.setProperty("--line-color", state.lineStroke);
  object.style.setProperty("--line-width", `${state.lineStrokeWidth}px`);
  object.style.setProperty("--line-style", state.lineStrokeStyle);
  object.style.setProperty("--line-radius", state.lineEdges === "rounded" ? "999px" : "0");
  object.style.opacity = `${state.lineOpacity / 100}`;
  ["straight", "curved", "elbow"].forEach((type) => {
    object.classList.toggle(`canvas-arrow-type-${type}`, state.canvasLine === "arrow" && state.arrowType === type);
  });
  ["arrow", "circle"].forEach((head) => {
    object.classList.toggle(`canvas-arrow-start-${head}`, state.canvasLine === "arrow" && state.arrowStarthead === head);
    object.classList.toggle(`canvas-arrow-end-${head}`, state.canvasLine === "arrow" && state.arrowEndhead === head);
  });
}

function syncLineSettingsPanel() {
  const isArrow = state.canvasLine === "arrow";
  const heading = document.getElementById("editorLineSettingsHeading");
  if (heading) heading.textContent = isArrow ? "Arrow" : "Line";
  const edgesGroup = document.getElementById("editorLineEdgesGroup");
  if (edgesGroup) edgesGroup.hidden = isArrow;
  const arrowTypeGroup = document.getElementById("editorArrowTypeGroup");
  if (arrowTypeGroup) arrowTypeGroup.hidden = !isArrow;
  const arrowheadGroup = document.getElementById("editorArrowheadGroup");
  if (arrowheadGroup) arrowheadGroup.hidden = !isArrow;

  document.querySelectorAll("[data-line-stroke]").forEach((button) => {
    button.classList.toggle("active", !state.lineStrokeCustom && button.dataset.lineStroke === state.lineStroke);
  });
  document.querySelector('[data-line-custom="stroke"]')?.classList.toggle("active", state.lineStrokeCustom);
  document.querySelectorAll("[data-line-width]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.lineWidth) === state.lineStrokeWidth);
  });
  document.querySelectorAll("[data-line-style]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lineStyle === state.lineStrokeStyle);
  });
  document.querySelectorAll("[data-line-edges]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lineEdges === state.lineEdges);
  });
  document.querySelectorAll("[data-arrow-type]").forEach((button) => {
    button.classList.toggle("active", button.dataset.arrowType === state.arrowType);
  });

  const starthead = document.getElementById("editorArrowStarthead");
  const endhead = document.getElementById("editorArrowEndhead");
  if (starthead) starthead.value = state.arrowStarthead;
  if (endhead) endhead.value = state.arrowEndhead;
  document.querySelectorAll("[data-arrowhead-preview]").forEach((preview) => {
    const isStart = preview.dataset.arrowheadPreview === "start";
    const value = isStart ? state.arrowStarthead : state.arrowEndhead;
    preview.className = `editor-arrowhead-preview${isStart ? " is-start" : ""}${value === "none" ? "" : ` is-${value}`}`;
  });
  const opacity = document.getElementById("editorLineOpacity");
  if (opacity) opacity.value = `${state.lineOpacity}`;
}

function applyPenAppearance(object) {
  if (!object) return;
  object.style.setProperty("--pen-color", state.penStroke);
  object.style.setProperty("--pen-width", `${state.penStrokeWidth}`);
  object.style.opacity = `${state.penOpacity / 100}`;
}

function syncPenSettingsPanel() {
  document.querySelectorAll("[data-pen-stroke]").forEach((button) => {
    button.classList.toggle("active", !state.penStrokeCustom && button.dataset.penStroke === state.penStroke);
  });
  document.querySelector('[data-pen-custom="stroke"]')?.classList.toggle("active", state.penStrokeCustom);
  document.querySelectorAll("[data-pen-width]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.penWidth) === state.penStrokeWidth);
  });
  const opacity = document.getElementById("editorPenOpacity");
  if (opacity) opacity.value = `${state.penOpacity}`;
}

function applyTextAppearance(object) {
  if (!object) return;
  object.style.setProperty("--text-color", state.textStroke);
  object.style.setProperty("--text-weight", `${state.textTypography}`);
  object.style.setProperty("--text-align", state.textAlign);
  object.style.opacity = `${state.textOpacity / 100}`;
}

function syncTextSettingsPanel() {
  document.querySelectorAll("[data-text-stroke]").forEach((button) => {
    button.classList.toggle("active", !state.textStrokeCustom && button.dataset.textStroke === state.textStroke);
  });
  document.querySelector('[data-text-custom="stroke"]')?.classList.toggle("active", state.textStrokeCustom);
  document.querySelectorAll("[data-text-align]").forEach((button) => {
    button.classList.toggle("active", button.dataset.textAlign === state.textAlign);
  });
  const typography = document.getElementById("editorTextTypography");
  if (typography) typography.value = `${state.textTypography}`;
  const opacity = document.getElementById("editorTextOpacity");
  if (opacity) opacity.value = `${state.textOpacity}`;
}

function frameRatioValue() {
  return state.frameRatio === "4:3" ? 4 / 3 : 16 / 9;
}

function applyFrameAppearance(object, resize = false) {
  if (!object) return;
  object.style.setProperty("--frame-opacity", `${state.frameOpacity / 100}`);
  object.dataset.frameRatio = state.frameRatio;
  if (!resize) return;
  const width = parseFloat(object.style.width || "0");
  if (width > 0) object.style.height = `${width / frameRatioValue()}px`;
}

function syncFrameSettingsPanel() {
  document.querySelectorAll("[data-frame-ratio]").forEach((button) => {
    button.classList.toggle("active", button.dataset.frameRatio === state.frameRatio);
  });
  const opacity = document.getElementById("editorFrameOpacity");
  if (opacity) opacity.value = `${state.frameOpacity}`;
}

function selectedCanvasTable() {
  return document.querySelector(".canvas-table-object.is-selected");
}

const chartTypeDefinitions = [
  {id: "column", label: "Column"},
  {id: "bar", label: "Bar"},
  {id: "stacked-column", label: "Stacked column"},
  {id: "stacked-bar", label: "Stacked bar"},
  {id: "area", label: "Area"},
  {id: "doughnut", label: "Doughnut"},
  {id: "semi-doughnut", label: "Semi-doughnut"},
  {id: "pie", label: "Pie"},
  {id: "radar", label: "Radar"},
  {id: "line", label: "Line"},
];

function chartTypeLabel(type) {
  return chartTypeDefinitions.find((item) => item.id === type)?.label || "Chart";
}

function createDefaultChartConfig(type = "column") {
  const circular = ["doughnut", "semi-doughnut", "pie"].includes(type);
  return {
    type,
    title: circular ? "Study composition" : "Research outcomes",
    subtitle: circular ? "Participants by cohort" : "Comparison across timepoints",
    categories: circular ? ["Treatment"] : ["Baseline", "Week 4", "Week 8"],
    series: [
      {id: `series-${Date.now()}-1`, name: "Treatment", color: "#0062FF", values: circular ? [62] : [12, 18, 25]},
      {id: `series-${Date.now()}-2`, name: "Control", color: "#21A7A2", values: circular ? [38] : [10, 14, 17]},
    ],
    legend: "bottom",
    showValues: true,
    fontColor: "#13161B",
    background: "#FFFFFF",
    gridColor: "#D8E0EE",
  };
}

function cloneChartConfig(config) {
  return JSON.parse(JSON.stringify(config));
}

function chartEscape(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[character]);
}

function chartPolar(cx, cy, radius, angle) {
  const radians = (angle - 90) * Math.PI / 180;
  return {x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians)};
}

function chartArcPath(cx, cy, radius, startAngle, endAngle, innerRadius = 0) {
  const start = chartPolar(cx, cy, radius, endAngle);
  const end = chartPolar(cx, cy, radius, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  if (!innerRadius) return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
  const innerStart = chartPolar(cx, cy, innerRadius, endAngle);
  const innerEnd = chartPolar(cx, cy, innerRadius, startAngle);
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y} L ${innerEnd.x} ${innerEnd.y} A ${innerRadius} ${innerRadius} 0 ${largeArc} 1 ${innerStart.x} ${innerStart.y} Z`;
}

function chartLegendMarkup(config, width, y, compact) {
  if (compact || config.legend === "none") return "";
  const items = config.series.map((series) => `<g><circle cx="0" cy="0" r="5" fill="${series.color}"/><text x="10" y="4" fill="${config.fontColor}" font-size="11" font-weight="500">${chartEscape(series.name)}</text></g>`);
  const itemWidth = Math.max(78, (width - 40) / Math.max(1, items.length));
  return `<g transform="translate(${Math.max(20, width / 2 - itemWidth * items.length / 2)} ${y})">${items.map((item, index) => `<g transform="translate(${index * itemWidth} 0)">${item}</g>`).join("")}</g>`;
}

function renderChartSvg(config, width = 640, height = 400, compact = false) {
  const safeWidth = Math.max(120, width);
  const safeHeight = Math.max(80, height);
  const categories = config.categories.length ? config.categories : ["Category"];
  const series = config.series.length ? config.series : [{name: "Series", color: "#0062FF", values: [0]}];
  const headerHeight = compact ? 4 : 64;
  const legendTop = config.legend === "top" && !compact ? 69 : null;
  const plotTop = compact ? 8 : legendTop ? 88 : 78;
  const plotBottom = compact ? safeHeight - 8 : config.legend === "bottom" ? safeHeight - 48 : safeHeight - 28;
  const plotLeft = compact ? 10 : 54;
  const plotRight = safeWidth - (compact ? 10 : 24);
  const plotWidth = Math.max(10, plotRight - plotLeft);
  const plotHeight = Math.max(10, plotBottom - plotTop);
  const allValues = series.flatMap((item) => item.values.map((value) => Math.max(0, Number(value) || 0)));
  const stackedMax = Math.max(...categories.map((_, categoryIndex) => series.reduce((total, item) => total + (Number(item.values[categoryIndex]) || 0), 0)), 1);
  const maxValue = Math.max(...allValues, 1);
  const scaleMax = ["stacked-column", "stacked-bar"].includes(config.type) ? stackedMax : maxValue;
  const title = compact ? "" : `<text x="${safeWidth / 2}" y="27" text-anchor="middle" fill="${config.fontColor}" font-size="18" font-weight="600">${chartEscape(config.title)}</text><text x="${safeWidth / 2}" y="47" text-anchor="middle" fill="#717F99" font-size="11" font-weight="500">${chartEscape(config.subtitle)}</text>`;
  const topLegend = legendTop ? chartLegendMarkup(config, safeWidth, legendTop, compact) : "";
  const bottomLegend = config.legend === "bottom" ? chartLegendMarkup(config, safeWidth, safeHeight - 20, compact) : "";
  let body = "";

  if (["pie", "doughnut", "semi-doughnut"].includes(config.type)) {
    const values = series.map((item) => Math.max(0, Number(item.values[0]) || 0));
    const total = values.reduce((sum, value) => sum + value, 0) || 1;
    const semi = config.type === "semi-doughnut";
    const startBase = semi ? -90 : 0;
    const sweep = semi ? 180 : 360;
    const radius = Math.max(18, Math.min(plotWidth, plotHeight) * (semi ? 0.42 : 0.38));
    const cx = safeWidth / 2;
    const cy = semi ? plotBottom - 8 : plotTop + plotHeight / 2;
    let angle = startBase;
    body = values.map((value, index) => {
      const next = angle + value / total * sweep;
      const inner = config.type === "pie" ? 0 : radius * 0.56;
      const path = chartArcPath(cx, cy, radius, angle, next, inner);
      const mid = (angle + next) / 2;
      const labelPoint = chartPolar(cx, cy, radius * 0.76, mid);
      const label = config.showValues && !compact ? `<text x="${labelPoint.x}" y="${labelPoint.y + 4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">${Math.round(value / total * 100)}%</text>` : "";
      angle = next;
      return `<path d="${path}" fill="${series[index].color}" stroke="${config.background}" stroke-width="2"/>${label}`;
    }).join("");
  } else if (config.type === "radar") {
    const count = Math.max(3, categories.length);
    const radius = Math.min(plotWidth, plotHeight) * 0.38;
    const cx = safeWidth / 2;
    const cy = plotTop + plotHeight / 2;
    const rings = [0.33, 0.66, 1].map((ratio) => `<polygon points="${Array.from({length: count}, (_, index) => { const point = chartPolar(cx, cy, radius * ratio, index * 360 / count); return `${point.x},${point.y}`; }).join(" ")}" fill="none" stroke="${config.gridColor}" stroke-width="1"/>`).join("");
    const axes = Array.from({length: count}, (_, index) => { const point = chartPolar(cx, cy, radius, index * 360 / count); return `<line x1="${cx}" y1="${cy}" x2="${point.x}" y2="${point.y}" stroke="${config.gridColor}"/>${compact ? "" : `<text x="${point.x}" y="${point.y + (point.y < cy ? -6 : 14)}" text-anchor="middle" fill="${config.fontColor}" font-size="10">${chartEscape(categories[index] || `Point ${index + 1}`)}</text>`}`; }).join("");
    const shapes = series.map((item) => `<polygon points="${Array.from({length: count}, (_, index) => { const value = Number(item.values[index]) || 0; const point = chartPolar(cx, cy, radius * value / scaleMax, index * 360 / count); return `${point.x},${point.y}`; }).join(" ")}" fill="${item.color}" fill-opacity="0.15" stroke="${item.color}" stroke-width="2"/>`).join("");
    body = rings + axes + shapes;
  } else {
    const horizontal = ["bar", "stacked-bar"].includes(config.type);
    const stacked = ["stacked-column", "stacked-bar"].includes(config.type);
    const lineLike = ["line", "area"].includes(config.type);
    const grid = compact ? "" : Array.from({length: 5}, (_, index) => {
      if (horizontal) {
        const x = plotLeft + index * plotWidth / 4;
        return `<line x1="${x}" y1="${plotTop}" x2="${x}" y2="${plotBottom}" stroke="${config.gridColor}" stroke-width="1"/><text x="${x}" y="${plotBottom + 16}" text-anchor="middle" fill="#717F99" font-size="9">${Math.round(scaleMax * index / 4)}</text>`;
      }
      const y = plotBottom - index * plotHeight / 4;
      return `<line x1="${plotLeft}" y1="${y}" x2="${plotRight}" y2="${y}" stroke="${config.gridColor}" stroke-width="1"/><text x="${plotLeft - 8}" y="${y + 3}" text-anchor="end" fill="#717F99" font-size="9">${Math.round(scaleMax * index / 4)}</text>`;
    }).join("");
    const axis = `<line x1="${plotLeft}" y1="${plotBottom}" x2="${plotRight}" y2="${plotBottom}" stroke="#9AA7BC" stroke-width="1"/>`;
    let marks = "";
    if (lineLike) {
      marks = series.map((item) => {
        const points = categories.map((_, index) => {
          const x = plotLeft + (categories.length === 1 ? plotWidth / 2 : index * plotWidth / (categories.length - 1));
          const value = Number(item.values[index]) || 0;
          const y = plotBottom - value / scaleMax * plotHeight;
          return {x, y, value};
        });
        const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");
        const fill = config.type === "area" ? `<polygon points="${plotLeft},${plotBottom} ${pointString} ${plotRight},${plotBottom}" fill="${item.color}" fill-opacity="0.16"/>` : "";
        const dots = points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="3.5" fill="${item.color}"/>${config.showValues && !compact ? `<text x="${point.x}" y="${point.y - 8}" text-anchor="middle" fill="${config.fontColor}" font-size="9" font-weight="600">${point.value}</text>` : ""}`).join("");
        return `${fill}<polyline points="${pointString}" fill="none" stroke="${item.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>${dots}`;
      }).join("");
    } else if (horizontal) {
      const categoryHeight = plotHeight / categories.length;
      const barHeight = stacked ? categoryHeight * 0.48 : categoryHeight * 0.62 / series.length;
      marks = categories.map((category, categoryIndex) => {
        let offset = 0;
        const label = compact ? "" : `<text x="${plotLeft - 8}" y="${plotTop + categoryHeight * (categoryIndex + .5) + 3}" text-anchor="end" fill="${config.fontColor}" font-size="9">${chartEscape(category)}</text>`;
        const bars = series.map((item, seriesIndex) => {
          const value = Number(item.values[categoryIndex]) || 0;
          const length = value / scaleMax * plotWidth;
          const x = plotLeft + (stacked ? offset : 0);
          const y = plotTop + categoryIndex * categoryHeight + (stacked ? categoryHeight * .26 : categoryHeight * .19 + seriesIndex * barHeight);
          offset += length;
          return `<rect x="${x}" y="${y}" width="${Math.max(0, length)}" height="${barHeight}" rx="2" fill="${item.color}"/>${config.showValues && !compact ? `<text x="${x + length + 5}" y="${y + barHeight / 2 + 3}" fill="${config.fontColor}" font-size="9" font-weight="600">${value}</text>` : ""}`;
        }).join("");
        return label + bars;
      }).join("");
    } else {
      const categoryWidth = plotWidth / categories.length;
      const barWidth = stacked ? categoryWidth * 0.5 : categoryWidth * 0.68 / series.length;
      marks = categories.map((category, categoryIndex) => {
        let offset = 0;
        const label = compact ? "" : `<text x="${plotLeft + categoryWidth * (categoryIndex + .5)}" y="${plotBottom + 15}" text-anchor="middle" fill="${config.fontColor}" font-size="9">${chartEscape(category)}</text>`;
        const bars = series.map((item, seriesIndex) => {
          const value = Number(item.values[categoryIndex]) || 0;
          const barHeight = value / scaleMax * plotHeight;
          const x = plotLeft + categoryIndex * categoryWidth + (stacked ? categoryWidth * .25 : categoryWidth * .16 + seriesIndex * barWidth);
          const y = plotBottom - barHeight - (stacked ? offset : 0);
          offset += barHeight;
          return `<rect x="${x}" y="${y}" width="${barWidth}" height="${Math.max(0, barHeight)}" rx="2" fill="${item.color}"/>${config.showValues && !compact ? `<text x="${x + barWidth / 2}" y="${y - 5}" text-anchor="middle" fill="${config.fontColor}" font-size="9" font-weight="600">${value}</text>` : ""}`;
        }).join("");
        return label + bars;
      }).join("");
    }
    body = grid + axis + marks;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${safeWidth} ${safeHeight}" role="img" aria-label="${chartEscape(config.title || chartTypeLabel(config.type))}" preserveAspectRatio="none"><rect width="${safeWidth}" height="${safeHeight}" fill="${config.background}"/>${title}${topLegend}${body}${bottomLegend}</svg>`;
}

function chartDeleteIcon() {
  return `<svg viewBox="0 0 14 16" aria-hidden="true"><path d="M5.04 0c-.4 0-.77.25-.91.63l-.49 1.31H.73a.73.73 0 0 0 0 1.45h12.12a.73.73 0 0 0 0-1.45H9.94L9.45.63A.97.97 0 0 0 8.54 0h-3.5ZM.97 4.85v9.21A1.94 1.94 0 0 0 2.91 16h7.76a1.94 1.94 0 0 0 1.94-1.94V4.85h-1.46v9.21a.49.49 0 0 1-.48.49H2.91a.49.49 0 0 1-.49-.49V4.85H.97Zm4.85 2.18a.73.73 0 0 0-1.46 0v5.33a.73.73 0 0 0 1.46 0V7.03Zm3.39 0a.73.73 0 0 0-1.45 0v5.33a.73.73 0 0 0 1.45 0V7.03Z" fill="currentColor"/></svg>`;
}

function renderChartEditorPanels() {
  const config = state.chartDraft;
  const content = document.getElementById("editorChartContentPanel");
  const appearance = document.getElementById("editorChartAppearancePanel");
  if (!config || !content || !appearance) return;
  const seriesCount = config.series.length;
  content.innerHTML = `
    <label class="editor-chart-field"><span>Chart title</span><input data-chart-field="title" value="${chartEscape(config.title)}" /></label>
    <label class="editor-chart-field"><span>Subtitle</span><input data-chart-field="subtitle" value="${chartEscape(config.subtitle)}" /></label>
    <div class="editor-chart-section-title"><h3>Series</h3><button type="button" data-chart-action="add-series">+ Add series</button></div>
    <div>${config.series.map((series, index) => `<div class="editor-chart-series" data-series-index="${index}"><input type="color" data-series-field="color" value="${series.color}" aria-label="${chartEscape(series.name)} color"/><input data-series-field="name" value="${chartEscape(series.name)}" aria-label="Series name"/><button class="editor-chart-icon-button" type="button" data-chart-action="delete-series" aria-label="Delete ${chartEscape(series.name)}" ${seriesCount <= 1 ? "disabled" : ""}>${chartDeleteIcon()}</button></div>`).join("")}</div>
    <div class="editor-chart-section-title"><h3>Data</h3><button type="button" data-chart-action="add-row">+ Add row</button></div>
    <div>${config.categories.map((category, rowIndex) => `<div class="editor-chart-row" style="--chart-series-count:${seriesCount}" data-row-index="${rowIndex}"><input data-row-field="category" value="${chartEscape(category)}" aria-label="Category name"/>${config.series.map((series, seriesIndex) => `<input type="number" min="0" step="1" data-value-series="${seriesIndex}" value="${Number(series.values[rowIndex]) || 0}" aria-label="${chartEscape(series.name)} value"/>`).join("")}<button class="editor-chart-icon-button" type="button" data-chart-action="delete-row" aria-label="Delete ${chartEscape(category)}" ${config.categories.length <= 1 ? "disabled" : ""}>${chartDeleteIcon()}</button></div>`).join("")}</div>
  `;
  appearance.innerHTML = `
    <div class="editor-chart-section-title"><h3>Labels</h3></div>
    <label class="editor-chart-toggle-row"><span>Show values</span><input type="checkbox" data-chart-field="showValues" ${config.showValues ? "checked" : ""}/></label>
    <div class="editor-chart-legend-field"><span>Legend position</span><div class="editor-chart-legend-options">${["bottom", "top", "none"].map((value) => `<button class="${config.legend === value ? "active" : ""}" type="button" data-chart-legend="${value}">${value[0].toUpperCase() + value.slice(1)}</button>`).join("")}</div></div>
    <div class="editor-chart-section-title"><h3>Colors</h3></div>
    <div class="editor-chart-appearance-colors">
      <label class="editor-chart-appearance-color"><input type="color" data-chart-field="fontColor" value="${config.fontColor}"/><span>Text</span></label>
      <label class="editor-chart-appearance-color"><input type="color" data-chart-field="background" value="${config.background}"/><span>Background</span></label>
      <label class="editor-chart-appearance-color"><input type="color" data-chart-field="gridColor" value="${config.gridColor}"/><span>Grid</span></label>
    </div>
  `;
  updateChartPreview();
}

function updateChartPreview() {
  const config = state.chartDraft;
  const preview = document.getElementById("editorChartPreview");
  if (!config || !preview) return;
  preview.innerHTML = renderChartSvg(config, 640, 420);
  const type = `${chartTypeLabel(config.type)} chart`;
  const typeLabel = document.getElementById("editorChartPreviewType");
  if (typeLabel) typeLabel.textContent = type;
}

function createCanvasChart(config) {
  const object = document.createElement("div");
  object.className = "canvas-object canvas-chart-object is-selected";
  object.chartConfig = cloneChartConfig(config);
  object.dataset.chartType = config.type;
  object.dataset.chartRotation = "0";
  object.dataset.chartOpacity = "100";
  const render = document.createElement("div");
  render.className = "canvas-chart-render";
  render.innerHTML = renderChartSvg(object.chartConfig, 640, 420);
  object.appendChild(render);
  ["nw", "n", "ne", "e", "se", "s", "sw", "w"].forEach((position) => {
    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = "canvas-chart-handle";
    handle.dataset.chartResize = position;
    handle.setAttribute("aria-label", `Resize chart ${position}`);
    object.appendChild(handle);
  });
  const rotate = document.createElement("button");
  rotate.type = "button";
  rotate.className = "canvas-chart-rotate-control";
  rotate.dataset.chartRotate = "true";
  rotate.setAttribute("aria-label", "Rotate chart");
  object.appendChild(rotate);
  return object;
}

function selectedCanvasChart() {
  return document.querySelector(".canvas-chart-object.is-selected");
}

function updateCanvasChart(object) {
  if (!object?.chartConfig) return;
  object.dataset.chartType = object.chartConfig.type;
  const render = object.querySelector(".canvas-chart-render");
  if (render) render.innerHTML = renderChartSvg(object.chartConfig, 640, 420);
}

function syncChartSettingsPanel() {
  const chart = selectedCanvasChart();
  if (!chart) return;
  const type = document.getElementById("editorChartSelectedType");
  const icon = document.getElementById("editorChartSelectedIcon");
  const rotation = document.getElementById("editorChartRotation");
  const opacity = document.getElementById("editorChartOpacity");
  if (type) type.textContent = `${chartTypeLabel(chart.chartConfig?.type)} chart`;
  if (icon && chart.chartConfig) icon.innerHTML = renderChartSvg({...chart.chartConfig, title: "", subtitle: "", legend: "none", showValues: false}, 60, 42, true);
  if (rotation) {
    rotation.value = chart.dataset.chartRotation || "0";
    rotation.nextElementSibling.textContent = `${rotation.value}°`;
  }
  if (opacity) {
    opacity.value = chart.dataset.chartOpacity || "100";
    opacity.nextElementSibling.textContent = `${opacity.value}%`;
  }
}

function setChartEditorTab(tab) {
  state.chartEditorTab = tab;
  document.querySelectorAll("[data-chart-editor-tab]").forEach((button) => {
    const selected = button.dataset.chartEditorTab === tab;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
  document.querySelectorAll("[data-chart-editor-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.chartEditorPanel !== tab;
  });
}

function openChartEditor(type = "column", chartObject = null) {
  const modal = document.getElementById("editorChartModal");
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("editor-chart-modal-open");
  state.chartEditingObject = chartObject;
  state.chartDraft = cloneChartConfig(chartObject?.chartConfig || createDefaultChartConfig(type));
  state.chartDraft.type = type || state.chartDraft.type;
  renderChartEditorPanels();
  setChartEditorTab("content");
  const title = document.getElementById("editorChartDialogTitle");
  const subtitle = document.getElementById("editorChartDialogSubtitle");
  const insert = document.getElementById("editorChartModalInsert");
  if (title) title.textContent = chartObject ? `Edit ${chartTypeLabel(state.chartDraft.type)} chart` : `Create ${chartTypeLabel(state.chartDraft.type)} chart`;
  if (subtitle) subtitle.textContent = "Edit data and styling while the preview updates in real time.";
  if (insert) insert.textContent = chartObject ? "Apply changes" : "Insert chart";
  modal.querySelector(".editor-chart-dialog")?.focus();
}

function closeChartEditor() {
  const modal = document.getElementById("editorChartModal");
  if (modal) modal.hidden = true;
  document.body.classList.remove("editor-chart-modal-open");
  state.chartDraft = null;
  state.chartEditingObject = null;
}

function bindEditorChart() {
  const modal = document.getElementById("editorChartModal");
  if (!modal) return;

  document.querySelectorAll("[data-chart-editor-tab]").forEach((button) => {
    button.addEventListener("click", () => setChartEditorTab(button.dataset.chartEditorTab));
  });

  const refreshStructure = () => {
    renderChartEditorPanels();
    setChartEditorTab(state.chartEditorTab);
  };

  modal.addEventListener("input", (event) => {
    const config = state.chartDraft;
    if (!config) return;
    const field = event.target.dataset.chartField;
    if (field) {
      config[field] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      updateChartPreview();
      return;
    }
    const seriesElement = event.target.closest("[data-series-index]");
    if (seriesElement && event.target.dataset.seriesField) {
      const series = config.series[Number(seriesElement.dataset.seriesIndex)];
      if (series) series[event.target.dataset.seriesField] = event.target.value;
      updateChartPreview();
      return;
    }
    const rowElement = event.target.closest("[data-row-index]");
    if (!rowElement) return;
    const rowIndex = Number(rowElement.dataset.rowIndex);
    if (event.target.dataset.rowField === "category") config.categories[rowIndex] = event.target.value;
    if (event.target.dataset.valueSeries !== undefined) {
      const series = config.series[Number(event.target.dataset.valueSeries)];
      if (series) series.values[rowIndex] = Math.max(0, Number(event.target.value) || 0);
    }
    updateChartPreview();
  });

  modal.addEventListener("click", (event) => {
    const config = state.chartDraft;
    if (!config) return;
    const legend = event.target.closest("[data-chart-legend]");
    if (legend) {
      config.legend = legend.dataset.chartLegend;
      refreshStructure();
      return;
    }
    const actionButton = event.target.closest("[data-chart-action]");
    if (!actionButton) return;
    const action = actionButton.dataset.chartAction;
    if (action === "add-series" && config.series.length < 5) {
      const colors = ["#F28C5E", "#58A65C", "#E3B341"];
      config.series.push({
        id: `series-${Date.now()}`,
        name: `Series ${config.series.length + 1}`,
        color: colors[(config.series.length - 2) % colors.length],
        values: config.categories.map(() => 0),
      });
    }
    if (action === "delete-series" && config.series.length > 1) {
      const index = Number(actionButton.closest("[data-series-index]")?.dataset.seriesIndex);
      config.series.splice(index, 1);
    }
    if (action === "add-row" && config.categories.length < 10) {
      config.categories.push(`Category ${config.categories.length + 1}`);
      config.series.forEach((series) => series.values.push(0));
    }
    if (action === "delete-row" && config.categories.length > 1) {
      const index = Number(actionButton.closest("[data-row-index]")?.dataset.rowIndex);
      config.categories.splice(index, 1);
      config.series.forEach((series) => series.values.splice(index, 1));
    }
    refreshStructure();
  });

  const finish = () => closeChartEditor();
  document.getElementById("editorChartModalClose")?.addEventListener("click", finish);
  document.getElementById("editorChartModalCancel")?.addEventListener("click", finish);
  modal.addEventListener("pointerdown", (event) => {
    if (event.target === modal) finish();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) finish();
  });

  document.getElementById("editorChartModalInsert")?.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!state.chartDraft) return;
    const editingObject = state.chartEditingObject;
    if (editingObject) {
      editingObject.chartConfig = cloneChartConfig(state.chartDraft);
      updateCanvasChart(editingObject);
      closeChartEditor();
      showEditorLeftEditPanel();
      requestAnimationFrame(() => {
        editingObject.classList.add("is-selected");
        setCanvasTool("select");
      });
      return;
    }
    const layer = document.getElementById("canvasWorkspaceLayer");
    if (!layer) return;
    clearCanvasObjectSelection();
    clearEditorImageSelectionForCanvasObject();
    const chart = createCanvasChart(state.chartDraft);
    layer.appendChild(chart);
    const left = Math.max(12, (layer.offsetWidth - chart.offsetWidth) / 2);
    const top = Math.max(12, (layer.offsetHeight - chart.offsetHeight) / 2);
    chart.style.left = `${left}px`;
    chart.style.top = `${top}px`;
    closeChartEditor();
    showEditorLeftEditPanel();
    requestAnimationFrame(() => {
      chart.classList.add("is-selected");
      setCanvasTool("select");
    });
  });

  document.getElementById("editorChartEditButton")?.addEventListener("click", () => {
    const chart = selectedCanvasChart();
    if (chart) openChartEditor(chart.chartConfig?.type || "column", chart);
  });
  document.getElementById("editorChartRotation")?.addEventListener("input", (event) => {
    const chart = selectedCanvasChart();
    if (!chart) return;
    const value = Math.max(-180, Math.min(180, Number(event.target.value) || 0));
    chart.dataset.chartRotation = `${value}`;
    chart.style.setProperty("--chart-rotation", `${value}deg`);
    syncChartSettingsPanel();
  });
  document.getElementById("editorChartOpacity")?.addEventListener("input", (event) => {
    const chart = selectedCanvasChart();
    if (!chart) return;
    chart.dataset.chartOpacity = event.target.value;
    chart.style.opacity = `${Number(event.target.value) / 100}`;
    syncChartSettingsPanel();
  });
}

function selectedCanvasTableCell() {
  return selectedCanvasTable()?.querySelector("td.is-selected, th.is-selected") || null;
}

function clearCanvasObjectSelection() {
  document.querySelectorAll(".canvas-object.is-selected").forEach((object) => object.classList.remove("is-selected"));
  document.querySelectorAll(".canvas-table-object th.is-selected, .canvas-table-object td.is-selected").forEach((cell) => {
    cell.classList.remove("is-selected");
  });
  state.selectedTableCell = null;
}

function clearEditorImageSelectionForCanvasObject() {
  state.isEditorFrameSelected = false;
  state.selectedEditorSegmentId = null;
  state.selectedEditorSegmentType = null;
  document.getElementById("editorCanvasStageContent")?.classList.remove("is-frame-selected");
  document.querySelectorAll("#editorImageSegmentation .editor-segment").forEach((segment) => {
    segment.classList.remove("active", "is-multi-selected", "inspector-hover");
  });
  document.querySelectorAll(".editor-object-item").forEach((item) => item.classList.remove("selected"));
  document.getElementById("editorImageActionStack")?.classList.add("hidden");
  document.getElementById("editorTextActionStack")?.classList.add("hidden");
  setEditorSegmentDetailVisible(false);
}

function showEditorLeftEditPanel() {
  if (state.editorLeftPanelView !== "edit") setEditorPanelView("left", "edit");
}

function selectedCanvasObjectSettingsTool() {
  const selectedObject = document.querySelector(".canvas-object.is-selected");
  if (!selectedObject) return null;
  if (selectedObject.classList.contains("canvas-chart-object")) return "chart";
  if (selectedObject.classList.contains("canvas-table-object")) return "table";
  if (selectedObject.classList.contains("canvas-shape-object")) return "shape";
  if (selectedObject.classList.contains("canvas-line-object")) return "line";
  if (selectedObject.classList.contains("canvas-pen-object")) return "pen";
  if (selectedObject.classList.contains("canvas-text-object")) return "text";
  if (selectedObject.classList.contains("canvas-frame-object")) return "frame";
  return null;
}

function tableDashStyle(value) {
  return Number(value) > 0 ? "dashed" : "solid";
}

function applyTableTextAppearance(target) {
  if (!target) return;
  target.style.fontFamily = state.tableFont;
  target.style.fontSize = `${state.tableFontSize}px`;
  target.style.color = state.tableTextColor;
  target.style.lineHeight = `${state.tableLineHeight}`;
  target.style.textAlign = state.tableAlign;
  target.style.verticalAlign = state.tableVerticalAlign;
  target.style.fontWeight = state.tableBold ? "700" : "400";
  target.style.fontStyle = state.tableItalic ? "italic" : "normal";
  target.style.textDecoration = state.tableUnderline ? "underline" : "none";
  target.dataset.listStyle = state.tableListStyle;
}

function applyTableAppearance(tableObject) {
  if (!tableObject) return;
  const table = tableObject.querySelector("table");
  if (!table) return;
  tableObject.dataset.tableStyle = state.tableStyle;
  tableObject.dataset.outlineMode = state.tableOutlineMode;
  tableObject.classList.toggle("has-alternating-rows", state.tableAlternating);
  tableObject.style.opacity = `${1 - state.tableTransparency / 100}`;
  table.style.setProperty("--table-header-fill", state.tableHeaderFill);
  table.style.setProperty("--table-body-fill", state.tableBodyFill);
  table.style.setProperty("--table-outline", state.tableOutlineColor);
  table.style.setProperty("--table-outline-width", `${state.tableOutlineWidth}px`);
  table.style.setProperty("--table-outline-style", tableDashStyle(state.tableOutlineDash));
  table.querySelectorAll("th, td").forEach(applyTableTextAppearance);
}

function createCanvasTable(rows, columns) {
  const object = document.createElement("div");
  object.className = "canvas-object canvas-table-object is-selected";
  object.dataset.rows = `${rows}`;
  object.dataset.columns = `${columns}`;
  object.style.width = `${Math.max(180, columns * 88)}px`;
  const table = document.createElement("table");
  const body = document.createElement("tbody");
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    const row = document.createElement("tr");
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      const cell = document.createElement(rowIndex === 0 ? "th" : "td");
      cell.contentEditable = "true";
      cell.spellcheck = true;
      cell.textContent = rowIndex === 0 ? `Heading ${columnIndex + 1}` : `Cell ${rowIndex}, ${columnIndex + 1}`;
      row.appendChild(cell);
    }
    body.appendChild(row);
  }
  table.appendChild(body);
  object.appendChild(table);
  applyTableAppearance(object);
  return object;
}

function updateTableControlOutput(input) {
  const row = input?.closest("label");
  const output = row?.querySelector("output");
  if (!output) return;
  output.textContent = input.type === "color" ? input.value.toUpperCase() : input.value;
}

function syncTableSettingsPanel() {
  const table = selectedCanvasTable();
  const cell = selectedCanvasTableCell();
  const context = document.getElementById("editorTableContext");
  const whole = document.getElementById("editorTableWholeControls");
  const cellControls = document.getElementById("editorTableCellControls");
  if (context) {
    context.querySelector("strong").textContent = cell ? "Cell" : "Table";
    context.querySelector("span").textContent = cell ? "Back to table options" : "Select a cell to see available options";
    context.classList.toggle("is-cell-context", Boolean(cell));
    context.tabIndex = cell ? 0 : -1;
    context.setAttribute("role", cell ? "button" : "status");
  }
  if (whole) whole.hidden = Boolean(cell);
  if (cellControls) cellControls.hidden = !cell;
  document.querySelectorAll("[data-table-style]").forEach((button) => button.classList.toggle("active", button.dataset.tableStyle === state.tableStyle));
  document.querySelectorAll("[data-table-outline]").forEach((button) => button.classList.toggle("active", button.dataset.tableOutline === state.tableOutlineMode));
  document.querySelectorAll("[data-table-align]").forEach((button) => button.classList.toggle("active", button.dataset.tableAlign === state.tableAlign));
  document.querySelectorAll("[data-table-valign]").forEach((button) => button.classList.toggle("active", button.dataset.tableValign === state.tableVerticalAlign));
  document.querySelectorAll("[data-table-list]").forEach((button) => button.classList.toggle("active", button.dataset.tableList === state.tableListStyle));
  document.querySelector('[data-table-decoration="bold"]')?.classList.toggle("active", state.tableBold);
  document.querySelector('[data-table-decoration="italic"]')?.classList.toggle("active", state.tableItalic);
  document.querySelector('[data-table-decoration="underline"]')?.classList.toggle("active", state.tableUnderline);
  const alternating = document.getElementById("editorTableAlternating");
  if (alternating) alternating.checked = state.tableAlternating;
  const fields = {
    editorTableHeaderFill: state.tableHeaderFill,
    editorTableBodyFill: state.tableBodyFill,
    editorTableOutlineColor: state.tableOutlineColor,
    editorTableOutlineWidth: state.tableOutlineWidth,
    editorTableOutlineDash: state.tableOutlineDash,
    editorTableFont: state.tableFont,
    editorTableLineHeight: state.tableLineHeight,
    editorTableTextColor: state.tableTextColor,
    editorTableTransparency: state.tableTransparency,
  };
  Object.entries(fields).forEach(([id, value]) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.value = `${value}`;
    updateTableControlOutput(input);
  });
  const fontSize = document.getElementById("editorTableFontSize");
  if (fontSize) fontSize.textContent = `${state.tableFontSize}`;
  if (cell) {
    const fill = document.getElementById("editorTableCellFill");
    const outline = document.getElementById("editorTableCellOutline");
    const width = document.getElementById("editorTableCellOutlineWidth");
    const dash = document.getElementById("editorTableCellOutlineDash");
    if (fill) fill.value = cell.dataset.cellFill || "#FFFFFF";
    if (outline) outline.value = cell.dataset.cellOutline || state.tableOutlineColor;
    if (width) width.value = cell.dataset.cellOutlineWidth || `${state.tableOutlineWidth}`;
    if (dash) dash.value = cell.dataset.cellOutlineDash || "0";
    [fill, outline, width, dash].forEach(updateTableControlOutput);
  }
  if (table) applyTableAppearance(table);
}

function currentImagePrompt() {
  if (state.prompt.trim()) return state.prompt.trim();
  const template = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];
  const visualType = template.category === "Graphical Abstract" ? "graphical abstract" : template.category.replace(/s$/, "").toLowerCase();
  return `Create a clean scientific educational ${visualType} titled “${template.title}.” ${template.summary}`;
}

function currentInspectorPrompt() {
  if (state.prompt.trim()) return state.prompt.trim();
  const template = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];
  const visualType = template.category === "Graphical Abstract" ? "graphical abstract" : template.category.replace(/s$/, "").toLowerCase();
  return `Create a publication-ready ${visualType} titled “${template.title}” for ${template.subject}. ${template.summary} Use a clear scientific hierarchy with an immediately readable heading, accurately labeled illustrations, concise supporting text, balanced spacing, and an editable composition suitable for publication and presentation.`;
}

function editorObjectCopy(template, region) {
  if (region.type === "text") {
    return {
      title: "Text",
      description: region.id === "title" ? template.title : region.label,
    };
  }
  if (region.type === "callout") {
    return {
      title: "Label",
      description: `${region.label} with its supporting scientific annotation.`,
    };
  }
  return {
    title: `${region.label} illustration`,
    description: `Editable visual object from ${template.title}.`,
  };
}

function renderEditorInspector() {
  const prompt = document.getElementById("editorInspectorPromptText");
  const toggle = document.getElementById("editorInspectorPromptToggle");
  const list = document.getElementById("editorObjectList");
  if (!prompt || !toggle || !list) return;

  const template = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];
  if (state.editorInspectorTemplateId !== template.id) {
    state.editorInspectorTemplateId = template.id;
    state.editorInspectorPromptExpanded = false;
  }

  prompt.textContent = currentInspectorPrompt();
  prompt.classList.toggle("expanded", state.editorInspectorPromptExpanded);
  toggle.setAttribute("aria-expanded", String(state.editorInspectorPromptExpanded));
  const toggleLabel = toggle.querySelector("span");
  if (toggleLabel) toggleLabel.textContent = state.editorInspectorPromptExpanded ? "Show less" : "Show more";

  list.innerHTML = "";
  if (!state.isBlankEditor) {
    (segmentationRegions[template.id] || []).forEach((region) => {
      const copy = editorObjectCopy(template, region);
      const item = document.createElement("button");
      item.className = `editor-object-item ${state.selectedEditorSegmentId === region.id ? "selected" : ""}`;
      item.type = "button";
      item.dataset.editorObjectId = region.id;
      item.setAttribute("aria-label", `${copy.title}: ${copy.description}`);

      const thumbnail = document.createElement("span");
      thumbnail.className = "editor-object-thumbnail";
      const image = document.createElement("img");
      image.src = template.image;
      image.alt = "";
      image.style.width = `${10000 / region.w}%`;
      image.style.height = `${10000 / region.h}%`;
      image.style.left = `${(-region.x / region.w) * 100}%`;
      image.style.top = `${(-region.y / region.h) * 100}%`;
      thumbnail.appendChild(image);

      const text = document.createElement("span");
      text.className = "editor-object-copy";
      text.innerHTML = `<span class="editor-object-title">${copy.title}</span><span class="editor-object-description">${copy.description}</span>`;
      item.append(thumbnail, text);
      const syncCanvasHover = () => {
        const segment = Array.from(document.querySelectorAll("#editorImageSegmentation .editor-segment"))
          .find((candidate) => candidate.dataset.segmentId === region.id);
        if (!segment) return;
        segment.classList.toggle("inspector-hover", item.matches(":hover") || item.matches(":focus-visible"));
      };
      ["pointerenter", "pointerleave", "focus", "blur"].forEach((eventName) => {
        item.addEventListener(eventName, () => window.requestAnimationFrame(syncCanvasHover));
      });
      item.addEventListener("click", (event) => {
        event.stopPropagation();
        list.querySelectorAll(".editor-object-item").forEach((object) => object.classList.toggle("selected", object === item));
        const segment = Array.from(document.querySelectorAll("#editorImageSegmentation .editor-segment"))
          .find((candidate) => candidate.dataset.segmentId === region.id);
        segment?.click();
      });
      list.appendChild(item);
    });
  }

  window.requestAnimationFrame(() => {
    const expanded = state.editorInspectorPromptExpanded;
    prompt.classList.remove("expanded");
    const isTruncated = prompt.scrollHeight > prompt.clientHeight + 1;
    prompt.classList.toggle("expanded", expanded);
    toggle.hidden = !isTruncated;
  });
}

function applyImageAppearance() {
  const image = document.getElementById("editorCanvasImage");
  if (!image) return;
  image.style.opacity = `${state.imageOpacity / 100}`;
  image.style.setProperty("--image-layer", `${state.imageLayer}`);
  const stageContent = document.getElementById("editorCanvasStageContent");
  if (stageContent && state.imageWidth && state.imageHeight) {
    stageContent.style.width = `${state.imageWidth}px`;
    stageContent.style.height = `${state.imageHeight}px`;
    image.style.width = "100%";
    image.style.height = "100%";
  }
}

const imageUnitFactors = {px: 1, in: 96, cm: 96 / 2.54, mm: 96 / 25.4};

function imageDimensionPrecision(unit) {
  return unit === "px" ? 0 : 2;
}

function syncEditorImageTransformControls() {
  const image = document.getElementById("editorCanvasImage");
  if (!image) return;
  const renderedWidth = state.imageWidth || image.getBoundingClientRect().width || image.naturalWidth;
  const renderedHeight = state.imageHeight || image.getBoundingClientRect().height || image.naturalHeight;
  if (!renderedWidth || !renderedHeight) return;
  if (!state.imageWidth || !state.imageHeight) {
    state.imageWidth = renderedWidth;
    state.imageHeight = renderedHeight;
  }
  const factor = imageUnitFactors[state.imageUnits] || 1;
  const precision = imageDimensionPrecision(state.imageUnits);
  const rotation = Math.round(state.imageRotation * 10) / 10;
  const rotationInput = document.getElementById("editorImageRotation");
  const rotationSlider = document.getElementById("editorImageRotationSlider");
  if (rotationInput) rotationInput.value = `${rotation}`;
  if (rotationSlider) rotationSlider.value = `${Math.round(rotation)}`;
  const units = document.getElementById("editorImageUnits");
  if (units) units.value = state.imageUnits;
  const width = document.getElementById("editorImageWidth");
  const height = document.getElementById("editorImageHeight");
  if (width) width.value = (state.imageWidth / factor).toFixed(precision);
  if (height) height.value = (state.imageHeight / factor).toFixed(precision);
  document.querySelectorAll("[data-image-flip]").forEach((button) => {
    const pressed = button.dataset.imageFlip === "horizontal" ? state.imageFlipX < 0 : state.imageFlipY < 0;
    button.classList.toggle("active", pressed);
    button.setAttribute("aria-pressed", String(pressed));
  });
  const lock = document.getElementById("editorImageAspectLock");
  lock?.classList.toggle("active", state.imageAspectLocked);
  lock?.setAttribute("aria-pressed", String(state.imageAspectLocked));
  lock?.setAttribute("aria-label", state.imageAspectLocked ? "Unlock aspect ratio" : "Lock aspect ratio");
}

function syncImageSettingsPanel() {
  const prompt = document.getElementById("editorImagePromptText");
  const toggle = document.getElementById("editorImagePromptToggle");
  if (prompt) {
    prompt.textContent = currentImagePrompt();
    prompt.classList.toggle("expanded", state.imagePromptExpanded);
  }
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(state.imagePromptExpanded));
    const label = toggle.querySelector("span");
    if (label) label.textContent = state.imagePromptExpanded ? "Show less" : "Show all";
  }
  const opacity = document.getElementById("editorImageOpacity");
  if (opacity) opacity.value = `${state.imageOpacity}`;
  applyImageAppearance();
  window.requestAnimationFrame(syncEditorImageTransformControls);
}

function selectedEditorRegion() {
  if (!state.selectedEditorSegmentId) return null;
  const template = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];
  const region = (segmentationRegions[template.id] || []).find((item) => item.id === state.selectedEditorSegmentId);
  return region ? {template, region} : null;
}

function editorColorToHex(red, green, blue) {
  return `#${[red, green, blue].map((channel) => Math.round(channel).toString(16).padStart(2, "0")).join("")}`.toUpperCase();
}

function detectEditorRegionColor(region, mode) {
  const image = document.getElementById("editorCanvasImage");
  if (!image?.complete || !image.naturalWidth || !image.naturalHeight) {
    return mode === "text" ? "#000000" : "#91A6BC";
  }

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 48;
    canvas.height = 48;
    const context = canvas.getContext("2d", {willReadFrequently: true});
    if (!context) return mode === "text" ? "#000000" : "#91A6BC";
    context.drawImage(
      image,
      image.naturalWidth * region.x / 100,
      image.naturalHeight * region.y / 100,
      image.naturalWidth * region.w / 100,
      image.naturalHeight * region.h / 100,
      0,
      0,
      canvas.width,
      canvas.height,
    );

    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const buckets = new Map();
    for (let index = 0; index < pixels.length; index += 4) {
      const red = pixels[index];
      const green = pixels[index + 1];
      const blue = pixels[index + 2];
      const alpha = pixels[index + 3];
      if (alpha < 128) continue;
      const maximum = Math.max(red, green, blue);
      const minimum = Math.min(red, green, blue);
      const saturation = maximum - minimum;
      const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
      if (mode === "text" ? luminance > 155 : luminance > 230 || luminance < 32 || saturation < 24) continue;
      const key = `${red >> 4}-${green >> 4}-${blue >> 4}`;
      const bucket = buckets.get(key) || {count: 0, red: 0, green: 0, blue: 0, luminance: 0, saturation: 0};
      bucket.count += 1;
      bucket.red += red;
      bucket.green += green;
      bucket.blue += blue;
      bucket.luminance += luminance;
      bucket.saturation += saturation;
      buckets.set(key, bucket);
    }

    let bestBucket = null;
    let bestScore = -1;
    buckets.forEach((bucket) => {
      const luminance = bucket.luminance / bucket.count;
      const saturation = bucket.saturation / bucket.count;
      const score = mode === "text"
        ? bucket.count * (280 - luminance)
        : bucket.count * (24 + saturation) * (1 - Math.abs(luminance - 150) / 300);
      if (score > bestScore) {
        bestScore = score;
        bestBucket = bucket;
      }
    });
    if (!bestBucket) return mode === "text" ? "#000000" : "#91A6BC";
    return editorColorToHex(
      bestBucket.red / bestBucket.count,
      bestBucket.green / bestBucket.count,
      bestBucket.blue / bestBucket.count,
    );
  } catch (error) {
    return mode === "text" ? "#000000" : "#91A6BC";
  }
}

function editorRegionText(template, region) {
  return region.id === "title" ? template.title : region.label;
}

function currentEditorSegmentStyle() {
  const selection = selectedEditorRegion();
  if (!selection) return null;
  const {template, region} = selection;
  const key = `${template.id}:${region.id}`;
  if (!state.editorSegmentStyles[key]) {
    const image = document.getElementById("editorCanvasImage");
    const renderedHeight = image?.getBoundingClientRect().height || 700;
    state.editorSegmentStyles[key] = {
      fill: detectEditorRegionColor(region, "fill"),
      stroke: "transparent",
      strokeWidth: 1,
      strokeOpacity: 100,
      borderDash: 0,
      opacity: 100,
      text: editorRegionText(template, region),
      fontFamily: "IBM Plex Sans",
      italic: false,
      underline: false,
      fontWeight: region.id === "title" ? 600 : 500,
      fontSize: Math.max(12, Math.min(48, Math.round(renderedHeight * region.h / 100 * 4.2) / 10)),
      textColor: detectEditorRegionColor(region, "text"),
    };
  }
  return {template, region, style: state.editorSegmentStyles[key]};
}

function syncEditorSegmentSettingsPanel() {
  const selection = currentEditorSegmentStyle();
  if (!selection) return;
  const {template, region, style} = selection;
  const objectCopy = editorObjectCopy(template, region);

  if (region.type !== "text") {
    const heading = document.getElementById("editorSegmentGraphicHeading");
    if (heading) heading.textContent = objectCopy.title;
    const fill = document.getElementById("editorSegmentFillColor");
    if (fill) fill.value = style.fill;
    const fillSwatch = document.getElementById("editorSegmentFillSwatch");
    if (fillSwatch) fillSwatch.style.setProperty("--segment-color", style.fill);
    const fillValue = document.getElementById("editorSegmentFillValue");
    if (fillValue) fillValue.textContent = style.fill;
    const strokeSwatch = document.getElementById("editorSegmentStrokeSwatch");
    strokeSwatch?.classList.toggle("is-none", style.stroke === "transparent");
    if (strokeSwatch && style.stroke !== "transparent") strokeSwatch.style.setProperty("--segment-color", style.stroke);
    const strokeValue = document.getElementById("editorSegmentStrokeValue");
    if (strokeValue) strokeValue.textContent = style.stroke === "transparent" ? "None" : style.stroke;
    [
      ["editorSegmentStrokeWidth", style.strokeWidth, "editorSegmentStrokeWidthValue", `${style.strokeWidth} px`],
      ["editorSegmentStrokeOpacity", style.strokeOpacity, "editorSegmentStrokeOpacityValue", `${style.strokeOpacity}%`],
      ["editorSegmentBorderDash", style.borderDash, "editorSegmentBorderDashValue", `${style.borderDash}`],
      ["editorSegmentOpacity", style.opacity, "editorSegmentOpacityValue", `${style.opacity}%`],
    ].forEach(([inputId, value, outputId, label]) => {
      const input = document.getElementById(inputId);
      const output = document.getElementById(outputId);
      if (input) input.value = `${value}`;
      if (output) output.textContent = label;
    });
    return;
  }

  const textValue = document.getElementById("editorSegmentTextValue");
  if (textValue) textValue.value = style.text;
  const fontFamily = document.getElementById("editorSegmentFontFamily");
  if (fontFamily) fontFamily.value = style.fontFamily;
  const fontWeight = document.getElementById("editorSegmentFontWeight");
  if (fontWeight) fontWeight.value = `${style.fontWeight}`;
  const fontSize = document.getElementById("editorSegmentFontSize");
  if (fontSize) fontSize.value = `${style.fontSize}`;
  const italic = document.getElementById("editorSegmentItalic");
  italic?.classList.toggle("active", style.italic);
  italic?.setAttribute("aria-pressed", String(style.italic));
  const underline = document.getElementById("editorSegmentUnderline");
  underline?.classList.toggle("active", style.underline);
  underline?.setAttribute("aria-pressed", String(style.underline));
  const textColor = document.getElementById("editorSegmentTextColor");
  if (textColor) textColor.value = style.textColor;
  const textColorSwatch = document.getElementById("editorSegmentTextColorSwatch");
  if (textColorSwatch) textColorSwatch.style.setProperty("--segment-color", style.textColor);
  const textColorValue = document.getElementById("editorSegmentTextColorValue");
  if (textColorValue) textColorValue.textContent = style.textColor;
}

function setEditorSegmentDetailVisible(visible) {
  const inspector = document.querySelector("#editorRightEditView > .editor-inspector-scroll");
  const detail = document.getElementById("editorSegmentDetail");
  if (inspector) inspector.hidden = visible;
  if (detail) detail.hidden = !visible;
}

function clearEditorSegmentSelection() {
  state.selectedEditorSegmentId = null;
  state.selectedEditorSegmentType = null;
  document.querySelectorAll("#editorImageSegmentation .editor-segment").forEach((segment) => {
    segment.classList.remove("active", "inspector-hover");
  });
  document.querySelectorAll(".editor-object-item").forEach((item) => item.classList.remove("selected"));
  document.getElementById("editorImageActionStack")?.classList.add("hidden");
  document.getElementById("editorTextActionStack")?.classList.add("hidden");
  setEditorSegmentDetailVisible(false);
  setCanvasTool(state.canvasTool);
  renderEditorInspector();
}

function setCanvasTool(tool) {
  state.canvasTool = tool;
  const imageSelected = state.isEditorFrameSelected;
  const segmentSelected = Boolean(state.selectedEditorSegmentId) && !imageSelected;
  const textSegmentSelected = segmentSelected && state.selectedEditorSegmentType === "text";
  const tableSelected = Boolean(selectedCanvasTable());
  const chartSelected = Boolean(selectedCanvasChart());
  const selectedObjectTool = selectedCanvasObjectSettingsTool();
  const settingsTool = tool === "select" && selectedObjectTool ? selectedObjectTool : tool;
  if (!["select", "hand"].includes(settingsTool) && state.isEditingBlankCanvasSize) {
    state.isEditingBlankCanvasSize = false;
    state.blankCanvasDraft = null;
  }
  const stage = document.getElementById("editorCanvasStage");
  if (stage) stage.dataset.canvasTool = tool;
  const canvasSettings = document.getElementById("editorCanvasSettings");
  const canvasSizeSettings = document.getElementById("editorCanvasSizeSettings");
  const canvasSizeActive = state.isBlankEditor
    && state.isEditingBlankCanvasSize
    && !imageSelected
    && !tableSelected
    && !chartSelected
    && ["select", "hand"].includes(settingsTool);
  if (canvasSettings) canvasSettings.hidden = canvasSizeActive || imageSelected || tableSelected || chartSelected || !["select", "hand"].includes(settingsTool);
  if (canvasSizeSettings) canvasSizeSettings.hidden = !canvasSizeActive;
  const shapeSettings = document.getElementById("editorShapeSettings");
  if (shapeSettings) shapeSettings.hidden = imageSelected || settingsTool !== "shape";
  if (!imageSelected && settingsTool === "shape") syncShapeSettingsPanel();
  const lineSettings = document.getElementById("editorLineSettings");
  if (lineSettings) lineSettings.hidden = imageSelected || settingsTool !== "line";
  if (!imageSelected && settingsTool === "line") syncLineSettingsPanel();
  const penSettings = document.getElementById("editorPenSettings");
  if (penSettings) penSettings.hidden = imageSelected || settingsTool !== "pen";
  if (!imageSelected && settingsTool === "pen") syncPenSettingsPanel();
  const textSettings = document.getElementById("editorTextSettings");
  if (textSettings) textSettings.hidden = imageSelected || settingsTool !== "text";
  if (!imageSelected && settingsTool === "text") syncTextSettingsPanel();
  const frameSettings = document.getElementById("editorFrameSettings");
  if (frameSettings) frameSettings.hidden = imageSelected || settingsTool !== "frame";
  if (!imageSelected && settingsTool === "frame") syncFrameSettingsPanel();
  const tableSettings = document.getElementById("editorTableSettings");
  if (tableSettings) tableSettings.hidden = imageSelected || !tableSelected || settingsTool !== "table";
  if (!imageSelected && tableSelected && settingsTool === "table") syncTableSettingsPanel();
  const chartSettings = document.getElementById("editorChartSettings");
  if (chartSettings) chartSettings.hidden = imageSelected || !chartSelected || settingsTool !== "chart";
  if (!imageSelected && chartSelected && settingsTool === "chart") syncChartSettingsPanel();
  const imageSettings = document.getElementById("editorImageSettings");
  if (imageSettings) imageSettings.hidden = !imageSelected;
  if (imageSelected) syncImageSettingsPanel();
  const segmentGraphicSettings = document.getElementById("editorSegmentGraphicSettings");
  if (segmentGraphicSettings) segmentGraphicSettings.hidden = !segmentSelected || textSegmentSelected;
  const segmentTextSettings = document.getElementById("editorSegmentTextSettings");
  if (segmentTextSettings) segmentTextSettings.hidden = !textSegmentSelected;
  if (segmentSelected) syncEditorSegmentSettingsPanel();

  document.querySelectorAll(".canvas-tool-button[data-canvas-tool]").forEach((button) => {
    button.classList.toggle("active", button.dataset.canvasTool === tool);
  });
  document.querySelectorAll("[data-canvas-tool-group]").forEach((group) => {
    group.classList.toggle("active", group.dataset.canvasToolGroup === tool);
  });
}

function updateCanvasTransform() {
  const stageContent = document.getElementById("editorCanvasStageContent");
  const workspaceLayer = document.getElementById("canvasWorkspaceLayer");
  if (!stageContent) return;
  stageContent.style.setProperty("--editor-zoom-scale", `${state.zoom / 100}`);
  stageContent.style.setProperty("--canvas-pan-x", `${state.canvasPanX}px`);
  stageContent.style.setProperty("--canvas-pan-y", `${state.canvasPanY}px`);
  stageContent.style.setProperty("--editor-image-rotation", `${state.imageRotation}deg`);
  stageContent.style.setProperty("--editor-image-x", `${state.imageOffsetX * state.zoom / 100}px`);
  stageContent.style.setProperty("--editor-image-y", `${state.imageOffsetY * state.zoom / 100}px`);
  stageContent.style.setProperty("--editor-image-flip-x", `${state.imageFlipX}`);
  stageContent.style.setProperty("--editor-image-flip-y", `${state.imageFlipY}`);
  workspaceLayer?.style.setProperty("--editor-zoom-scale", `${state.zoom / 100}`);
  workspaceLayer?.style.setProperty("--canvas-pan-x", `${state.canvasPanX}px`);
  workspaceLayer?.style.setProperty("--canvas-pan-y", `${state.canvasPanY}px`);
  syncEditorImageTransformControls();
}

function setEditorPanelView(panel, view) {
  if (panel === "left" && view !== "library") hideEditorLibraryPreview();
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

  if (panel === "left" && view === "uploads") renderEditorUploads();
  if (panel === "left" && view === "library") renderEditorLibrary();

  if (panel === "right") {
    const panelLabels = {chat: "Editor chat", edit: "Editor segments", slides: "Editor slides"};
    document.getElementById("historyPanel")?.setAttribute("aria-label", panelLabels[view] || "Editor panel");
    if (view === "edit") {
      renderEditorInspector();
      setEditorSegmentDetailVisible(Boolean(state.selectedEditorSegmentId));
    }
    if (view === "slides") renderEditorSlides();
  }
}

function rememberGeneratedEditorUpload(template) {
  if (!template?.id || !template?.image) return;
  const existing = state.editorUploads.find((item) => item.sourceId === template.id && item.kind === "generated");
  const croppedImage = state.editorCroppedImages[template.id];
  const source = croppedImage?.src || template.image;
  if (existing) {
    existing.src = source;
    existing.template = template;
    return;
  }
  state.editorUploads.unshift({
    id: `generated-${template.id}`,
    sourceId: template.id,
    title: template.title,
    src: source,
    kind: "generated",
    template,
  });
}

function addUploadedAssetToCanvas(asset) {
  const drawingLayer = document.getElementById("canvasWorkspaceLayer");
  if (!drawingLayer || !asset?.src) return;

  showEditorLeftEditPanel();
  clearEditorImageSelectionForCanvasObject();
  drawingLayer.querySelectorAll(".canvas-object.is-selected").forEach((object) => object.classList.remove("is-selected"));
  const image = document.createElement("img");
  image.className = "canvas-object canvas-imported-image is-selected";
  image.alt = asset.title || "Uploaded image";
  image.draggable = false;
  image.src = asset.src;
  image.style.left = `${Math.max(0, (drawingLayer.offsetWidth - 180) / 2)}px`;
  image.style.top = `${Math.max(0, (drawingLayer.offsetHeight - 180) / 2)}px`;
  drawingLayer.appendChild(image);
  setCanvasTool("select");
}

function renderEditorUploads() {
  const grid = document.getElementById("editorUploadsGrid");
  const empty = document.getElementById("editorUploadsEmpty");
  if (!grid || !empty) return;

  if (!state.isBlankEditor) {
    rememberGeneratedEditorUpload(state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0]);
  }

  grid.innerHTML = "";
  state.editorUploads.forEach((asset) => {
    const card = document.createElement("button");
    card.className = "editor-upload-card";
    card.type = "button";
    card.setAttribute("aria-label", `${asset.kind === "generated" ? "Open" : "Add"} ${asset.title}`);
    const preview = document.createElement("span");
    preview.className = "editor-upload-card-preview";
    const image = document.createElement("img");
    image.src = asset.src;
    image.alt = "";
    preview.appendChild(image);
    const copy = document.createElement("span");
    copy.className = "editor-upload-card-copy";
    const title = document.createElement("strong");
    title.className = "editor-upload-card-title";
    title.textContent = asset.title;
    const type = document.createElement("small");
    type.className = "editor-upload-card-type";
    type.textContent = asset.kind === "generated" ? "Generated" : "Uploaded";
    copy.append(title, type);
    card.append(preview, copy);
    card.addEventListener("click", () => {
      if (asset.kind === "generated" && asset.template) {
        state.isBlankEditor = false;
        state.generatedResultTemplate = asset.template;
        state.currentEditorTemplate = asset.template;
        renderEditorCanvas();
        setEditorPanelView("left", "edit");
        return;
      }
      addUploadedAssetToCanvas(asset);
      setEditorPanelView("left", "edit");
    });
    grid.appendChild(card);
  });

  empty.hidden = state.editorUploads.length > 0;
}

function editorLibraryCategoryIcon(category) {
  const paths = editorLibraryIconPaths[category.icon] || editorLibraryIconPaths.grid;
  return `<svg viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">${paths}</svg>`;
}

function editorLibraryAssetsFor(category) {
  const categoryIndex = editorLibraryCategories.findIndex((item) => item.id === category.id);
  return category.labels.map((title, index) => ({
    id: `library-${category.id}-${index}`,
    title,
    src: editorLibraryImages[(categoryIndex + index) % editorLibraryImages.length],
    kind: "library",
    category: category.name,
  }));
}

let editorLibraryStatusTimer = null;
let editorLibraryPreviewState = null;

function ensureEditorLibraryPreview() {
  let preview = document.getElementById("editorLibraryHoverPreview");
  if (preview) return preview;

  preview = document.createElement("aside");
  preview.id = "editorLibraryHoverPreview";
  preview.className = "editor-library-hover-preview";
  preview.setAttribute("role", "tooltip");
  preview.setAttribute("aria-hidden", "true");
  preview.innerHTML = `
    <div class="editor-library-hover-preview-header">
      <div class="editor-library-hover-preview-title"></div>
      <span class="editor-library-hover-preview-kind"></span>
    </div>
    <div class="editor-library-hover-preview-media">
      <img alt="" />
    </div>
  `;
  document.body.appendChild(preview);
  preview.querySelector("img")?.addEventListener("load", () => positionEditorLibraryPreview());
  return preview;
}

function editorLibraryPreviewKind(asset) {
  if (asset.kind === "icon") return "Icon";
  if (asset.kind === "template") return "Template";
  return "Illustration";
}

function positionEditorLibraryPreview() {
  const preview = document.getElementById("editorLibraryHoverPreview");
  const card = editorLibraryPreviewState?.card;
  const leftPanel = document.getElementById("editorLeftPanel");
  const rightPanel = document.getElementById("historyPanel");
  if (!preview || !card?.isConnected || !leftPanel || state.editorLeftPanelCollapsed) {
    hideEditorLibraryPreview();
    return;
  }

  const cardRect = card.getBoundingClientRect();
  const leftPanelRect = leftPanel.getBoundingClientRect();
  const rightBoundary = rightPanel?.getBoundingClientRect().left || window.innerWidth;
  const gap = 16;
  const viewportPadding = 16;
  const availableWidth = rightBoundary - leftPanelRect.right - gap - viewportPadding;
  if (availableWidth < 240) {
    hideEditorLibraryPreview();
    return;
  }

  preview.style.width = `${Math.min(420, availableWidth)}px`;
  preview.style.left = `${leftPanelRect.right + gap}px`;
  const previewRect = preview.getBoundingClientRect();
  const minTop = 52 + viewportPadding;
  const maxTop = Math.max(minTop, window.innerHeight - previewRect.height - viewportPadding);
  const centeredTop = cardRect.top + cardRect.height / 2 - previewRect.height / 2;
  preview.style.top = `${Math.min(maxTop, Math.max(minTop, centeredTop))}px`;
}

function showEditorLibraryPreview(card, asset) {
  const editor = document.getElementById("editorDesktopScreen");
  if (!editor?.classList.contains("active") || state.editorLeftPanelCollapsed || state.editorLeftPanelView !== "library") return;

  const preview = ensureEditorLibraryPreview();
  const kind = editorLibraryPreviewKind(asset);
  editorLibraryPreviewState = {card, asset};
  preview.dataset.kind = kind.toLowerCase();
  preview.querySelector(".editor-library-hover-preview-title").textContent = asset.title;
  preview.querySelector(".editor-library-hover-preview-kind").textContent = kind;
  const image = preview.querySelector("img");
  image.src = asset.src;
  image.alt = `${asset.title} ${kind.toLowerCase()} preview`;
  preview.setAttribute("aria-hidden", "false");
  preview.classList.add("visible");
  positionEditorLibraryPreview();
}

function hideEditorLibraryPreview() {
  editorLibraryPreviewState = null;
  const preview = document.getElementById("editorLibraryHoverPreview");
  if (!preview) return;
  preview.classList.remove("visible");
  preview.setAttribute("aria-hidden", "true");
}

function showEditorLibraryStatus(message) {
  const status = document.getElementById("editorLibraryStatus");
  if (!status) return;
  window.clearTimeout(editorLibraryStatusTimer);
  status.textContent = message;
  status.classList.add("visible");
  editorLibraryStatusTimer = window.setTimeout(() => status.classList.remove("visible"), 1800);
}

function createEditorLibraryAction({label, action, asset, icon}) {
  const button = document.createElement("button");
  button.className = "editor-library-asset-action";
  button.type = "button";
  button.dataset.libraryAction = action;
  button.dataset.tooltip = label;
  button.setAttribute("aria-label", `${label}: ${asset.title}`);
  if (action === "reference") {
    button.dataset.libraryReferenceId = asset.id;
    button.classList.toggle("active", state.editorLibraryReferenceId === asset.id);
    button.setAttribute("aria-pressed", String(state.editorLibraryReferenceId === asset.id));
  }
  button.innerHTML = icon;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (action === "add") {
      addUploadedAssetToCanvas(asset);
      showEditorLibraryStatus(`${asset.title} added to canvas`);
      return;
    }
    state.editorLibraryReferenceId = state.editorLibraryReferenceId === asset.id ? null : asset.id;
    renderEditorLibrary();
    showEditorLibraryStatus(state.editorLibraryReferenceId ? `${asset.title} added as reference` : "Reference removed");
  });
  return button;
}

function renderEditorLibraryCategories(results, query) {
  const list = document.createElement("div");
  list.className = "editor-library-category-list";
  const matches = editorLibraryCategories.filter((category) => category.name.toLowerCase().includes(query));

  matches.forEach((category) => {
    const button = document.createElement("button");
    button.className = "editor-library-category";
    button.type = "button";
    button.setAttribute("aria-label", `Open ${category.name}`);
    const icon = document.createElement("span");
    icon.className = "editor-library-category-icon";
    icon.innerHTML = editorLibraryCategoryIcon(category);
    const label = document.createElement("span");
    label.className = "editor-library-category-label";
    label.textContent = category.name;
    const chevron = document.createElement("span");
    chevron.className = "editor-library-chevron";
    chevron.innerHTML = '<svg viewBox="0 0 5 9" fill="none" aria-hidden="true"><path d="M4.518 3.88a.45.45 0 0 1 0 .635L.768 8.265a.45.45 0 1 1-.636-.636L3.563 4.2.132.767A.45.45 0 1 1 .768.13l3.75 3.75Z" fill="currentColor"/></svg>';
    button.append(icon, label, chevron);
    button.addEventListener("click", () => {
      state.editorLibraryCategoryId = category.id;
      state.editorLibraryQuery = "";
      const search = document.getElementById("editorLibrarySearch");
      if (search) search.value = "";
      renderEditorLibrary();
    });
    list.appendChild(button);
  });

  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "editor-library-empty";
    empty.textContent = "No categories match your search.";
    list.appendChild(empty);
  }
  results.appendChild(list);
}

function renderEditorLibraryAssetGrid(results, assets, emptyMessage) {
  if (!assets.length) {
    const empty = document.createElement("div");
    empty.className = "editor-library-empty";
    empty.textContent = emptyMessage;
    results.appendChild(empty);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "editor-library-asset-grid";
  const addIcon = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><rect x="1.25" y="1.25" width="13.5" height="13.5" rx="3" stroke="currentColor" stroke-width="1.5"/></svg>';
  const referenceIcon = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.3.75c0 .42-.32.75-.71.75-.65 0-1.18.56-1.18 1.25a.71.71 0 0 1-1.41 0C0 1.23 1.16 0 2.59 0c.39 0 .71.33.71.75ZM0 5.75A.71.71 0 0 1 1.41 5v3.25a.71.71 0 0 1-1.41 0v-2.5Zm.71 4.75c.39 0 .7.33.7.75 0 .69.53 1.25 1.18 1.25h3.61c.08.53.23 1.03.43 1.5H2.59C1.16 14 0 12.77 0 11.25c0-.42.32-.75.71-.75ZM13.18 5.69a5.3 5.3 0 0 0-1.42-.19V2.75c0-.69-.52-1.25-1.17-1.25a.71.71 0 0 1 0-1.5c1.43 0 2.59 1.23 2.59 2.75v2.94ZM7.53 11.5A4.37 4.37 0 0 1 11.76 7 4.37 4.37 0 0 1 16 11.5a4.37 4.37 0 0 1-4.24 4.5 4.37 4.37 0 0 1-4.23-4.5Zm4.23-2.5c-.26 0-.47.23-.47.5V11H9.88c-.26 0-.47.23-.47.5s.21.5.47.5h1.41v1.5c0 .27.21.5.47.5s.48-.23.48-.5V12h1.41c.26 0 .47-.23.47-.5s-.21-.5-.47-.5h-1.41V9.5c0-.27-.22-.5-.48-.5Z" fill="currentColor"/></svg>';

  assets.forEach((asset) => {
    const card = document.createElement("article");
    card.className = `editor-library-asset is-${asset.kind || "illustration"}`;
    card.setAttribute("aria-label", `${asset.title}. Hover or focus to preview.`);
    const image = document.createElement("img");
    image.src = asset.src;
    image.alt = asset.title;
    const overlay = document.createElement("div");
    overlay.className = "editor-library-asset-overlay";
    const name = document.createElement("span");
    name.className = "editor-library-asset-name";
    name.textContent = asset.title;
    const actions = document.createElement("div");
    actions.className = "editor-library-asset-actions";
    actions.append(
      createEditorLibraryAction({label: "Add to canvas", action: "add", asset, icon: addIcon}),
      createEditorLibraryAction({label: "Add as reference", action: "reference", asset, icon: referenceIcon}),
    );
    overlay.append(name, actions);
    card.append(image, overlay);
    card.addEventListener("pointerenter", () => showEditorLibraryPreview(card, asset));
    card.addEventListener("pointerleave", () => {
      if (!card.contains(document.activeElement)) hideEditorLibraryPreview();
    });
    card.addEventListener("focusin", () => showEditorLibraryPreview(card, asset));
    card.addEventListener("focusout", (event) => {
      if (!card.contains(event.relatedTarget)) hideEditorLibraryPreview();
    });
    grid.appendChild(card);
  });

  results.appendChild(grid);
}

function renderEditorLibraryDetail(results, category, query) {
  const heading = document.createElement("div");
  heading.className = "editor-library-detail-heading";
  const back = document.createElement("button");
  back.className = "editor-library-back";
  back.type = "button";
  back.setAttribute("aria-label", "Back to gallery categories");
  back.innerHTML = '<svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M12.25 7H1.75M6 2.75 1.75 7 6 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  back.addEventListener("click", () => {
    state.editorLibraryCategoryId = null;
    state.editorLibraryQuery = "";
    const search = document.getElementById("editorLibrarySearch");
    if (search) search.value = "";
    renderEditorLibrary();
  });
  const root = document.createElement("span");
  root.textContent = "Gallery /";
  const title = document.createElement("strong");
  title.textContent = category.name;
  heading.append(back, root, title);

  const assets = editorLibraryAssetsFor(category).filter((asset) => asset.title.toLowerCase().includes(query));
  results.append(heading);
  renderEditorLibraryAssetGrid(results, assets, `No ${category.name} illustrations match your search.`);
}

function renderEditorLibraryCollection(results, type, query) {
  const source = type === "icons"
    ? editorLibraryIconAssets.map((asset) => ({...asset, kind: "icon", category: "Icons"}))
    : editorLibraryTemplateAssets;
  const assets = source.filter((asset) => asset.title.toLowerCase().includes(query));
  renderEditorLibraryAssetGrid(results, assets, `No ${type} match your search.`);
}

function renderEditorLibrary() {
  const results = document.getElementById("editorLibraryResults");
  const search = document.getElementById("editorLibrarySearch");
  if (!results || !search) return;
  hideEditorLibraryPreview();
  const query = state.editorLibraryQuery.trim().toLowerCase();
  const type = state.editorLibraryType || "illustrations";
  results.innerHTML = "";
  document.querySelectorAll("[data-editor-library-type]").forEach((button) => {
    const selected = button.dataset.editorLibraryType === type;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  search.placeholder = state.editorLibraryCategoryId && type === "illustrations" ? "Search illustrations" : `Search ${type}`;
  search.setAttribute("aria-label", `Search gallery ${type}`);
  if (search.value !== state.editorLibraryQuery) search.value = state.editorLibraryQuery;
  const category = editorLibraryCategories.find((item) => item.id === state.editorLibraryCategoryId);
  if (type === "illustrations") {
    if (category) renderEditorLibraryDetail(results, category, query);
    else renderEditorLibraryCategories(results, query);
    return;
  }
  renderEditorLibraryCollection(results, type, query);
}

function bindEditorLibrary() {
  const search = document.getElementById("editorLibrarySearch");
  if (!search) return;
  search.addEventListener("input", () => {
    state.editorLibraryQuery = search.value;
    renderEditorLibrary();
    search.focus();
  });
  document.querySelectorAll("[data-editor-library-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editorLibraryType = button.dataset.editorLibraryType;
      state.editorLibraryCategoryId = null;
      state.editorLibraryQuery = "";
      search.value = "";
      renderEditorLibrary();
    });
  });
  document.getElementById("editorLibraryResults")?.addEventListener("scroll", () => {
    if (editorLibraryPreviewState) positionEditorLibraryPreview();
  }, {passive: true});
  window.addEventListener("resize", () => {
    if (editorLibraryPreviewState) positionEditorLibraryPreview();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideEditorLibraryPreview();
  });
}

function ensureEditorSlides() {
  if (state.editorSlides.length) return;
  const template = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];
  state.editorSlides = [
    {id: `slide-${Date.now()}-1`, title: "Untitled", isBlank: true, template: null, editable: true},
    {id: `slide-${Date.now()}-2`, title: "Flat image", isBlank: false, template, editable: false},
    {id: `slide-${Date.now()}-3`, title: "Editable figure", isBlank: false, template, editable: true},
  ];
  state.activeEditorSlideId = state.editorSlides[2].id;
}

function selectEditorSlide(slideId) {
  ensureEditorSlides();
  const slide = state.editorSlides.find((item) => item.id === slideId);
  if (!slide) return;
  state.activeEditorSlideId = slide.id;
  state.isEditorFrameSelected = false;
  state.selectedEditorSegmentId = null;
  state.selectedEditorSegmentType = null;
  state.isBlankEditor = slide.isBlank;
  if (slide.isBlank) {
    const canvasSize = slide.canvasSize;
    if (canvasSize) {
      state.blankCanvasPreset = canvasSize.preset || "custom";
      state.blankCanvasWidth = canvasSize.width || 10;
      state.blankCanvasHeight = canvasSize.height || 7;
      state.blankCanvasUnit = canvasSize.unit || "in";
      state.blankCanvasColor = canvasSize.color || "#FFFFFF";
      state.blankCanvasAspectLocked = canvasSize.locked ?? true;
      state.blankCanvasDraft = null;
      state.isEditingBlankCanvasSize = false;
    } else {
      resetBlankCanvasState();
    }
  }
  if (slide.template) {
    state.generatedResultTemplate = slide.template;
    state.currentEditorTemplate = slide.template;
  }
  renderEditorCanvas();
  setCanvasTool(state.canvasTool);
  renderEditorSlides();
}

function renderEditorSlides() {
  const list = document.getElementById("editorSlidesList");
  if (!list) return;
  ensureEditorSlides();
  list.innerHTML = "";
  state.editorSlides.forEach((slide, index) => {
    const card = document.createElement("article");
    const selected = slide.id === state.activeEditorSlideId;
    card.className = `editor-slide-card ${selected ? "active" : ""}`;
    card.dataset.slideId = slide.id;
    const preview = slide.isBlank
      ? '<span class="editor-slide-blank" aria-hidden="true"></span>'
      : `<img src="${slide.template?.image || ""}" alt="" />${slide.editable ? '<span class="editor-slide-avatar" aria-label="Edited by Sushrut Baporikar">SB</span>' : ""}`;
    card.innerHTML = `
      <label class="editor-slide-name">
        <strong>${index + 1}</strong>
        <input type="text" readonly aria-label="Slide ${index + 1} title" data-slide-title />
      </label>
      <button class="editor-slide-preview" type="button" data-slide-select>${preview}</button>
      <button class="editor-slide-more" type="button" aria-label="More options for slide ${index + 1}" aria-haspopup="menu" aria-expanded="false" data-slide-menu-trigger>
        <svg viewBox="0 0 16 4" aria-hidden="true"><circle cx="2" cy="2" r="2"/><circle cx="8" cy="2" r="2"/><circle cx="14" cy="2" r="2"/></svg>
      </button>
      <div class="editor-slide-menu" role="menu" hidden>
        <button type="button" role="menuitem" data-slide-action="rename">Rename</button>
        <button type="button" role="menuitem" data-slide-action="duplicate">Duplicate</button>
        <button type="button" role="menuitem" data-slide-action="delete">Delete</button>
      </div>
    `;
    const titleInput = card.querySelector("[data-slide-title]");
    const previewButton = card.querySelector("[data-slide-select]");
    const previewImage = card.querySelector(".editor-slide-preview img");
    if (titleInput) titleInput.value = slide.title;
    previewButton?.setAttribute("aria-label", `Select slide ${index + 1}: ${slide.title}`);
    if (previewImage) previewImage.alt = `${slide.title} preview`;
    list.appendChild(card);
  });
}

function bindEditorSlides() {
  const list = document.getElementById("editorSlidesList");
  const addButton = document.getElementById("editorSlidesAdd");
  const presentButton = document.getElementById("editorSlidesPresent");
  if (!list || !addButton || !presentButton) return;

  const closeMenus = () => {
    list.querySelectorAll(".editor-slide-menu").forEach((menu) => { menu.hidden = true; });
    list.querySelectorAll("[data-slide-menu-trigger]").forEach((button) => button.setAttribute("aria-expanded", "false"));
  };

  const beginRename = (card) => {
    const input = card?.querySelector("[data-slide-title]");
    if (!input) return;
    input.readOnly = false;
    input.focus();
    input.select();
  };

  addButton.addEventListener("click", () => {
    ensureEditorSlides();
    const newSlide = {id: `slide-${Date.now()}`, title: "Untitled", isBlank: true, template: null, editable: true};
    const activeIndex = state.editorSlides.findIndex((slide) => slide.id === state.activeEditorSlideId);
    state.editorSlides.splice(activeIndex + 1, 0, newSlide);
    selectEditorSlide(newSlide.id);
    window.setTimeout(() => beginRename(list.querySelector(`[data-slide-id="${newSlide.id}"]`)), 0);
  });

  presentButton.addEventListener("click", () => {
    const stage = document.getElementById("editorCanvasStage");
    stage?.requestFullscreen?.().catch(() => {});
  });

  list.addEventListener("click", (event) => {
    const card = event.target.closest(".editor-slide-card");
    if (!card) return;
    if (event.target.closest("[data-slide-select]")) {
      selectEditorSlide(card.dataset.slideId);
      return;
    }
    const trigger = event.target.closest("[data-slide-menu-trigger]");
    if (trigger) {
      event.stopPropagation();
      const menu = card.querySelector(".editor-slide-menu");
      const willOpen = menu.hidden;
      closeMenus();
      menu.hidden = !willOpen;
      trigger.setAttribute("aria-expanded", String(willOpen));
      return;
    }
    const actionButton = event.target.closest("[data-slide-action]");
    if (!actionButton) return;
    const slideIndex = state.editorSlides.findIndex((slide) => slide.id === card.dataset.slideId);
    const slide = state.editorSlides[slideIndex];
    if (!slide) return;
    if (actionButton.dataset.slideAction === "rename") beginRename(card);
    if (actionButton.dataset.slideAction === "duplicate") {
      const copy = {...slide, id: `slide-${Date.now()}`, title: `${slide.title} copy`};
      state.editorSlides.splice(slideIndex + 1, 0, copy);
      state.activeEditorSlideId = copy.id;
      renderEditorSlides();
    }
    if (actionButton.dataset.slideAction === "delete" && state.editorSlides.length > 1) {
      state.editorSlides.splice(slideIndex, 1);
      const replacement = state.editorSlides[Math.min(slideIndex, state.editorSlides.length - 1)];
      selectEditorSlide(replacement.id);
    }
    closeMenus();
  });

  list.addEventListener("dblclick", (event) => beginRename(event.target.closest(".editor-slide-card")));
  list.addEventListener("keydown", (event) => {
    const input = event.target.closest("[data-slide-title]");
    if (!input || event.key !== "Enter") return;
    event.preventDefault();
    input.blur();
  });
  list.addEventListener("focusout", (event) => {
    const input = event.target.closest("[data-slide-title]");
    if (!input || input.readOnly) return;
    const slide = state.editorSlides.find((item) => item.id === input.closest(".editor-slide-card")?.dataset.slideId);
    if (slide) slide.title = input.value.trim() || "Untitled";
    input.value = slide?.title || "Untitled";
    input.readOnly = true;
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest("#editorRightSlidesView")) closeMenus();
  });
}

function setEditorLeftPanelCollapsed(collapsed) {
  if (collapsed) hideEditorLibraryPreview();
  state.editorLeftPanelCollapsed = collapsed;
  document.getElementById("editorDesktopScreen")?.classList.toggle("editor-left-panel-collapsed", collapsed);
  const leftPanel = document.getElementById("editorLeftPanel");
  if (leftPanel) {
    if (collapsed) leftPanel.setAttribute("inert", "");
    else leftPanel.removeAttribute("inert");
    leftPanel.setAttribute("aria-hidden", String(collapsed));
  }
  ["editorLeftPanelCollapse", "editorLeftPanelOpen"].forEach((id) => {
    document.getElementById(id)?.setAttribute("aria-expanded", String(!collapsed));
  });
}

function bindCanvasToolbar() {
  const stage = document.getElementById("editorCanvasStage");
  const mediaShell = document.getElementById("editorCanvasMediaShell");
  const stageContent = document.getElementById("editorCanvasStageContent");
  const drawingLayer = document.getElementById("canvasDrawingLayer");
  const workspaceLayer = document.getElementById("canvasWorkspaceLayer");
  const importInput = document.getElementById("canvasImportInput");
  const shapeToolButton = document.getElementById("canvasShapeToolButton");
  const lineToolButton = document.getElementById("canvasLineToolButton");
  const tableToolButton = document.getElementById("canvasTableToolButton");
  const tableMenu = document.getElementById("canvasTableMenu");
  const tableGrid = document.getElementById("canvasTableSizeGrid");
  const tableLabel = document.getElementById("canvasTableSizeLabel");
  const chartToolButton = document.getElementById("canvasChartToolButton");
  const chartMenu = document.getElementById("canvasChartMenu");
  if (!stage || !mediaShell || !stageContent || !drawingLayer || !workspaceLayer) return;

  document.getElementById("editorUploadsAdd")?.addEventListener("click", () => importInput?.click());

  const closeToolMenus = () => {
    document.querySelectorAll(".canvas-tool-menu").forEach((menu) => {
      menu.hidden = true;
    });
    document.querySelectorAll("[data-canvas-menu-toggle]").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
    });
    if (tableMenu) tableMenu.hidden = true;
    tableToolButton?.setAttribute("aria-expanded", "false");
    if (chartMenu) chartMenu.hidden = true;
    chartToolButton?.setAttribute("aria-expanded", "false");
  };

  if (tableGrid && !tableGrid.children.length) {
    for (let row = 1; row <= 10; row += 1) {
      for (let column = 1; column <= 10; column += 1) {
        const cell = document.createElement("button");
        cell.type = "button";
        cell.dataset.tableRows = `${row}`;
        cell.dataset.tableColumns = `${column}`;
        cell.setAttribute("role", "gridcell");
        cell.setAttribute("aria-label", `${row} rows by ${column} columns`);
        const preview = () => {
          tableGrid.querySelectorAll("button").forEach((item) => {
            item.classList.toggle("preview", Number(item.dataset.tableRows) <= row && Number(item.dataset.tableColumns) <= column);
          });
          if (tableLabel) tableLabel.textContent = `${row} × ${column}`;
        };
        cell.addEventListener("mouseenter", preview);
        cell.addEventListener("focus", preview);
        cell.addEventListener("click", (event) => {
          event.stopPropagation();
          state.tableRows = row;
          state.tableColumns = column;
          closeToolMenus();
          setCanvasTool("table");
        });
        tableGrid.appendChild(cell);
      }
    }
    tableGrid.addEventListener("mouseleave", () => {
      tableGrid.querySelectorAll("button").forEach((item) => item.classList.remove("preview"));
      if (tableLabel) tableLabel.textContent = "Select table size";
    });
  }

  if (chartMenu && !chartMenu.children.length) {
    chartTypeDefinitions.forEach((definition) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "canvas-chart-option";
      button.dataset.chartType = definition.id;
      button.innerHTML = `<span class="canvas-chart-option-preview">${renderChartSvg({...createDefaultChartConfig(definition.id), title: "", subtitle: "", legend: "none", showValues: false}, 120, 78, true)}</span><strong>${definition.label}</strong>`;
      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeToolMenus();
        openChartEditor(definition.id);
      });
      button.addEventListener("keydown", (event) => {
        if (!['Enter', ' '].includes(event.key)) return;
        event.preventDefault();
        event.stopPropagation();
        closeToolMenus();
        openChartEditor(definition.id);
      });
      chartMenu.appendChild(button);
    });
  }

  const updateToolChoice = (type, option) => {
    showEditorLeftEditPanel();
    clearCanvasObjectSelection();
    clearEditorImageSelectionForCanvasObject();
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
    toolButton?.classList.toggle("is-line-glyph", !isShape && value === "line");
    toolButton?.setAttribute("data-tooltip", label);
    toolButton?.setAttribute("aria-label", label);
    document.querySelector(`[data-canvas-menu-toggle="${type}"]`)?.setAttribute("aria-label", `${label} options`);
    closeToolMenus();
    setCanvasTool(type);
  };

  document.querySelectorAll("[data-canvas-menu-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      showEditorLeftEditPanel();
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
    showEditorLeftEditPanel();
    const previousTable = selectedCanvasTable();
    document.querySelectorAll(".canvas-object.is-selected").forEach((item) => {
      item.classList.remove("is-selected");
    });
    object?.classList.add("is-selected");
    if (object) clearEditorImageSelectionForCanvasObject();
    if (!object?.classList.contains("canvas-table-object") || previousTable !== object) {
      document.querySelectorAll(".canvas-table-object th.is-selected, .canvas-table-object td.is-selected").forEach((cell) => {
        cell.classList.remove("is-selected");
      });
      state.selectedTableCell = null;
    }
    setCanvasTool(state.canvasTool === "table" ? "select" : state.canvasTool);
  };

  const clearObjectSelection = () => {
    showEditorLeftEditPanel();
    clearCanvasObjectSelection();
    setCanvasTool("select");
  };

  const pointInWorkspace = (event) => {
    const rect = workspaceLayer.getBoundingClientRect();
    const scale = state.zoom / 100;
    return {
      x: Math.min(workspaceLayer.offsetWidth, Math.max(0, (event.clientX - rect.left) / scale)),
      y: Math.min(workspaceLayer.offsetHeight, Math.max(0, (event.clientY - rect.top) / scale)),
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

  const positionFrame = (object, start, point) => {
    let width = Math.abs(point.x - start.x);
    let height = Math.abs(point.y - start.y);
    const ratio = frameRatioValue();
    if (height === 0 || width / Math.max(height, 1) > ratio) height = width / ratio;
    else width = height * ratio;
    const directionX = point.x < start.x ? -1 : 1;
    const directionY = point.y < start.y ? -1 : 1;
    object.style.left = `${Math.min(start.x, start.x + directionX * width)}px`;
    object.style.top = `${Math.min(start.y, start.y + directionY * height)}px`;
    object.style.width = `${width}px`;
    object.style.height = `${height}px`;
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
      showEditorLeftEditPanel();
      clearCanvasObjectSelection();
      clearEditorImageSelectionForCanvasObject();
      if (tool === "table") {
        setCanvasTool("select");
        const willOpen = tableMenu?.hidden ?? false;
        closeToolMenus();
        if (tableMenu && willOpen) {
          tableMenu.hidden = false;
          tableToolButton?.setAttribute("aria-expanded", "true");
          if (tableLabel) tableLabel.textContent = "Select table size";
        }
        return;
      }
      if (tool === "chart") {
        setCanvasTool("select");
        const willOpen = chartMenu?.hidden ?? false;
        closeToolMenus();
        if (chartMenu && willOpen) {
          chartMenu.hidden = false;
          chartToolButton?.setAttribute("aria-expanded", "true");
        }
        return;
      }
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
  let objectDragSession = null;
  let chartResizeSession = null;
  let chartRotateSession = null;
  let suppressTableClick = false;
  mediaShell.addEventListener("click", (event) => {
    if (!suppressTableClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressTableClick = false;
  }, true);
  mediaShell.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || state.canvasTool !== "table" || event.target.closest(".canvas-table-object")) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const start = pointInWorkspace(event);
    const table = createCanvasTable(state.tableRows, state.tableColumns);
    workspaceLayer.appendChild(table);
    const maxLeft = Math.max(0, workspaceLayer.offsetWidth - table.offsetWidth);
    const maxTop = Math.max(0, workspaceLayer.offsetHeight - table.offsetHeight);
    table.style.left = `${Math.max(0, Math.min(maxLeft, start.x - table.offsetWidth / 2))}px`;
    table.style.top = `${Math.max(0, Math.min(maxTop, start.y - table.offsetHeight / 2))}px`;
    selectObject(table);
    setCanvasTool("select");
    suppressTableClick = true;
    window.setTimeout(() => { suppressTableClick = false; }, 120);
  });

  mediaShell.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !["shape", "line", "pen", "text", "frame"].includes(state.canvasTool)) return;
    event.preventDefault();
    event.stopPropagation();
    const start = pointInWorkspace(event);

    if (state.canvasTool === "text") {
      const text = document.createElement("div");
      text.className = "canvas-object canvas-text-object is-selected";
      text.contentEditable = "true";
      text.spellcheck = true;
      text.style.left = `${start.x}px`;
      text.style.top = `${start.y}px`;
      applyTextAppearance(text);
      workspaceLayer.appendChild(text);
      selectObject(text);
      setCanvasTool("select");
      window.setTimeout(() => text.focus(), 0);
      return;
    }

    let object;
    if (state.canvasTool === "pen") {
      object = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      object.classList.add("canvas-object", "canvas-pen-object");
      applyPenAppearance(object);
      object.setAttribute("viewBox", `0 0 ${workspaceLayer.offsetWidth} ${workspaceLayer.offsetHeight}`);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M ${start.x} ${start.y}`);
      object.appendChild(path);
      workspaceLayer.appendChild(object);
      drawSession = {tool: "pen", object, path, points: [start], pointerId: event.pointerId};
    } else {
      object = document.createElement("div");
      if (state.canvasTool === "shape") {
        object.className = `canvas-object canvas-shape-object canvas-${state.canvasShape}-object`;
        applyShapeAppearance(object);
      } else if (state.canvasTool === "line") {
        object.className = `canvas-object canvas-line-object${state.canvasLine === "arrow" ? " canvas-arrow-object" : ""}`;
        applyLineAppearance(object);
      } else if (state.canvasTool === "frame") {
        object.className = "canvas-object canvas-frame-object";
        applyFrameAppearance(object);
      } else {
        object.className = `canvas-object canvas-${state.canvasTool}-object`;
      }
      workspaceLayer.appendChild(object);
      drawSession = {tool: state.canvasTool, object, start, pointerId: event.pointerId};
      if (state.canvasTool === "line") positionLine(object, start, start);
      else if (state.canvasTool === "frame") positionFrame(object, start, start);
      else positionBox(object, start, start);
    }
    mediaShell.setPointerCapture?.(event.pointerId);
  });

  mediaShell.addEventListener("pointermove", (event) => {
    if (!drawSession || event.pointerId !== drawSession.pointerId) return;
    const point = pointInWorkspace(event);
    if (drawSession.tool === "pen") {
      drawSession.points.push(point);
      const pathData = drawSession.points.map((item, index) => `${index ? "L" : "M"} ${item.x} ${item.y}`).join(" ");
      drawSession.path.setAttribute("d", pathData);
    } else if (drawSession.tool === "line") {
      positionLine(drawSession.object, drawSession.start, point, event.shiftKey);
    } else if (drawSession.tool === "frame") {
      positionFrame(drawSession.object, drawSession.start, point);
    } else {
      positionBox(drawSession.object, drawSession.start, point, event.shiftKey);
    }
  });

  const endDrawing = (event) => {
    if (!drawSession || event.pointerId !== drawSession.pointerId) return;
    mediaShell.releasePointerCapture?.(event.pointerId);
    const {object, tool, points = []} = drawSession;
    const width = parseFloat(object.style.width || "0");
    const height = parseFloat(object.style.height || "0");
    const tooSmall = tool === "pen" ? points.length < 2 : tool === "line" ? width < 4 : width < 4 || height < 4;
    if (tooSmall) object.remove();
    else selectObject(object);
    drawSession = null;
  };
  mediaShell.addEventListener("pointerup", endDrawing);
  mediaShell.addEventListener("pointercancel", endDrawing);

  workspaceLayer.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || state.canvasTool !== "select") return;
    const object = event.target.closest(".canvas-object");
    if (!object) return;
    event.preventDefault();
    event.stopPropagation();
    selectObject(object);

    const resizeHandle = event.target.closest("[data-chart-resize]");
    if (resizeHandle && object.classList.contains("canvas-chart-object")) {
      chartResizeSession = {
        pointerId: event.pointerId,
        object,
        direction: resizeHandle.dataset.chartResize,
        startX: event.clientX,
        startY: event.clientY,
        left: parseFloat(object.style.left || "0"),
        top: parseFloat(object.style.top || "0"),
        width: object.offsetWidth,
        height: object.offsetHeight,
      };
      object.classList.add("is-resizing");
      object.setPointerCapture?.(event.pointerId);
      return;
    }

    if (event.target.closest("[data-chart-rotate]") && object.classList.contains("canvas-chart-object")) {
      const rect = object.getBoundingClientRect();
      chartRotateSession = {
        pointerId: event.pointerId,
        object,
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
        startAngle: Math.atan2(event.clientY - (rect.top + rect.height / 2), event.clientX - (rect.left + rect.width / 2)),
        rotation: Number(object.dataset.chartRotation) || 0,
      };
      object.classList.add("is-rotating");
      object.setPointerCapture?.(event.pointerId);
      return;
    }

    objectDragSession = {
      pointerId: event.pointerId,
      object,
      startX: event.clientX,
      startY: event.clientY,
      left: parseFloat(object.style.left || "0"),
      top: parseFloat(object.style.top || "0"),
      penX: Number(object.dataset.penX) || 0,
      penY: Number(object.dataset.penY) || 0,
      moved: false,
    };
    object.setPointerCapture?.(event.pointerId);
  });

  const updateChartTransform = (event) => {
    const scale = state.zoom / 100;
    if (chartResizeSession) {
      event.preventDefault();
      const session = chartResizeSession;
      const deltaX = (event.clientX - session.startX) / scale;
      const deltaY = (event.clientY - session.startY) / scale;
      const west = session.direction.includes("w");
      const east = session.direction.includes("e");
      const north = session.direction.includes("n");
      const south = session.direction.includes("s");
      const width = Math.max(220, session.width + (east ? deltaX : west ? -deltaX : 0));
      const height = Math.max(160, session.height + (south ? deltaY : north ? -deltaY : 0));
      session.object.style.width = `${width}px`;
      session.object.style.height = `${height}px`;
      if (west) session.object.style.left = `${Math.max(0, session.left + session.width - width)}px`;
      if (north) session.object.style.top = `${Math.max(0, session.top + session.height - height)}px`;
      return true;
    }
    if (chartRotateSession) {
      event.preventDefault();
      const session = chartRotateSession;
      const angle = Math.atan2(event.clientY - session.centerY, event.clientX - session.centerX);
      let rotation = session.rotation + (angle - session.startAngle) * 180 / Math.PI;
      if (event.shiftKey) rotation = Math.round(rotation / 15) * 15;
      rotation = Math.round(rotation * 10) / 10;
      session.object.dataset.chartRotation = `${rotation}`;
      session.object.style.setProperty("--chart-rotation", `${rotation}deg`);
      syncChartSettingsPanel();
      return true;
    }
    return false;
  };

  window.addEventListener("pointermove", (event) => {
    if (chartResizeSession || chartRotateSession) updateChartTransform(event);
  }, true);

  window.addEventListener("pointermove", (event) => {
    if (chartResizeSession || chartRotateSession) return;
    const scale = state.zoom / 100;
    if (!objectDragSession || event.pointerId !== objectDragSession.pointerId) return;
    const deltaX = (event.clientX - objectDragSession.startX) / scale;
    const deltaY = (event.clientY - objectDragSession.startY) / scale;
    if (!objectDragSession.moved && Math.hypot(deltaX, deltaY) < 4) return;
    event.preventDefault();
    objectDragSession.moved = true;
    objectDragSession.object.classList.add("is-dragging");
    if (objectDragSession.object.classList.contains("canvas-pen-object")) {
      const x = objectDragSession.penX + deltaX;
      const y = objectDragSession.penY + deltaY;
      objectDragSession.object.dataset.penX = `${x}`;
      objectDragSession.object.dataset.penY = `${y}`;
      objectDragSession.object.style.setProperty("--pen-translate-x", `${x}px`);
      objectDragSession.object.style.setProperty("--pen-translate-y", `${y}px`);
      return;
    }
    const maxLeft = Math.max(0, workspaceLayer.offsetWidth - objectDragSession.object.offsetWidth);
    const maxTop = Math.max(0, workspaceLayer.offsetHeight - objectDragSession.object.offsetHeight);
    objectDragSession.object.style.left = `${Math.max(0, Math.min(maxLeft, objectDragSession.left + deltaX))}px`;
    objectDragSession.object.style.top = `${Math.max(0, Math.min(maxTop, objectDragSession.top + deltaY))}px`;
  }, true);

  const endChartTransform = () => {
    if (chartResizeSession) {
      const pointerId = chartResizeSession.pointerId;
      if (chartResizeSession.object.hasPointerCapture?.(pointerId)) chartResizeSession.object.releasePointerCapture(pointerId);
      chartResizeSession.object.classList.remove("is-resizing");
      chartResizeSession = null;
      suppressTableClick = true;
      window.setTimeout(() => { suppressTableClick = false; }, 0);
      return;
    }
    if (chartRotateSession) {
      const pointerId = chartRotateSession.pointerId;
      if (chartRotateSession.object.hasPointerCapture?.(pointerId)) chartRotateSession.object.releasePointerCapture(pointerId);
      chartRotateSession.object.classList.remove("is-rotating");
      chartRotateSession = null;
      suppressTableClick = true;
      window.setTimeout(() => { suppressTableClick = false; }, 0);
    }
  };
  window.addEventListener("pointerup", endChartTransform, true);
  window.addEventListener("pointercancel", endChartTransform, true);

  const endObjectDrag = (event) => {
    if (!objectDragSession || event.pointerId !== objectDragSession.pointerId) return;
    objectDragSession.object.releasePointerCapture?.(event.pointerId);
    objectDragSession.object.classList.remove("is-dragging");
    suppressTableClick = objectDragSession.moved;
    objectDragSession = null;
    if (suppressTableClick) window.setTimeout(() => { suppressTableClick = false; }, 0);
  };
  window.addEventListener("pointerup", endObjectDrag, true);
  window.addEventListener("pointercancel", endObjectDrag, true);

  const handleObjectClick = (event) => {
    if (state.canvasTool !== "select") return;
    const object = event.target.closest(".canvas-object");
    if (!object) return;
    if (object.classList.contains("canvas-table-object") && suppressTableClick) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    event.stopPropagation();
    selectObject(object);
    if (object.classList.contains("canvas-table-object")) {
      object.querySelectorAll("th.is-selected, td.is-selected").forEach((cell) => cell.classList.remove("is-selected"));
      const cell = event.target.closest("th, td");
      if (cell) {
        cell.classList.add("is-selected");
        state.selectedTableCell = {row: cell.parentElement.rowIndex, column: cell.cellIndex};
        cell.focus();
      } else {
        state.selectedTableCell = null;
      }
      setCanvasTool("select");
    }
  };
  drawingLayer.addEventListener("click", handleObjectClick);
  workspaceLayer.addEventListener("click", handleObjectClick);

  mediaShell.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || state.canvasTool !== "select" || event.target.closest(".canvas-object")) return;
    clearObjectSelection();
  });
  mediaShell.addEventListener("click", (event) => {
    if (state.canvasTool !== "select" || event.target.closest(".canvas-object")) return;
    clearObjectSelection();
  });

  importInput?.addEventListener("change", () => {
    const file = importInput.files?.[0];
    if (!file) {
      setCanvasTool("select");
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const asset = {
        id: `upload-${Date.now()}`,
        title: file.name,
        src: String(reader.result),
        kind: "uploaded",
      };
      state.editorUploads.unshift(asset);
      addUploadedAssetToCanvas(asset);
      if (state.editorLeftPanelView === "uploads") renderEditorUploads();
      importInput.value = "";
    }, {once: true});
    reader.readAsDataURL(file);
  });

  setCanvasTool(state.canvasTool);
}

function bindCanvasDeleteShortcut() {
  document.addEventListener("keydown", (event) => {
    if (!["Backspace", "Delete"].includes(event.key) || event.defaultPrevented || event.isComposing) return;
    if (state.desktop.activeScreen !== "editor-desktop") return;

    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest("input, textarea, select, [contenteditable='true']")) return;

    const selectedObjects = Array.from(document.querySelectorAll(".canvas-object.is-selected"));
    const generatedImageSelected = state.isEditorFrameSelected && !state.isBlankEditor;
    if (!selectedObjects.length && !generatedImageSelected) return;

    event.preventDefault();
    selectedObjects.forEach((object) => object.remove());
    clearCanvasObjectSelection();

    if (generatedImageSelected) {
      state.isBlankEditor = true;
      state.isEditorFrameSelected = false;
      state.selectedEditorSegmentId = null;
      state.selectedEditorSegmentType = null;
      renderEditorCanvas();
    } else {
      clearEditorImageSelectionForCanvasObject();
      renderEditorInspector();
    }

    setCanvasTool("select");
  });
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
  syncConversationPrompt();
  syncMobileConversationPrompt();

  if (destination === "editor-desktop") {
    state.editorChatSessionPrompt = state.prompt;
    state.editorRightPanelView = "chat";
    state.isEditorFrameSelected = false;
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = null;
    state.imageRotation = 0;
    state.imageOffsetX = 0;
    state.imageOffsetY = 0;
    state.canvasPanX = 0;
    state.canvasPanY = 0;
    state.zoom = 100;
    renderHistory();
    startImageGeneration();
    setScreen(destination);
    setEditorPanelView("right", "chat");
    showEditorLeftEditPanel();
    setCanvasTool("select");
    renderEditorChatHistory({reset: true});
    return;
  }

  setScreen(destination);
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
        state.imageRotation = 0;
        state.imageOffsetX = 0;
        state.imageOffsetY = 0;
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
    handlePromptSubmit("editor-desktop");
  });

  document.getElementById("startFromScratchButton")?.addEventListener("click", () => {
    resetBlankCanvasState();
    ensureEditorSlides();
    const blankSlide = state.editorSlides.find((slide) => slide.isBlank);
    if (blankSlide) {
      state.activeEditorSlideId = blankSlide.id;
      blankSlide.canvasSize = {
        preset: state.blankCanvasPreset,
        width: state.blankCanvasWidth,
        height: state.blankCanvasHeight,
        unit: state.blankCanvasUnit,
        color: state.blankCanvasColor,
        locked: state.blankCanvasAspectLocked,
      };
    }
    state.isBlankEditor = true;
    state.zoom = 100;
    state.canvasPanX = 0;
    state.canvasPanY = 0;
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = null;
    state.isEditorFrameSelected = false;
    state.imageRotation = 0;
    state.imageOffsetX = 0;
    state.imageOffsetY = 0;
    document.getElementById("canvasWorkspaceLayer")?.replaceChildren();
    document.getElementById("canvasDrawingLayer")?.replaceChildren();
    renderHistory();
    setScreen("editor-desktop");
    showEditorLeftEditPanel();
    setCanvasTool("select");
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
  const colorPicker = document.getElementById("editorCanvasColorPicker");
  const setBackground = (color, activeControl) => {
    state.editorBackground = color || "#F5F7F9";
    document.querySelectorAll(".editor-bg-swatch, .editor-bg-custom-swatch").forEach((swatch) => {
      swatch.classList.toggle("active", swatch === activeControl);
    });
    if (colorPicker && activeControl !== colorPicker.parentElement) colorPicker.value = state.editorBackground;
    renderEditorCanvas();
  };

  document.querySelectorAll(".editor-bg-swatch").forEach((button) => {
    button.addEventListener("click", () => {
      setBackground(button.dataset.color, button);
    });
  });

  colorPicker?.addEventListener("input", () => {
    setBackground(colorPicker.value, colorPicker.parentElement);
  });
}

const blankCanvasUnitFactors = {px: 1, in: 96, cm: 96 / 2.54};

function currentBlankCanvasDraft() {
  if (!state.blankCanvasDraft) {
    state.blankCanvasDraft = {
      preset: state.blankCanvasPreset,
      width: state.blankCanvasWidth,
      height: state.blankCanvasHeight,
      unit: state.blankCanvasUnit,
      locked: state.blankCanvasAspectLocked,
      ratio: state.blankCanvasWidth / state.blankCanvasHeight,
      color: state.blankCanvasColor,
    };
  }
  return state.blankCanvasDraft;
}

function syncBlankCanvasSizeControls() {
  const draft = currentBlankCanvasDraft();
  const preset = document.getElementById("editorCanvasPreset");
  const width = document.getElementById("editorCanvasWidth");
  const height = document.getElementById("editorCanvasHeight");
  const unit = document.getElementById("editorCanvasUnit");
  const lock = document.getElementById("editorCanvasAspectLock");
  const color = document.getElementById("editorBlankCanvasColor");
  const colorValue = document.getElementById("editorBlankCanvasColorValue");
  const colorControl = color?.closest(".editor-canvas-color-control");
  if (preset) preset.value = draft.preset;
  if (width) width.value = formatBlankCanvasDimension(draft.width);
  if (height) height.value = formatBlankCanvasDimension(draft.height);
  if (unit) unit.value = draft.unit;
  if (lock) {
    lock.classList.toggle("active", draft.locked);
    lock.setAttribute("aria-pressed", String(draft.locked));
    lock.setAttribute("aria-label", draft.locked ? "Unlock canvas aspect ratio" : "Lock canvas aspect ratio");
  }
  if (color) color.value = draft.color;
  if (colorValue) colorValue.textContent = draft.color.toUpperCase();
  colorControl?.style.setProperty("--blank-canvas-picker-color", draft.color);
  if (state.isEditingBlankCanvasSize) applyBlankCanvasAppearance(draft);
}

function closeBlankCanvasSizeEditor() {
  state.isEditingBlankCanvasSize = false;
  state.blankCanvasDraft = null;
  applyBlankCanvasAppearance();
  setCanvasTool("select");
}

function applyBlankCanvasDraft({applyToAll = false} = {}) {
  const draft = currentBlankCanvasDraft();
  state.blankCanvasPreset = draft.preset;
  state.blankCanvasWidth = Math.max(0.1, Number(draft.width) || 10);
  state.blankCanvasHeight = Math.max(0.1, Number(draft.height) || 7);
  state.blankCanvasUnit = draft.unit;
  state.blankCanvasAspectLocked = draft.locked;
  state.blankCanvasColor = draft.color;
  const activeSlide = state.editorSlides.find((slide) => slide.id === state.activeEditorSlideId);
  if (activeSlide?.isBlank) {
    activeSlide.canvasSize = {
      preset: state.blankCanvasPreset,
      width: state.blankCanvasWidth,
      height: state.blankCanvasHeight,
      unit: state.blankCanvasUnit,
      color: state.blankCanvasColor,
      locked: state.blankCanvasAspectLocked,
    };
  }
  if (applyToAll) {
    state.editorSlides.forEach((slide) => {
      slide.canvasSize = {
        preset: state.blankCanvasPreset,
        width: state.blankCanvasWidth,
        height: state.blankCanvasHeight,
        unit: state.blankCanvasUnit,
        color: state.blankCanvasColor,
        locked: state.blankCanvasAspectLocked,
      };
    });
  }
  closeBlankCanvasSizeEditor();
  renderEditorCanvas();
}

function bindBlankCanvasDimensions() {
  const dimensionButton = document.getElementById("editorBlankCanvasDimensions");
  const preset = document.getElementById("editorCanvasPreset");
  const width = document.getElementById("editorCanvasWidth");
  const height = document.getElementById("editorCanvasHeight");
  const unit = document.getElementById("editorCanvasUnit");
  const lock = document.getElementById("editorCanvasAspectLock");
  const color = document.getElementById("editorBlankCanvasColor");

  dimensionButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!state.isBlankEditor) return;
    clearCanvasObjectSelection();
    clearEditorImageSelectionForCanvasObject();
    state.isEditingBlankCanvasSize = true;
    state.blankCanvasDraft = null;
    showEditorLeftEditPanel();
    setCanvasTool("select");
    syncBlankCanvasSizeControls();
  });

  preset?.addEventListener("change", () => {
    const draft = currentBlankCanvasDraft();
    draft.preset = preset.value;
    const dimensions = blankCanvasPresetDimensions[preset.value];
    if (dimensions) {
      draft.width = dimensions.width;
      draft.height = dimensions.height;
      draft.ratio = dimensions.width / dimensions.height;
    }
    syncBlankCanvasSizeControls();
  });

  const updateDimension = (source) => {
    const draft = currentBlankCanvasDraft();
    const nextValue = Math.max(0.1, Number(source === "width" ? width?.value : height?.value) || 0.1);
    if (source === "width") {
      draft.width = nextValue;
      if (draft.locked) draft.height = nextValue / draft.ratio;
    } else {
      draft.height = nextValue;
      if (draft.locked) draft.width = nextValue * draft.ratio;
    }
    draft.preset = "custom";
    if (!draft.locked) draft.ratio = draft.width / draft.height;
    syncBlankCanvasSizeControls();
  };
  width?.addEventListener("input", () => updateDimension("width"));
  height?.addEventListener("input", () => updateDimension("height"));

  unit?.addEventListener("change", () => {
    const draft = currentBlankCanvasDraft();
    const fromFactor = blankCanvasUnitFactors[draft.unit] || 1;
    const toFactor = blankCanvasUnitFactors[unit.value] || 1;
    draft.width = draft.width * fromFactor / toFactor;
    draft.height = draft.height * fromFactor / toFactor;
    draft.unit = unit.value;
    draft.preset = "custom";
    syncBlankCanvasSizeControls();
  });

  lock?.addEventListener("click", () => {
    const draft = currentBlankCanvasDraft();
    draft.locked = !draft.locked;
    draft.ratio = draft.width / draft.height;
    syncBlankCanvasSizeControls();
  });

  color?.addEventListener("input", () => {
    const draft = currentBlankCanvasDraft();
    draft.color = color.value.toUpperCase();
    syncBlankCanvasSizeControls();
  });

  document.getElementById("editorCanvasSizeReset")?.addEventListener("click", () => {
    state.blankCanvasDraft = {
      preset: "10:7",
      width: 10,
      height: 7,
      unit: "in",
      locked: true,
      ratio: 10 / 7,
      color: "#FFFFFF",
    };
    syncBlankCanvasSizeControls();
  });
  document.getElementById("editorCanvasSizeApply")?.addEventListener("click", () => applyBlankCanvasDraft());
  document.getElementById("editorCanvasSizeApplyAll")?.addEventListener("click", () => applyBlankCanvasDraft({applyToAll: true}));
  document.getElementById("editorCanvasSizeCancel")?.addEventListener("click", closeBlankCanvasSizeEditor);

  window.addEventListener("resize", () => {
    if (state.isBlankEditor && document.getElementById("editorDesktopScreen")?.classList.contains("active")) {
      applyBlankCanvasAppearance(state.isEditingBlankCanvasSize ? currentBlankCanvasDraft() : state);
    }
  });
}

function bindEditorShapeSettings() {
  const updateSelectedShape = () => {
    document.querySelectorAll(".canvas-shape-object.is-selected").forEach(applyShapeAppearance);
    syncShapeSettingsPanel();
  };

  document.querySelectorAll("[data-shape-fill]").forEach((button) => {
    button.addEventListener("click", () => {
      state.shapeFill = button.dataset.shapeFill;
      state.shapeFillCustom = false;
      updateSelectedShape();
    });
  });
  document.querySelectorAll("[data-shape-stroke]").forEach((button) => {
    button.addEventListener("click", () => {
      state.shapeStroke = button.dataset.shapeStroke;
      state.shapeStrokeCustom = false;
      updateSelectedShape();
    });
  });
  document.querySelectorAll("[data-shape-width]").forEach((button) => {
    button.addEventListener("click", () => {
      state.shapeStrokeWidth = Number(button.dataset.shapeWidth);
      updateSelectedShape();
    });
  });
  document.querySelectorAll("[data-shape-style]").forEach((button) => {
    button.addEventListener("click", () => {
      state.shapeStrokeStyle = button.dataset.shapeStyle;
      updateSelectedShape();
    });
  });
  document.querySelectorAll("[data-shape-edges]").forEach((button) => {
    button.addEventListener("click", () => {
      state.shapeEdges = button.dataset.shapeEdges;
      updateSelectedShape();
    });
  });

  const fillPicker = document.getElementById("editorShapeFillPicker");
  fillPicker?.addEventListener("input", () => {
    state.shapeFill = fillPicker.value;
    state.shapeFillCustom = true;
    updateSelectedShape();
  });
  const strokePicker = document.getElementById("editorShapeStrokePicker");
  strokePicker?.addEventListener("input", () => {
    state.shapeStroke = strokePicker.value;
    state.shapeStrokeCustom = true;
    updateSelectedShape();
  });
  document.getElementById("editorShapeOpacity")?.addEventListener("input", (event) => {
    state.shapeOpacity = Number(event.target.value);
    updateSelectedShape();
  });

  syncShapeSettingsPanel();
}

function bindEditorLineSettings() {
  const updateSelectedLine = () => {
    document.querySelectorAll(".canvas-line-object.is-selected").forEach(applyLineAppearance);
    syncLineSettingsPanel();
  };

  document.querySelectorAll("[data-line-stroke]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lineStroke = button.dataset.lineStroke;
      state.lineStrokeCustom = false;
      updateSelectedLine();
    });
  });
  document.querySelectorAll("[data-line-width]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lineStrokeWidth = Number(button.dataset.lineWidth);
      updateSelectedLine();
    });
  });
  document.querySelectorAll("[data-line-style]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lineStrokeStyle = button.dataset.lineStyle;
      updateSelectedLine();
    });
  });
  document.querySelectorAll("[data-line-edges]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lineEdges = button.dataset.lineEdges;
      updateSelectedLine();
    });
  });
  document.querySelectorAll("[data-arrow-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.arrowType = button.dataset.arrowType;
      updateSelectedLine();
    });
  });

  const strokePicker = document.getElementById("editorLineStrokePicker");
  strokePicker?.addEventListener("input", () => {
    state.lineStroke = strokePicker.value;
    state.lineStrokeCustom = true;
    updateSelectedLine();
  });
  document.getElementById("editorArrowStarthead")?.addEventListener("change", (event) => {
    state.arrowStarthead = event.target.value;
    updateSelectedLine();
  });
  document.getElementById("editorArrowEndhead")?.addEventListener("change", (event) => {
    state.arrowEndhead = event.target.value;
    updateSelectedLine();
  });
  document.getElementById("editorLineOpacity")?.addEventListener("input", (event) => {
    state.lineOpacity = Number(event.target.value);
    updateSelectedLine();
  });

  syncLineSettingsPanel();
}

function bindEditorPenSettings() {
  const updateSelectedPen = () => {
    document.querySelectorAll(".canvas-pen-object.is-selected").forEach(applyPenAppearance);
    syncPenSettingsPanel();
  };
  document.querySelectorAll("[data-pen-stroke]").forEach((button) => {
    button.addEventListener("click", () => {
      state.penStroke = button.dataset.penStroke;
      state.penStrokeCustom = false;
      updateSelectedPen();
    });
  });
  document.querySelectorAll("[data-pen-width]").forEach((button) => {
    button.addEventListener("click", () => {
      state.penStrokeWidth = Number(button.dataset.penWidth);
      updateSelectedPen();
    });
  });
  const strokePicker = document.getElementById("editorPenStrokePicker");
  strokePicker?.addEventListener("input", () => {
    state.penStroke = strokePicker.value;
    state.penStrokeCustom = true;
    updateSelectedPen();
  });
  document.getElementById("editorPenOpacity")?.addEventListener("input", (event) => {
    state.penOpacity = Number(event.target.value);
    updateSelectedPen();
  });
  syncPenSettingsPanel();
}

function bindEditorTextSettings() {
  const updateSelectedText = () => {
    document.querySelectorAll(".canvas-text-object.is-selected").forEach(applyTextAppearance);
    syncTextSettingsPanel();
  };
  document.getElementById("editorTextTypography")?.addEventListener("change", (event) => {
    state.textTypography = Number(event.target.value);
    updateSelectedText();
  });
  document.querySelectorAll("[data-text-align]").forEach((button) => {
    button.addEventListener("click", () => {
      state.textAlign = button.dataset.textAlign;
      updateSelectedText();
    });
  });
  document.querySelectorAll("[data-text-stroke]").forEach((button) => {
    button.addEventListener("click", () => {
      state.textStroke = button.dataset.textStroke;
      state.textStrokeCustom = false;
      updateSelectedText();
    });
  });
  const strokePicker = document.getElementById("editorTextStrokePicker");
  strokePicker?.addEventListener("input", () => {
    state.textStroke = strokePicker.value;
    state.textStrokeCustom = true;
    updateSelectedText();
  });
  document.getElementById("editorTextOpacity")?.addEventListener("input", (event) => {
    state.textOpacity = Number(event.target.value);
    updateSelectedText();
  });
  syncTextSettingsPanel();
}

function bindEditorFrameSettings() {
  const updateSelectedFrame = (resize = false) => {
    document.querySelectorAll(".canvas-frame-object.is-selected").forEach((object) => applyFrameAppearance(object, resize));
    syncFrameSettingsPanel();
  };
  document.querySelectorAll("[data-frame-ratio]").forEach((button) => {
    button.addEventListener("click", () => {
      state.frameRatio = button.dataset.frameRatio;
      updateSelectedFrame(true);
    });
  });
  document.getElementById("editorFrameOpacity")?.addEventListener("input", (event) => {
    state.frameOpacity = Number(event.target.value);
    updateSelectedFrame();
  });
  syncFrameSettingsPanel();
}

function bindEditorTableSettings() {
  const table = () => selectedCanvasTable();
  const targets = () => {
    const selectedCell = selectedCanvasTableCell();
    return selectedCell ? [selectedCell] : [...(table()?.querySelectorAll("th, td") || [])];
  };
  const updateWholeTable = () => {
    applyTableAppearance(table());
    syncTableSettingsPanel();
  };
  const updateText = () => {
    targets().forEach(applyTableTextAppearance);
    syncTableSettingsPanel();
  };
  const clearCellSelection = () => {
    table()?.querySelectorAll("th.is-selected, td.is-selected").forEach((cell) => cell.classList.remove("is-selected"));
    state.selectedTableCell = null;
    syncTableSettingsPanel();
  };
  document.getElementById("editorTableContext")?.addEventListener("click", () => {
    if (selectedCanvasTableCell()) clearCellSelection();
  });
  document.getElementById("editorTableContext")?.addEventListener("keydown", (event) => {
    if (selectedCanvasTableCell() && ["Enter", " "].includes(event.key)) {
      event.preventDefault();
      clearCellSelection();
    }
  });

  document.querySelectorAll("[data-table-style]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tableStyle = button.dataset.tableStyle;
      const presets = {
        plain: ["#EDF3FF", "#FFFFFF", "#BCC7DC"],
        minimal: ["#FFFFFF", "#FFFFFF", "#D8E0EE"],
        blue: ["#EDF3FF", "#FFFFFF", "#8AABDF"],
        navy: ["#051E57", "#FFFFFF", "#D8E0EE"],
      };
      [state.tableHeaderFill, state.tableBodyFill, state.tableOutlineColor] = presets[state.tableStyle];
      updateWholeTable();
    });
  });
  document.getElementById("editorTableReset")?.addEventListener("click", () => {
    Object.assign(state, {tableStyle: "plain", tableAlternating: false, tableHeaderFill: "#EDF3FF", tableBodyFill: "#FFFFFF", tableOutlineColor: "#BCC7DC", tableOutlineWidth: 1, tableOutlineDash: 0, tableOutlineMode: "all", tableFont: "IBM Plex Sans", tableFontSize: 14, tableTextColor: "#13161B", tableLineHeight: 1.15, tableAlign: "left", tableVerticalAlign: "top", tableListStyle: "none", tableBold: false, tableItalic: false, tableUnderline: false, tableTransparency: 0});
    updateWholeTable();
  });
  document.getElementById("editorTableAlternating")?.addEventListener("change", (event) => {
    state.tableAlternating = event.target.checked;
    updateWholeTable();
  });
  document.getElementById("editorTableAddRow")?.addEventListener("click", () => {
    const body = table()?.querySelector("tbody");
    if (!body) return;
    const row = document.createElement("tr");
    const columns = body.rows[0]?.cells.length || state.tableColumns;
    for (let index = 0; index < columns; index += 1) {
      const cell = document.createElement("td");
      cell.contentEditable = "true";
      cell.textContent = `Cell ${body.rows.length}, ${index + 1}`;
      row.appendChild(cell);
    }
    body.appendChild(row);
    table().dataset.rows = `${body.rows.length}`;
    updateWholeTable();
  });
  document.getElementById("editorTableAddColumn")?.addEventListener("click", () => {
    const rows = table()?.querySelectorAll("tr");
    if (!rows?.length) return;
    rows.forEach((row, rowIndex) => {
      const cell = document.createElement(rowIndex === 0 ? "th" : "td");
      cell.contentEditable = "true";
      cell.textContent = rowIndex === 0 ? `Heading ${row.cells.length + 1}` : `Cell ${rowIndex}, ${row.cells.length + 1}`;
      row.appendChild(cell);
    });
    table().dataset.columns = `${rows[0].cells.length}`;
    table().style.width = `${Math.max(180, rows[0].cells.length * 88)}px`;
    updateWholeTable();
  });

  const wholeInputs = {
    editorTableHeaderFill: ["tableHeaderFill", false], editorTableBodyFill: ["tableBodyFill", false], editorTableOutlineColor: ["tableOutlineColor", false],
    editorTableOutlineWidth: ["tableOutlineWidth", true], editorTableOutlineDash: ["tableOutlineDash", true], editorTableTransparency: ["tableTransparency", true],
  };
  Object.entries(wholeInputs).forEach(([id, [key, numeric]]) => {
    document.getElementById(id)?.addEventListener("input", (event) => {
      state[key] = numeric ? Number(event.target.value) : event.target.value;
      updateTableControlOutput(event.target);
      updateWholeTable();
    });
  });
  document.querySelectorAll("[data-table-outline]").forEach((button) => button.addEventListener("click", () => { state.tableOutlineMode = button.dataset.tableOutline; updateWholeTable(); }));

  const cellInputs = {
    editorTableCellFill: ["cellFill", "backgroundColor", false], editorTableCellOutline: ["cellOutline", "borderColor", false],
    editorTableCellOutlineWidth: ["cellOutlineWidth", "borderWidth", true], editorTableCellOutlineDash: ["cellOutlineDash", "borderStyle", true],
  };
  Object.entries(cellInputs).forEach(([id, [dataKey, styleKey, numeric]]) => {
    document.getElementById(id)?.addEventListener("input", (event) => {
      const cell = selectedCanvasTableCell();
      if (!cell) return;
      const value = numeric ? Number(event.target.value) : event.target.value;
      cell.dataset[dataKey] = `${value}`;
      if (styleKey === "borderWidth") cell.style[styleKey] = `${value}px`;
      else if (styleKey === "borderStyle") cell.style[styleKey] = tableDashStyle(value);
      else cell.style[styleKey] = value;
      updateTableControlOutput(event.target);
    });
  });

  document.getElementById("editorTableFont")?.addEventListener("change", (event) => { state.tableFont = event.target.value; updateText(); });
  document.getElementById("editorTableLineHeight")?.addEventListener("change", (event) => { state.tableLineHeight = Number(event.target.value); updateText(); });
  document.getElementById("editorTableTextColor")?.addEventListener("input", (event) => { state.tableTextColor = event.target.value; updateTableControlOutput(event.target); updateText(); });
  document.querySelectorAll("[data-table-font-step]").forEach((button) => button.addEventListener("click", () => { state.tableFontSize = Math.max(8, Math.min(72, state.tableFontSize + Number(button.dataset.tableFontStep))); updateText(); }));
  document.querySelectorAll("[data-table-align]").forEach((button) => button.addEventListener("click", () => { state.tableAlign = button.dataset.tableAlign; updateText(); }));
  document.querySelectorAll("[data-table-valign]").forEach((button) => button.addEventListener("click", () => { state.tableVerticalAlign = button.dataset.tableValign; updateText(); }));
  document.querySelectorAll("[data-table-list]").forEach((button) => button.addEventListener("click", () => { state.tableListStyle = button.dataset.tableList; updateText(); }));
  document.querySelectorAll("[data-table-decoration]").forEach((button) => button.addEventListener("click", () => {
    const key = {bold: "tableBold", italic: "tableItalic", underline: "tableUnderline"}[button.dataset.tableDecoration];
    state[key] = !state[key];
    updateText();
  }));
}

function bindEditorImageSettings() {
  const setRotation = (value) => {
    const rotation = Number(value);
    if (!Number.isFinite(rotation)) return;
    state.imageRotation = Math.max(-180, Math.min(180, rotation));
    updateCanvasTransform();
  };

  const updateImageDimension = (dimension, value) => {
    const factor = imageUnitFactors[state.imageUnits] || 1;
    const nextPixels = Number(value) * factor;
    if (!Number.isFinite(nextPixels) || nextPixels <= 0) return;
    const previousWidth = state.imageWidth || 1;
    const previousHeight = state.imageHeight || 1;
    const ratio = previousWidth / previousHeight;
    if (dimension === "width") {
      state.imageWidth = nextPixels;
      if (state.imageAspectLocked) state.imageHeight = nextPixels / ratio;
    } else {
      state.imageHeight = nextPixels;
      if (state.imageAspectLocked) state.imageWidth = nextPixels * ratio;
    }
    applyImageAppearance();
    syncEditorImageTransformControls();
  };

  document.getElementById("editorImagePromptToggle")?.addEventListener("click", () => {
    state.imagePromptExpanded = !state.imagePromptExpanded;
    syncImageSettingsPanel();
  });
  document.getElementById("editorImagePromptCopy")?.addEventListener("click", async (event) => {
    await navigator.clipboard?.writeText(currentImagePrompt());
    event.currentTarget.setAttribute("aria-label", "Prompt copied");
    window.setTimeout(() => event.currentTarget.setAttribute("aria-label", "Copy image prompt"), 1200);
  });
  document.getElementById("editorImageOpacity")?.addEventListener("input", (event) => {
    state.imageOpacity = Number(event.target.value);
    applyImageAppearance();
  });
  document.querySelectorAll("[data-image-layer-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.imageLayerAction;
      if (action === "back") state.imageLayer = 0;
      if (action === "backward") state.imageLayer = Math.max(0, state.imageLayer - 1);
      if (action === "forward") state.imageLayer = Math.min(4, state.imageLayer + 1);
      if (action === "front") state.imageLayer = 4;
      applyImageAppearance();
    });
  });
  document.querySelectorAll("[data-image-flip]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.imageFlip === "horizontal") state.imageFlipX *= -1;
      else state.imageFlipY *= -1;
      updateCanvasTransform();
    });
  });
  document.getElementById("editorImageRotation")?.addEventListener("input", (event) => setRotation(event.target.value));
  document.getElementById("editorImageRotationSlider")?.addEventListener("input", (event) => setRotation(event.target.value));
  document.getElementById("editorImageUnits")?.addEventListener("change", (event) => {
    state.imageUnits = event.target.value;
    syncEditorImageTransformControls();
  });
  document.getElementById("editorImageWidth")?.addEventListener("input", (event) => updateImageDimension("width", event.target.value));
  document.getElementById("editorImageHeight")?.addEventListener("input", (event) => updateImageDimension("height", event.target.value));
  document.getElementById("editorImageAspectLock")?.addEventListener("click", () => {
    state.imageAspectLocked = !state.imageAspectLocked;
    syncEditorImageTransformControls();
  });
  document.getElementById("editorCanvasImage")?.addEventListener("load", () => {
    if (!state.imageWidth || !state.imageHeight) {
      const image = document.getElementById("editorCanvasImage");
      state.imageWidth = image?.getBoundingClientRect().width || image?.naturalWidth || null;
      state.imageHeight = image?.getBoundingClientRect().height || image?.naturalHeight || null;
    }
    applyImageAppearance();
    syncEditorImageTransformControls();
  });

  syncImageSettingsPanel();
}

function bindEditorSegmentSettings() {
  const updateStyle = (change) => {
    const selection = currentEditorSegmentStyle();
    if (!selection) return;
    change(selection.style, selection);
    syncEditorSegmentSettingsPanel();
  };

  document.getElementById("editorSegmentFillColor")?.addEventListener("input", (event) => {
    updateStyle((style) => {
      style.fill = event.target.value.toUpperCase();
    });
  });
  document.getElementById("editorSegmentStrokeToggle")?.addEventListener("click", () => {
    updateStyle((style) => {
      style.stroke = style.stroke === "transparent" ? "#13161B" : "transparent";
    });
  });
  [
    ["editorSegmentStrokeWidth", "strokeWidth"],
    ["editorSegmentStrokeOpacity", "strokeOpacity"],
    ["editorSegmentBorderDash", "borderDash"],
    ["editorSegmentOpacity", "opacity"],
  ].forEach(([id, property]) => {
    document.getElementById(id)?.addEventListener("input", (event) => {
      updateStyle((style) => {
        style[property] = Number(event.target.value);
      });
    });
  });

  document.getElementById("editorSegmentTextValue")?.addEventListener("input", (event) => {
    updateStyle((style, selection) => {
      style.text = event.target.value;
      const inspectorItem = Array.from(document.querySelectorAll(".editor-object-item"))
        .find((item) => item.dataset.editorObjectId === selection.region.id);
      const description = inspectorItem?.querySelector(".editor-object-description");
      if (description) description.textContent = style.text;
    });
  });
  document.getElementById("editorSegmentFontFamily")?.addEventListener("change", (event) => {
    updateStyle((style) => {
      style.fontFamily = event.target.value;
    });
  });
  document.getElementById("editorSegmentFontWeight")?.addEventListener("change", (event) => {
    updateStyle((style) => {
      style.fontWeight = Number(event.target.value);
    });
  });
  document.getElementById("editorSegmentFontSize")?.addEventListener("input", (event) => {
    updateStyle((style) => {
      style.fontSize = Math.max(8, Math.min(96, Number(event.target.value) || 8));
    });
  });
  document.getElementById("editorSegmentTextColor")?.addEventListener("input", (event) => {
    updateStyle((style) => {
      style.textColor = event.target.value.toUpperCase();
    });
  });
  document.getElementById("editorSegmentItalic")?.addEventListener("click", () => {
    updateStyle((style) => {
      style.italic = !style.italic;
    });
  });
  document.getElementById("editorSegmentUnderline")?.addEventListener("click", () => {
    updateStyle((style) => {
      style.underline = !style.underline;
    });
  });
}

function bindEditorInspector() {
  document.getElementById("editorInspectorPromptToggle")?.addEventListener("click", () => {
    state.editorInspectorPromptExpanded = !state.editorInspectorPromptExpanded;
    renderEditorInspector();
  });

  document.getElementById("editorInspectorPromptEdit")?.addEventListener("click", () => {
    const input = document.getElementById("editorChatPrompt");
    setEditorPanelView("right", "chat");
    if (!input) return;
    input.value = currentInspectorPrompt();
    toggleSubmitStates();
    window.setTimeout(() => {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }, 0);
  });

  document.getElementById("editorSegmentBack")?.addEventListener("click", (event) => {
    event.stopPropagation();
    clearEditorSegmentSelection();
    document.getElementById("editorRightEditTab")?.focus();
  });
}

function bindEditorExportMenu() {
  const wrap = document.getElementById("editorExportWrap");
  const trigger = document.getElementById("editorExportTrigger");
  const menu = document.getElementById("editorExportMenu");
  const certificate = document.getElementById("editorExportCertificate");
  const download = document.getElementById("editorExportDownload");
  if (!wrap || !trigger || !menu) return;

  const setOpen = (open) => {
    if (open) {
      const shareMenu = document.getElementById("editorShareMenu");
      const shareTrigger = document.getElementById("editorShareTrigger");
      if (shareMenu) shareMenu.hidden = true;
      shareTrigger?.setAttribute("aria-expanded", "false");
    }
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", String(open));
  };

  const selectRadio = (selector, selected) => {
    menu.querySelectorAll(selector).forEach((option) => {
      const isSelected = option === selected;
      option.classList.toggle("selected", isSelected);
      option.setAttribute("aria-checked", String(isSelected));
    });
  };

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(menu.hidden);
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    const format = event.target.closest("[data-editor-export-format]");
    if (format) {
      state.editorExportFormat = format.dataset.editorExportFormat;
      selectRadio("[data-editor-export-format]", format);
      return;
    }
    const dpi = event.target.closest("[data-editor-export-dpi]");
    if (dpi) {
      state.editorExportDpi = dpi.dataset.editorExportDpi;
      selectRadio("[data-editor-export-dpi]", dpi);
    }
  });

  certificate?.addEventListener("click", () => {
    state.editorExportCertificate = !state.editorExportCertificate;
    certificate.classList.toggle("selected", state.editorExportCertificate);
    certificate.setAttribute("aria-checked", String(state.editorExportCertificate));
  });

  download?.addEventListener("click", () => {
    setOpen(false);
    showToast();
  });

  document.addEventListener("click", (event) => {
    if (!wrap.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || menu.hidden) return;
    setOpen(false);
    trigger.focus();
  });
}

function bindEditorShareMenu() {
  const wrap = document.getElementById("editorShareWrap");
  const trigger = document.getElementById("editorShareTrigger");
  const menu = document.getElementById("editorShareMenu");
  if (!wrap || !trigger || !menu) return;

  const shareUrl = "https://paperpal.app/share/crispr-visual";
  const setOpen = (open) => {
    if (open) {
      const exportMenu = document.getElementById("editorExportMenu");
      const exportTrigger = document.getElementById("editorExportTrigger");
      if (exportMenu) exportMenu.hidden = true;
      exportTrigger?.setAttribute("aria-expanded", "false");
    }
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", String(open));
  };

  const flashAction = (button, message) => {
    const label = button.querySelector(":scope > span:last-child");
    if (!label) return;
    const original = label.innerHTML;
    label.textContent = message;
    window.setTimeout(() => {
      label.innerHTML = original;
    }, 1200);
  };

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(menu.hidden);
  });

  menu.addEventListener("click", (event) => event.stopPropagation());

  menu.querySelector('[data-editor-share-action="clipboard"]')?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const image = document.getElementById("editorCanvasImage");
    try {
      if (image?.src && navigator.clipboard?.write && window.ClipboardItem) {
        const source = new Image();
        source.crossOrigin = "anonymous";
        await new Promise((resolve, reject) => {
          source.onload = resolve;
          source.onerror = reject;
          source.src = image.src;
        });
        const canvas = document.createElement("canvas");
        canvas.width = source.naturalWidth;
        canvas.height = source.naturalHeight;
        canvas.getContext("2d")?.drawImage(source, 0, 0);
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
        if (blob) await navigator.clipboard.write([new ClipboardItem({"image/png": blob})]);
      } else {
        await navigator.clipboard?.writeText(shareUrl);
      }
      flashAction(button, "Copied");
    } catch (error) {
      await navigator.clipboard?.writeText(shareUrl);
      flashAction(button, "Link copied");
    }
  });

  menu.querySelector('[data-editor-share-action="public-link"]')?.addEventListener("click", async (event) => {
    await navigator.clipboard?.writeText(shareUrl);
    flashAction(event.currentTarget, "Link copied");
  });

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedMessage = encodeURIComponent("View my Paperpal illustration");
  const shareTargets = {
    instagram: shareUrl,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    x: `https://x.com/intent/post?url=${encodedUrl}&text=${encodedMessage}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedMessage}&body=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedMessage}%20${encodedUrl}`,
    imessage: `sms:&body=${encodedMessage}%20${encodedUrl}`,
    messenger: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  menu.querySelectorAll("[data-editor-share-channel]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = shareTargets[button.dataset.editorShareChannel];
      if (target) window.open(target, "_blank", "noopener,noreferrer");
    });
  });

  document.addEventListener("click", (event) => {
    if (!wrap.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || menu.hidden) return;
    setOpen(false);
    trigger.focus();
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
  initLandingHeadingTyping();
  bindLandingTour();
  updateEditorToolbar("text");
  bindCanvasSelection();
  bindEditorImageMoreMenu();
  bindEditorCrop();
  bindEditorRegionEditing();
  bindCanvasToolbar();
  bindCanvasDeleteShortcut();
  bindEditorLibrary();
  setEditorPanelView("left", state.editorLeftPanelView);
  setEditorPanelView("right", state.editorRightPanelView);
  setEditorLeftPanelCollapsed(state.editorLeftPanelCollapsed);
  bindSelectGroups();
  bindEditorBackgroundSwatches();
  bindBlankCanvasDimensions();
  bindEditorShapeSettings();
  bindEditorLineSettings();
  bindEditorPenSettings();
  bindEditorTextSettings();
  bindEditorFrameSettings();
  bindEditorTableSettings();
  bindEditorChart();
  bindEditorImageSettings();
  bindEditorSegmentSettings();
  bindEditorInspector();
  bindEditorSlides();
  bindEditorShareMenu();
  bindEditorExportMenu();
  initActions();
  syncConversationPrompt();
  syncMobileConversationPrompt();
  renderEditorCanvas();
  updateZoom();
}

init();
