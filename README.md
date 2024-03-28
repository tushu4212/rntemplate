# React Native Template

## Overview

This is a React Native template designed to kickstart your mobile app development process. It comes pre-configured with essential dependencies and a well-defined folder structure to help you get started quickly.

## Quick Start

To initialize a new project using this boilerplate, run the following command:

```bash
npx react-native@latest init YourProjectName --template @tushar4212/rntemplate
```

## Dependencies

- **@react-navigation/native**: Navigation library for React Native applications.
- **@react-navigation/native-stack**: Stack navigator for React Navigation.
- **axios**: Promise-based HTTP client for the browser and Node.js.
- **react-native-safe-area-context**: Provides a way for your application to get the safe area insets.
- **react-native-screens**: Native navigation primitives for your React Native app.
- **react-native-svg**: SVG library for React Native.
- **react-native-reanimated**: React Native library for fluid, high-performance animations.
- **@react-native-async-storage/async-storage**: AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app.
- **@reduxjs/toolkit**: Redux toolkit for efficient Redux development workflow.
- **react-redux**: Official React bindings for Redux.
- **react-native-svg-transformer**: Custom transformer for handling SVG files in React Native projects.

## Folder Structure

```
.
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── icons
│   │   └── images
│   ├── components
│   │   └── index.tsx
│   ├── navigation
│   │   └── stackNavigation.tsx
│   ├── routes
│   │   └── index.tsx
│   ├── screens
│   │   └── index.ts
│   ├── services
│   │   └── index.ts
│   ├── theme
│   │   └── theme.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       └── index.ts
.
```

- **src**: Root directory for your source code.
  - **assets**: Directory for storing static assets like images and fonts.
  - **components**: Reusable UI components.
  - **navigation**: Navigation setup and configuration.
  - **screens**: Screens or pages of your application.
  - **services**: Services or utilities for fetching data or performing other tasks.
  - **store**: Redux store setup.
    - **reducers**: Redux reducers.
    - **slices**: Redux slices for managing specific parts of the state.
  - **utils**: Utility functions or helper methods.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute it according to your needs.

## Acknowledgments

- This template is inspired by various React Native best practices and community recommendations.
