export const imports = {
  'src/docz/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-button" */ 'src/docz/button.mdx'
    ),
  'src/docz/icon.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-icon" */ 'src/docz/icon.mdx'
    ),
  'src/docz/input.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-input" */ 'src/docz/input.mdx'
    ),
  'src/docz/switch.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-switch" */ 'src/docz/switch.mdx'
    ),
}
