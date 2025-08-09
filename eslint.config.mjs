import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // 1) Ignore generated + build stuff
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "lib/generated/prisma/**", // ⬅️ the noisy files
    ],
  },

  // 2) Next.js defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),


  {
    files: ["lib/generated/prisma/**/*.{js,ts}"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];