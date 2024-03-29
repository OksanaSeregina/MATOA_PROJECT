module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: "babel-eslint",
    extends: ["eslint-config-airbnb-base", "eslint-config-prettier"],
    rules: {
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "no-unused-expressions": "off",
        "consistent-return": "off",
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "no-underscore-dangle": "off",
        "no-restricted-syntax": "off"
    },
    settings: {
        "import/resolver": {
            webpack: { config: "webpack.config.js" }
        }
    }
};
