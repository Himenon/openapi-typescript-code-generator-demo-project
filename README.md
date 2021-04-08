# Demo project for [Himenon/openapi-typescript-code-generator](https://github.com/Himenon/openapi-typescript-code-generator)

[日本語](./README_ja.md)

This section describes the specific steps for code generation.

## Setup

First, you need to clone this repository. 

```sh
git clone https://github.com/Himenon/openapi-typescript-code-generator-demo-project
```

Then go to the cloned directory and install the package.

```sh
cd openapi-typescript-code-generator-demo-project
yarn install
```

The setup is now complete.

## Run demo

Let's actually create the code in [Usage](https://github.com/Himenon/openapi-typescript-code-generator#usage).
The OpenAPI Schema to be loaded is `openapi.yml`.

Also, the actual code to be executed will be written in plain JavaScript.

### Demo1

Examples to DEMO：[Generate typedef-only code](https://github.com/Himenon/openapi-typescript-code-generator#generate-typedef-only-code)

Execute the following command to generate the code in the demo1 directory.

```sh
node generate-demo1.js
```

### Demo2

Examples to DEMO：[Generate code containing the API Client](https://github.com/Himenon/openapi-typescript-code-generator#generate-code-containing-the-api-client)

Execute the following command to generate the code in the demo2 directory.

```sh
node generate-demo2.js
```

## Demo3

Examples to DEMO：[Split the type definition file and the API Client implementation](https://github.com/Himenon/openapi-typescript-code-generator#split-the-type-definition-file-and-the-api-client-implementation)

Execute the following command to generate the code in the demo3 directory.

```sh
node generate-demo3.js
```

## About the package you need

[@himenon/openapi-typescript-code-generator](https://www.npmjs.com/package/@himenon/openapi-typescript-code-generator) provides a mechanism for generating code from OpenAPI Schema.

It also uses TypeScript itself directly internally. Therefore, if you do not have this [typescript](https://www.npmjs.com/package/typescript) package installed, you will not be able to generate code.

