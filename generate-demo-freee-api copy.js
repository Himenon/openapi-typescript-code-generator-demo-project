const fs = require("fs");

const { CodeGenerator } = require("@himenon/openapi-typescript-code-generator");
const Templates = require("@himenon/openapi-typescript-code-generator/templates");

const main = () => {
  // https://raw.githubusercontent.com/freee/freee-api-schema/master/v2020_06_15/open-api-3/api-schema.yml
  const codeGenerator = new CodeGenerator("./demo-freee-api/openapi.yml");

  const apiClientGeneratorTemplate = {
    generator: Templates.ApiClient.generator,
    option: {
      additionalMethodComment: true
    },
  };

  const code = codeGenerator.generateTypeDefinition([
    codeGenerator.getAdditionalTypeDefinitionCustomCodeGenerator(),
    apiClientGeneratorTemplate,
  ]);

  fs.writeFileSync("demo-freee-api/client.ts", code, { encoding: "utf-8" });

  console.log("Generate demo-freee-api");
};

main();

https://raw.githubusercontent.com/argoproj/argo-rollouts/master/pkg/apiclient/rollout/rollout.swagger.json