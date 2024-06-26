import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in URL: ",
      name: "URL"
    },
  ])
  .then((answers) => {
    const url = answers.URL;  // Note the uppercase URL to match the question's name
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something else went wrong:", error);
    }
  });