#!/usr/bin/env node
const { execSync } = require("child_process");

const installDependencies = () => {
  const installYarn = () => {
    console.log("Yarn is not installed. Installing yarn...");
    try {
      execSync("npm install -g yarn", { stdio: "inherit" });
      console.log("Yarn installed successfully.");
    } catch (error) {
      console.error("Error installing yarn:", error);
      throw error;
    }
  };
  const checkYarnInstalled = () => {
    try {
      execSync("yarn --version", { stdio: "ignore" });
      return true;
    } catch (error) {
      return false;
    }
  };
  const dependencies = [
    "@react-navigation/native",
    "@react-navigation/native-stack",
    "axios",
    "react-native-safe-area-context",
    "react-native-screens",
    "react-native-svg",
    "react-native-reanimated",
    "@react-native-async-storage/async-storage",
    "@reduxjs/toolkit",
    "react-redux",
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

  if (!checkYarnInstalled()) {
    installYarn();
  }

  console.log("Installing dependencies... 🛠️\n");
  execSync(`yarn add ${dependencies.join(" ")}`, { stdio: "inherit" });
  console.log("Dependencies installed successfully. 🚀\n");

  console.log("Installing dev dependencies... 🛠️\n");
  execSync(`yarn add ${devDependencies.join(" ")} -D`, { stdio: "inherit" });
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
      "- 🎉  Congrats! Your project is ready with @tushu4212/rntemplate! 🎉\n"
    );
  })
  .catch((error) => {
    console.error(`🚨 An error occurred with post init script: ${error}`);
    throw new Error();
  });
