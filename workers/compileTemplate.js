const handlebars = require("handlebars");
const fs = require("fs-extra");
const path = require("path");

const compile = async (templateName, data) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "templates",
      `${templateName}.hbs`
    );

    const html = await fs.readFile(filePath, "utf-8");

    return handlebars.compile(html)(data);
  } catch (err) {
    console.log("compile failed");
    console.log(err);
  }
};

module.exports = compile;
