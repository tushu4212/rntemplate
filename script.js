// #!/usr/bin/env node
// const { execSync } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// // RN runs this before CLI `installDependencies`. Template has package-lock.json only;
// // always using `yarn add` breaks npm-only setups and can leave iOS autolinking broken for `pod install`.
// const installPackages = (packages, isDev) => {
//   const root = process.cwd();
//   const hasYarnLock = fs.existsSync(path.join(root, "yarn.lock"));
//   const hasBunLock =
//     fs.existsSync(path.join(root, "bun.lockb")) ||
//     fs.existsSync(path.join(root, "bun.lock"));

//   if (hasBunLock) {
//     const devFlag = isDev ? "--dev" : "";
//     execSync(`bun add ${devFlag} ${packages.join(" ")}`.trim(), {
//       stdio: "inherit",
//     });
//     return;
//   }
//   if (hasYarnLock) {
//     const devFlag = isDev ? " -D" : "";
//     execSync(`yarn add ${packages.join(" ")}${devFlag}`, { stdio: "inherit" });
//     return;
//   }
//   const saveFlag = isDev ? "--save-dev" : "--save";
//   execSync(`npm install ${packages.join(" ")} ${saveFlag}`, {
//     stdio: "inherit",
//   });
// };

// const installDependencies = () => {
//   const dependencies = [
//     "@react-navigation/native",
//     "@react-navigation/native-stack",
//     "axios",
//     "react-native-safe-area-context",
//     "react-native-screens",
//     "react-native-svg",
//     "react-native-mmkv",
//     "@reduxjs/toolkit",
//     "react-redux",
//     "react-native-size-matters",
//     "react-native-responsive-fontsize",
//     "react-native-keyboard-aware-scroll-view",
//     "react-native-paper",
//     "react-native-permissions",
//     "react-native-otp-entry",
//     "react-native-modal-datetime-picker",
//     "@react-native-community/datetimepicker",
//     "react-native-reanimated",
//     "react-native-worklets",
//     "react-native-gesture-handler",
//     "react-native-nitro-modules",
//   ];

//   const devDependencies = [
//     "@testing-library/jest-native",
//     "@testing-library/react-native",
//     "babel-plugin-module-resolver",
//     "cz-conventional-changelog",
//     "eslint-plugin-import",
//     "lint-staged",
//     "react-native-dotenv",
//     "husky",
//     "react-native-svg-transformer",
//   ];

//   console.log("\n");

//   console.log("@tushu4212/rntemplate initialized with success! 🚀\n");

//   console.log("Installing dependencies... 🛠️\n");
//   installPackages(dependencies, false);
//   console.log("Dependencies installed successfully. 🚀\n");

//   console.log("Installing dev dependencies... 🛠️\n");
//   installPackages(devDependencies, true);
//   console.log("Dev dependencies installed successfully.🚀\n");
// };

// const main = () => {
//   execSync("git init", { stdio: "inherit" });
//   installDependencies();
// };

// new Promise((resolve) => {
//   main();
//   resolve();
// })
//   .then(() => {
//     console.log(
//       "- 🎉  Congrats! Your project is ready with @tushu4212/rntemplate! 🎉\n",
//     );
//   })
//   .catch((error) => {
//     console.error(`🚨 An error occurred with post init script: ${error}`);
//     throw new Error();
//   });

// #!/usr/bin/env node
const { execSync } = require("child_process");

// const installDependencies = () => {
//   const dependencies = [
//     "@react-navigation/native",
//     "@react-navigation/native-stack",
//     "axios",
//     "react-native-safe-area-context",
//     "react-native-screens",
//     "react-native-svg",
//     "react-native-reanimated",
//   ];

//   const devDependencies = [
//     "@testing-library/jest-native",
//     "@testing-library/react-native",
//     "babel-plugin-module-resolver",
//     "cz-conventional-changelog",
//     "eslint-plugin-import",
//     "lint-staged",
//     "msw",
//     "ts-node",
//     "react-native-dotenv",
//   ];

//   console.log("\n");

//   console.log("@tushu4212/rntemplate initialized with success! 🚀\n");

//   console.log("Installing dependencies... 🛠️\n");
//   execSync(`yarn add ${dependencies.join(" ")}`, { stdio: "inherit" });
//   console.log("Dependencies installed successfully. 🚀\n");

//   console.log("Installing dev dependencies... 🛠️\n");
//   execSync(`yarn add ${devDependencies.join(" ")} -D`, { stdio: "inherit" });
//   console.log("Dev dependencies installed successfully.🚀\n");
// };

const installDependencies = () => {
  const dependencies = [
    "@react-navigation/native",
    "@react-navigation/native-stack",
    "axios",
    "react-native-safe-area-context",
    "react-native-screens",
    "react-native-svg",
    "react-native-mmkv",
    "@reduxjs/toolkit",
    "react-redux",
    "react-native-size-matters",
    "react-native-responsive-fontsize",
    "react-native-keyboard-aware-scroll-view",
    "react-native-paper",
    "react-native-permissions",
    "react-native-otp-entry",
    "react-native-modal-datetime-picker",
    "@react-native-community/datetimepicker",
    "react-native-reanimated",
    "react-native-worklets",
    "react-native-gesture-handler",
    "react-native-nitro-modules",
  ];

  const devDependencies = [
    "@testing-library/jest-native",
    "@testing-library/react-native",
    "babel-plugin-module-resolver",
    "cz-conventional-changelog",
    "eslint-plugin-import",
    "lint-staged",
    "react-native-dotenv",
    "husky",
    "react-native-svg-transformer",
  ];

  console.log("\n");

  console.log("@tushu4212/rntemplate initialized with success! 🚀\n");

  console.log("Installing dependencies... 🛠️\n");
  installPackages(dependencies, false);
  console.log("Dependencies installed successfully. 🚀\n");

  console.log("Installing dev dependencies... 🛠️\n");
  installPackages(devDependencies, true);
  console.log("Dev dependencies installed successfully.🚀\n");
};

const main = () => {
  execSync("git init", { stdio: "inherit" });
  installDependencies();
};

new Promise((resolve) => {
  main();
  resolve();
})
  .then(() => {
    console.log(
      "- 🎉  Congrats! Your project is ready with @tushu4212/rntemplate! 🎉\n",
    );
  })
  .catch((error) => {
    console.error(`🚨 An error occurred with post init script: ${error}`);
    throw new Error();
  });
