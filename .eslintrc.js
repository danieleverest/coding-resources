module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
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