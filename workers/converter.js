const puppeteer = require("puppeteer");
const compile = require("./compileTemplate");

//Create logic that will take data as input, and convert it into a PDF then return it
const converter = async (data) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const html = await compile("invoice-1", data);
  //Currently Hard coded html but will be dynamic based on user input
  await page.setContent(html);
  const pdf = await page.pdf();

  console.log("PDF generated");
  await browser.close();
  return pdf;
};

module.exports = converter;
