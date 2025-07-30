const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const firstText = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const secondText = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the text result: ${firstText}, ${secondText}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return null;
        }
        console.log(result);
      }
    );
  });
});
