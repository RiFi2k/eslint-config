module.exports = {
   "extends": [
      "./non-rules.js", // Shared Global settings
      "plugin:@typescript-eslint/recommended", // Uses rules from `@typescript-eslint/eslint-plugin`
      "prettier/@typescript-eslint", // Use `eslint-config-prettier` to override conflicting rules from `@typescript-eslint/eslint-plugin`
      "./base.js", // Base configuration rules
      "./prettier.js", // Prettier rules
      "./import.js", // Base `eslint-plugin-import` rules
      "plugin:import/typescript" // To support TypeScript usage of `eslint-plugin-import`
   ],
   "parser": "@typescript-eslint/parser",
   "plugins": [ // ToDo: this might override base plugins
      "@typescript-eslint"
   ],
   "rules": {
       "no-use-before-define": "off", // ToDo: deprecated https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
       "@typescript-eslint/no-use-before-define": "error",
       "camelcase": "off",
       "@typescript-eslint/camelcase": [
          "error",
          {
             "allow": [
                "utm_campaign",
                "utm_content",
                "utm_medium",
                "utm_source",
                "utm_term",
                "utm_invalid",
                "content_name",
                "content_category",
                "api_plan"
             ]
          }
       ],
       "@typescript-eslint/class-name-casing": "error",
       "@typescript-eslint/no-inferrable-types": "error",
       "@typescript-eslint/type-annotation-spacing": "error"
   },
   "settings": {
      // Override `eslint-plugin-import` rule
      "import/resolver": {
        "node": {
          "extensions": [".ts", ".js", ".json"]
        }
      }
   }
}