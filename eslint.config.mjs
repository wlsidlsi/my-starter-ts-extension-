import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: ['dist/**', 'node_modules/**'], // 🚀 Global ignore for dist/ and node_modules/
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.webextensions, chrome: true },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'no-console': 'error', // 🚨 Block `console.log` globally
        },
    },
    {
        files: ['src/**/*.ts'], // ✅ Allow `console.log` in `src/`
        rules: {
            'no-console': 'off',
        },
    },
];
// https://eslint.org/docs/latest/use/configure/configuration-files-new