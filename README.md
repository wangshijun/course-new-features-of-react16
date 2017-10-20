# 与时俱进：React 16 新特性尝鲜

## 课程介绍

`React 16` 的发布除开源许可证和 `Fiber` 机制全面开启之外，还为我们提供了部分非常强大的新特性，本视频教程将通过实例带你探索这些新特性，从 `Error Boundary` 到 `Text Only Component`，再到 `Portal`，**共 6 小节，19 分钟**，每个小节实例讲解一个新特性，让你在学会新特性用法的同时熟悉新特性的最佳实践。学完本视频教程，你将能熟练把诸如 `Error Boundary`，`Portal` 等特性运用到你的实际项目中来提高开发效率和代码质量。

## 适用人群

* [必须]具备前端基础知识，了解 ES6；
* [必须]具备 React 基础知识，有开发经验更好；
* [可选]期望跟上社区发展动态，学习最新的开发技术，如果满足这点，前两点可忽略；

## 内容目录

### 1. 用 `Error Boundary` 处理错误

为了解决未捕获错误阻塞整个应用的问题，`React 16` 中引入了 `Error Boundary` 的概念，`Error Boundary` 指能够捕获其所有子组件的错误并对错误做优雅处理的组件，这种优雅错误处理包括上报错误日志、展示出错提示而不是卸载整个组件树。我们在本小节中会展示如何创建 `Error Boundary` 组件，并使用 `componentDidCatch` 生命周期方法来处理捕获到的错误，此外还会展示 `Error Boundary` 使用的最佳实践。

### 2. 在 `render` 中返回没有容器元素的多个元素

在 `React 16` 之前，`render` 方法必须返回单个元素，而 `React 16` 中我们可以在 `render` 方法中返回多个节点，即节点数组，该特性能给开发打来很大的便利，也给组件结构设计带来了新的可能，本节会实例展示有哪些新可能。

### 3. 用 `Text Only Component` 减少 `DOM` 层级

`React 16` 之前的版本要求只渲染字符串的组件必须把字符串包在无意义的 `<span>` 或 `<div>` 中，而在 React 16 中这种限制已经去掉，也就意味着你可以在组件的 `render` 方法中直接返回字符串，创建 `Text Only Component`，这样会帮我们精简 `DOM` 层级。

### 4. 用 `createPortal` 把组件渲染到当前组件树之外

默认情况下，`React组件树` 是和 `DOM树` 完全对应的，但是这样会给部分 UI 组件带来限制，比如常见的蒙层、进度条，`React 16` 为我们提供的 `portal` 特性能够让我们把组件树的部分渲染到当前组件树之外，本节会基于 `portal` 机制从零开始构建最小可用的 `<Overlay/>` 组件，让大家理解怎么用，有什么最佳实践。

### 5. 更加自由的 `DOM` 属性

`React 16` 对 `DOM` 组件的属性也做了不少增强，最让人兴奋的就是对自定义属性的宽容。本节会用实例演示哪些 `DOM` 属性会被直接渲染，哪些会被忽略，哪些写法是有效的，哪些写法是无效的，避免你在开发过程中踩坑。

### 6. 在 `setState` 时用 `null` 避免不必要的渲染

有时候我们需要通过函数来判断组件状态更新是否触发重新渲染，在 `React 16` 中，我们可以通过调用 `setState` 时传入 `null` 来避免组件重新渲染，这也就意味着，我们可以在 `setState` 方法内部决定我们的状态是否需要更新，本节会实例演示如何利用该特性解决城市地图应用中重复城市选择导致的重复渲染问题。

## 源码链接

代码仓库：[wangshijun/course-new-features-of-react16](https://github.com/wangshijun/course-new-features-of-react16)

运行方法（建议安装和使用 [yarn](https://yarnpkg.com/en/)）

```shell
git clone https://github.com/wangshijun/course-new-features-of-react16.git
cd course-new-features-of-react16
yarn
yarn start
```

如果要运行某节课的脚本，只需修改 `src/index.js` 第 4 行的导入脚本，导入对应的代码即可，对应关系如下：

1. [用 `Error Boundary` 处理错误: ErrorBoundary.js](https://github.com/wangshijun/course-new-features-of-react16/commit/680b2ea0024490dabfd0c4442a640500bafdbff3)
1. [在 `render` 中返回没有容器元素的多个元素: MultiElementRender.js](https://github.com/wangshijun/course-new-features-of-react16/commit/0d4b1945f37d1a7418be09e18414ef07a259e8c2)
1. [用 `Text Only Component` 减少 `DOM` 层级: TextOnlyComponent.js](https://github.com/wangshijun/course-new-features-of-react16/commit/a90b9f287ad8fde9818337078981b9a48417f01a)
1. [用 `createPortal` 把组件渲染到当前组件树之外: ReactPortals.js](https://github.com/wangshijun/course-new-features-of-react16/commit/32ff1a0a9159827ebe4e9ca06fbd7dfee543569c)
1. [更加自由的 `DOM` 属性: DomAttributes.js](https://github.com/wangshijun/course-new-features-of-react16/commit/0328cb44c4adba9c3ca432f26ce55b3711948222)
1. [在 `setState` 时用 `null` 避免不必要的渲染: AvoidUpdate.js](https://github.com/wangshijun/course-new-features-of-react16/commit/d4b6ca41017c607756099f881b0bc2c9c53ff6ec), [74d889](https://github.com/wangshijun/course-new-features-of-react16/commit/74d8890f01bff245ca1d7e69724daa0301c5e171)

## 运行环境

* Node.js v8.6.0
* React v16
* React Native v0.49.0 [optional]
* VSCode v1.17.1 + Vim
* Chrome v61

## 参考资料

* [React v16.0](https://reactjs.org/blog/2017/09/26/react-v16.0.html)
