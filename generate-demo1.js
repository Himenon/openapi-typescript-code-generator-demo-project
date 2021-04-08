const fs = require("fs");

const { CodeGenerator } = require("@himenon/openapi-typescript-code-generator");

const main = () => {
  const codeGenerator = new CodeGenerator("openapi.yml");
  const code = codeGenerator.generateTypeDefinition();
  fs.writeFileSync("demo1/client.ts", code, { encoding: "utf-8" });

  console.log("Generate demo1");
};

main();
