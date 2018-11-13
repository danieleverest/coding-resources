module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "object-curly-newline": ["error", { "multiline": true, "minProperties": 5 }],
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