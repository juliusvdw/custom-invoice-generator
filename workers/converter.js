const puppeteer = require("puppeteer");
const compile = require("./compileTemplate");

//Create logic that will take data as input, and convert it into a PDF then return it
const converter = async (data) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Compile template with handlebars and passed through data
    const html = await compile("invoice-1", data);
    await page.setContent(html);
    const pdf = await page.pdf();

    console.log("PDF generated");
    await browser.close();
    return pdf;
  } catch (err) {
    console.log(err);
  }
};

module.exports = converter;
