import { svgSpriteLoader } from "docz-plugin-svg-sprite-loader";

export default {
  title: "topC",
  codeSandbox: false,
  typescript: true,
  onCreateWebpackChain: config => {
    // Allow SCSS imports
    config.module
      .rule("scss")
      .test(/\.css|scss|sass$/)
      .use("style")
      .loader("style-loader")
      .end()
      .use("css")
      .loader("css-loader")
      .end()
      .use("sass")
      .loader("sass-loader")
      .end();
  },
  plugins: [svgSpriteLoader()]
};
