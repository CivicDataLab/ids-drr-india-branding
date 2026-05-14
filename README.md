# IDS-DRR: India branding

Deployment configuration, content and React components for the IDS-DRR India deployment, packaged as a pluggable npm dependency consumed by [IDS-DRR-Frontend](https://github.com/CivicDataLab/IDS-DRR-Frontend). See [ids-drr-branding-types](https://github.com/open-contracting/ids-drr-branding-types).

## Tests

`tests/` is an npm workspace of this package, containing the tests, peer-package stubs and the vitest config. The root `package.json` has no `devDependencies`, so consumers linking via `file:` or installing from this repository don't pull in the test toolchain. This avoids interfering with `npm ci` in consumers.

```
npm install       # hoists tests/ workspace deps
npm test -w tests
```
