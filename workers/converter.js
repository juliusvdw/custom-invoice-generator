//Create logic that will take HTML(data) as input, and convert it into a PDF then return it
const converter = async (data) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent("<h1>Hello World</h1>");
  await page.pdf({ path: "page.pdf" });
  await browser.close();
};

module.exports = converter;
