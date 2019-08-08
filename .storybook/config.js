import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  /**
   * 左上角的标题
   * @type {String}
   */
  name: 'topC',
  /**
   * 左上角的标题的跳转链接
   * @type {String}
   */
  url: '#',
  /**
   * 是否全屏显示
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * 是否显示 Stories 导航列表控制面板
   * @type {Boolean}
   */
  showStoriesPanel: true,
  /**
   * 是否显示插件控制面板
   * @type {Boolean}
   */
  showAddonPanel: true,
  /**
   * 是否显示搜索框
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * 是否在右边展示插件控制面板
   * @type {Boolean}
   */
  addonPanelInRight: false,
  /**
   * 是否排序 Stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * 嵌套 Stories 的正则表达式
   * @example:
   *   null - 关闭嵌套
   *   /\// - 由 `/` 分隔
   *   /\./ - 由 `.` 分隔
   *   /\/|\./ - 由 `/` 或 `.` 分隔
   * @type {Regex}
   */
  hierarchySeparator: null,
  /**
   * 查找嵌套根路径的正则表达式
   * @example:
   *   null - 关闭嵌套 Stories
   *   /\|/ - 由 `|` 查找
   * @type {Regex}
   */
  hierarchyRootSeparator: null,
  /**
   * 是否开启侧边栏动画
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * 被展示的插件控制面板的 ID 值
   * 插件控制面板的展示顺序是由 Storybook 配置目录下的 `addons.js` 文件中注册插件的顺序决定的
   * 默认显示第一个插件控制面板
   * @type {String}
   */
  selectedAddonPanel: undefined,
});

configure(loadStories, module);
