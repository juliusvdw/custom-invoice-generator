const puppeteer = require("puppeteer");

//Create logic that will take HTML(data) as input, and convert it into a PDF then return it
const converter = async (data) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent("<h1>Hello World</h1>");
  const pdf = await page.pdf();

  console.log("PDF generated");
  await browser.close();
  return pdf;
};

module.exports = converter;
