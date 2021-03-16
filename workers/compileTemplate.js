const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const compile = async (templateName, data) => {
  const filePath = path.join(process.cwd(), "templates", `${templateName}.hbs`);
  const html = await fs.readFile(filePath);

  return handlebars.compile(html)(data);
};

module.exports = compile;
