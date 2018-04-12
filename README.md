[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm version](https://badge.fury.io/js/eslint-report-by-rule.svg)](https://badge.fury.io/js/eslint-report-by-rule)
[![npm downloads](https://img.shields.io/npm/dw/eslint-report-by-rule.svg)](https://img.shields.io/npm/dw/eslint-report-by-rule.svg)

# eslint-report-by-rule 
                        
Generate a report in which eslint error output is organized by rule

## Usage

`npx eslint-report-by-rule "yarn --silent run eslint -f json example/has-error.js"`

## output example

```
{
        "no-console": 1
}
```

## similar tools

- (this)__[eslint-report-by-rule](https://github.com/isoppp/eslint-report-by-rule)__ : generate a report with [eslint](https://github.com/eslint/eslint)
- __[stylelint-report-by-rule](https://github.com/isoppp/eslint-report-by-rule)__ : generate a report with [stylelint](https://github.com/stylelint/stylelint)
