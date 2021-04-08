# Demo project for [Himenon/openapi-typescript-code-generator](https://github.com/Himenon/openapi-typescript-code-generator)

コードの生成のための具体的な手順について説明します。

## 準備

まずはこのリポジトリをクローンしてください。 

```sh
git clone https://github.com/Himenon/openapi-typescript-code-generator-demo-project
```

その後、クローンしたディレクトリに移動しパッケージのインストールを実行してください。

```sh
cd openapi-typescript-code-generator-demo-project
yarn install
```

セットアップはこれで完了です。

## デモを実行する

[使い方](https://github.com/Himenon/openapi-typescript-code-generator/blob/main/docs/ja/README-ja.md#使い方)にあるコードを実際に作成してみます。
読み込むOpenAPI Schemaは`openapi.yml`を利用します。

また、実際に実行するコードは素のJavaScriptで書かれたコードを利用します。

### Demo1

DEMOする例：[型定義のみのコードを生成する](https://github.com/Himenon/openapi-typescript-code-generator/blob/main/docs/ja/README-ja.md#型定義のみのコードを生成する)

以下のコマンドを実行すると、demo1ディレクトリにコードが生成されます。

```sh
node generate-demo1.js
```

### Demo2

DEMOする例：[api client を含むコードを生成する](https://github.com/Himenon/openapi-typescript-code-generator/blob/main/docs/ja/README-ja.md#api-client-を含むコードを生成する)

以下のコマンドを実行すると、demo2ディレクトリにコードが生成されます。

```sh
node generate-demo2.js
```

## Demo3

DEMOする例：[型定義ファイルと api client の実装を分割する](https://github.com/Himenon/openapi-typescript-code-generator/blob/main/docs/ja/README-ja.md#型定義ファイルと-api-client-の実装を分割する)

以下のコマンドを実行すると、demo3ディレクトリにコードが生成されます。

```sh
node generate-demo3.js
```

## 必要なパッケージについて

[@himenon/openapi-typescript-code-generator](https://www.npmjs.com/package/@himenon/openapi-typescript-code-generator)

OpenAPI Schemaからコード生成するための機構を提供します。

[typescript](https://www.npmjs.com/package/typescript)


`@himenon/openapi-typescript-code-generator`内部でTypeScript自体を直接利用しています。そのためこのパッケージがなければTypeScriptのコードが生成できません。
