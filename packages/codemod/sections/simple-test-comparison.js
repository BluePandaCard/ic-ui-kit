const { generateRegex } = require("./generate-regex");

function simpleTestComparison(stringArray, jsonData) {
  let fileString = stringArray;

  const componentsToChange = new Set(
    jsonData.map((entry) => {
      return entry.v2Name;
    })
  );

  componentsToChange.forEach((component) => {
    const regex = generateRegex(component, "test-simple");
    const match = fileString.match(regex);
    if (match) {
      const newProp = jsonData.find(
        (field) => field.v2Name === match[0].replace(".", "")
      ).v3Name;
      fileString = fileString.replace(component, newProp);
    }
  });

  return fileString;
}

module.exports = { simpleTestComparison };
