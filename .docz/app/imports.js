export const imports = {
  'src/docz/animation.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-animation" */ 'src/docz/animation.mdx'
    ),
  'src/docz/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-button" */ 'src/docz/button.mdx'
    ),
  'src/docz/icon.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-icon" */ 'src/docz/icon.mdx'
    ),
  'src/docz/checkBox.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-check-box" */ 'src/docz/checkBox.mdx'
    ),
  'src/docz/switch.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-switch" */ 'src/docz/switch.mdx'
    ),
  'src/docz/input.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docz-input" */ 'src/docz/input.mdx'
    ),
}
