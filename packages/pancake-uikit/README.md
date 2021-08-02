# 🥞 Zenith UIkit

[![Version](https://img.shields.io/npm/v/@zenithswap-libs/uikit)](https://www.npmjs.com/package/@zenithswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@zenithswap-libs/uikit)](https://www.npmjs.com/package/@zenithswap-libs/uikit)

Zenith UIkit is a set of React components and hooks used to build pages on Zenith's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @zenithswap-libs/uikit`

## Setup

### Theme

Before using Zenith UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@zenithswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@zenithswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://zenithswap.github.io/zenith-uikit/)
