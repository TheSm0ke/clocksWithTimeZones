'use strict';
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const eslintrc = require('@eslint/eslintrc');

module.exports = [
	{
		languageOptions: {
			globals: eslintrc.Legacy.environments.get('es2024'),
		},
		plugins: {
			unicorn: eslintPluginUnicorn,
		},
		rules: {
			'unicorn/better-regex': 'error',
			'unicorn/…': 'error',
		},
		ignorePatterns: ['.eslintrc.js'],
		extends: 'react-app',
	},
	// …
];