import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  //устанавливал линтер командой npx eslint --init (как сказал гпт, не совсем как из статьи), раньше я читал в статье при утановке предлагалось
  //выбрать готовый набор правил например из airbnb, но теперь не предлагает airbnb, а делает свои стандартные правила.
  //airbnb не поддерживает эту новую конфигурацию (только старый .eslintrc.json ), но при желании можно скопировать правила airbnb
  //и интегрировать сюда(в теории) в next-js-project3 установил eslint командой из офиц доки eslint. Потом с курсором интегрировал туда airbnb

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended, //все что ниже, давил я сам.
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/prop-types": "off", // ❌ отключаем требование PropTypes
      "react/react-in-jsx-scope": "off", // ✅ отключили требование React в JSX
    },
  },
]);
