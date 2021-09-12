const fs = require("fs");

const { CodeGenerator } = require("@himenon/openapi-typescript-code-generator");
const Templates = require("@himenon/openapi-typescript-code-generator/templates");

const main = () => {
  // https://raw.githubusercontent.com/argoproj/argo-rollouts/master/pkg/apiclient/rollout/rollout.swagger.json
  const codeGenerator = new CodeGenerator("./demo-argo-rollouts/openapi.json");

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

  fs.writeFileSync("demo-argo-rollouts/client.ts", code, { encoding: "utf-8" });

  console.log("Generate demo-argo-rollouts");
};

main();

