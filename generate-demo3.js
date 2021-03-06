const fs = require("fs");

const { CodeGenerator } = require("@himenon/openapi-typescript-code-generator");
const Templates = require("@himenon/openapi-typescript-code-generator/templates");

const main = () => {
  const codeGenerator = new CodeGenerator("openapi.yml");

  const apiClientGeneratorTemplate = {
    generator: Templates.ApiClient.generator,
    option: {},
  };

  const typeDefCode = codeGenerator.generateTypeDefinition();
  const apiClientCode = codeGenerator.generateCode([
    {
      generator: () => {
        return [`import { Schemas, Responses } from "./types";`];
      },
    },
    codeGenerator.getAdditionalTypeDefinitionCustomCodeGenerator(),
    apiClientGeneratorTemplate,
  ]);

  fs.writeFileSync("demo3/types.ts", typeDefCode, { encoding: "utf-8" });
  fs.writeFileSync("demo3/apiClient.ts", apiClientCode, { encoding: "utf-8" });

  console.log("Generate demo3");
};

main();
