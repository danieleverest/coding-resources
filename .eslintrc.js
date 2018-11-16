module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "linebreak-style": 0,
    "react/require-default-props": 0,
    "no-underscore-dangle": 0,
    "object-curly-newline": ["error", { "multiline": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "max-len": [
      0
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1
      }
    ],
  }
};