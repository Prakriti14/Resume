
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            ...tseslint.configs.recommendedTypeChecked,
            reactX.configs["recommended-typescript"],
            reactDom.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                project: [
                    "./tsconfig.node.json",
                    "./tsconfig.app.json",
                ],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
);
