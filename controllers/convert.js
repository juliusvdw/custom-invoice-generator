//Bring in converter logic form /workers/converter
const converter = require("../workers/converter");

//Create Controller to convert HTML to pdf that will be exported to /convert route
const convert = async (req, res) => {
  try {
    console.log("converter running");
    const data = req.body;

    const pdf = await converter(data);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length,
    });

    //Send PDF to client
    res.status(200).send(pdf);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
};

module.exports = convert;
