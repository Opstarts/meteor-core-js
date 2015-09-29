Meteor package for (core-js)[https://github.com/zloirock/core-js] that
includes everything *except* `es6.number.constructor`, which allows the
`Number` constructor to support binary and octal literals.

Including this module will break `check` when checking for `Number`
types.
