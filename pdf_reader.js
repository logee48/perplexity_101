// pdf_reader.js
const fs = require('fs');
const pdf = require('pdf-parse');

async function extractTextFromPDF(path) {
  const buffer = fs.readFileSync(path);
  const data = await pdf(buffer);
  return data.text;
}

module.exports = { extractTextFromPDF };
