// Génère une fiche Word pré-remplie par métier, à partir des mêmes données que l'espace partenaire (modeles.js).
// Usage : node build-modeles.js <modeles.js> <qr.png> <dossier de sortie>
const fs = require("fs"), path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  AlignmentType, BorderStyle, Header, Footer, PageNumber, ImageRun, VerticalAlign,
} = require("docx");

global.window = {};
require(path.resolve(process.argv[2]));
const { list } = window.KM_MODELES;
const qr = fs.readFileSync(process.argv[3]);
const OUT = process.argv[4];
fs.mkdirSync(OUT, { recursive: true });

const NAVY = "0A1A33", TEAL = "0B7F5D", SOFT = "4A5568", LIGHT = "EEF3F1", LINE = "B8C4CE", TODO = "FCE8B2";
const FONT = "Calibri", W = 9638;
const t = (text, o = {}) => new TextRun({ text, font: FONT, size: o.size || 21, bold: o.bold, italics: o.italics, color: o.color || NAVY, shading: o.hl ? { type: ShadingType.CLEAR, color: "auto", fill: TODO } : undefined });
const p = (runs, o = {}) => new Paragraph({ children: Array.isArray(runs) ? runs : [runs], spacing: { before: o.before ?? 40, after: o.after ?? 60 }, alignment: o.align, keepNext: o.keepNext });
const border = { style: BorderStyle.SINGLE, size: 4, color: LINE };
const borders = { top: border, bottom: border, left: border, right: border };
const cell = (kids, width, o = {}) => new TableCell({
  children: kids, width: { size: width, type: WidthType.DXA }, borders, verticalAlign: VerticalAlign.TOP,
  shading: o.fill ? { type: ShadingType.CLEAR, color: "auto", fill: o.fill } : undefined,
  margins: { top: 80, bottom: 80, left: 110, right: 110 },
});
// Réponse d'exemple : les passages [entre crochets] sont surlignés, une ligne par paragraphe
const runsOf = (line) => line.split(/(\[[^\]]*\])/).filter(Boolean).map((part) => /^\[.*\]$/.test(part) ? t(part, { hl: true }) : t(part));
function answerParas(text) {
  if (!text) return [p(t(""), { before: 200, after: 200 })];
  return text.split("\n").map((line) => p(runsOf(line), { before: 20, after: 20 }));
}
function section(title) {
  return new Paragraph({ children: [t(title, { bold: true, size: 26, color: "FFFFFF" })], shading: { type: ShadingType.CLEAR, color: "auto", fill: TEAL }, spacing: { before: 280, after: 100 }, keepNext: true });
}

async function build(m) {
  const W1 = 2600, W2 = W - W1;
  const rows = [new TableRow({ tableHeader: true, children: [
    new TableCell({ ...{}, children: [p(t("Thème et question des visiteurs", { bold: true, color: "FFFFFF" }))], width: { size: W1, type: WidthType.DXA }, borders, shading: { type: ShadingType.CLEAR, color: "auto", fill: NAVY }, margins: { top: 80, bottom: 80, left: 110, right: 110 } }),
    new TableCell({ children: [p(t("Votre réponse (exemple à adapter)", { bold: true, color: "FFFFFF" }))], width: { size: W2, type: WidthType.DXA }, borders, shading: { type: ShadingType.CLEAR, color: "auto", fill: NAVY }, margins: { top: 80, bottom: 80, left: 110, right: 110 } }),
  ] })];
  for (const x of m.topics) {
    const ans = x[2] || (x[0].startsWith("Adresse") ? "[Ville, quartier, repère connu : ex. « derrière la station Total, portail vert »]" : "");
    rows.push(new TableRow({ cantSplit: true, children: [
      cell([p(t(x[0], { bold: true })), p(t(x[1], { italics: true, color: SOFT, size: 19 }))], W1, { fill: LIGHT }),
      cell(answerParas(ans), W2),
    ] }));
  }
  for (let i = 0; i < 3; i++) rows.push(new TableRow({ children: [cell([p(t("Autre thème : …", { color: SOFT }))], W1, { fill: LIGHT }), cell([p(t(""), { before: 200, after: 200 })], W2)] }));

  const children = [
    new Paragraph({ children: [t("Know", { bold: true, size: 44 }), t("Mi", { bold: true, size: 44, color: TEAL })], spacing: { after: 0 } }),
    p(t("FICHE D'INFORMATIONS — " + m.name[0].toUpperCase(), { bold: true, size: 30 }), { before: 60, after: 20 }),
    p(t("Exemple prêt à adapter : " + m.desc[0].toLowerCase(), { size: 21, color: SOFT }), { after: 160 }),
    new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W - 2300, 2300], rows: [new TableRow({ children: [
      cell([
        p(t("Mode d'emploi", { bold: true, size: 22, color: TEAL })),
        p([t("1. Remplacez chaque passage surligné "), t("[entre crochets]", { hl: true }), t(" par vos vraies informations, ou effacez-le s'il ne vous concerne pas.")]),
        p(t("2. Modifiez librement les réponses : ajoutez, retirez, reformulez. Videz une ligne pour ne pas l'utiliser.")),
        p(t("3. N'écrivez que des informations publiques, que vous acceptez de voir communiquées à toute personne qui scanne votre QR code.")),
        p(t("4. Dans l'application KnowMi, à l'étape « Vos informations », touchez « Importer ma fiche » et choisissez ce fichier (ou une photo des pages). Vous relisez et validez tout avant la publication.")),
      ], W - 2300),
      cell([
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: "png", data: qr, transformation: { width: 110, height: 110 } })] }),
        p(t("KnowMi sur Google Play", { size: 17, color: SOFT }), { align: AlignmentType.CENTER }),
      ], 2300),
    ] })] }),

    section("1. Identification"),
    new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [3400, W - 3400], rows:
      ["Nom de l'organisation ou de l'événement", "Nom affiché aux visiteurs", "Téléphone de l'accueil", "Responsable de la fiche (nom, fonction)"]
        .map((l) => new TableRow({ children: [cell([p(t(l, { bold: true }))], 3400, { fill: LIGHT }), cell([p(t(""))], W - 3400)] })) }),
    p([t("Message d'accueil proposé : ", { bold: true }), ...runsOf(m.welcome[0].split("{org}").join("[votre nom]"))], { before: 100 }),

    section("2. Les réponses de votre assistant"),
    p(t("Chaque ligne devient une réponse que l'assistant KnowMi donnera à vos visiteurs, et uniquement celles-ci.", { italics: true, color: SOFT, size: 19 }), { after: 100 }),
    new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W1, W2], rows }),

    section("3. Validation"),
    p(t("Je certifie que les informations de cette fiche sont exactes et publiques, et je m'engage à les mettre à jour dès qu'elles changent.")),
    new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [3212, 3213, 3213], rows: [
      new TableRow({ tableHeader: true, children: ["Fait à", "Le", "Signature et cachet"].map((h, i) => new TableCell({ children: [p(t(h, { bold: true, color: "FFFFFF" }))], width: { size: [3212, 3213, 3213][i], type: WidthType.DXA }, borders, shading: { type: ShadingType.CLEAR, color: "auto", fill: NAVY }, margins: { top: 70, bottom: 70, left: 110, right: 110 } })) }),
      new TableRow({ children: [3212, 3213, 3213].map((w) => cell([new Paragraph({ spacing: { before: 360, after: 360 }, children: [] })], w)) }),
    ] }),
  ];

  const doc = new Document({
    creator: "KnowMi", title: "KnowMi – Fiche " + m.name[0],
    styles: { default: { document: { run: { font: FONT, size: 21 } } } },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [t("KnowMi · " + m.name[0], { size: 17, color: SOFT })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        t("knowmi.contact@gmail.com · Informations pratiques et publiques uniquement · Page ", { size: 17, color: SOFT }),
        new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 17, color: SOFT }),
      ] })] }) },
      children,
    }],
  });
  fs.writeFileSync(path.join(OUT, m.id + ".docx"), await Packer.toBuffer(doc));
}

(async () => { for (const m of list) await build(m); console.log("ok", list.length); })();
