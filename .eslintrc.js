module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-console": "off",
    "max-len": ["error", { "code": 160 }],
    "no-underscore-dangle": [2, { "allow": [] }]
  },
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "plugins": [
    "babel"
  ]
};
