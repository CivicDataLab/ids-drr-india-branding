# IDS-DRR: India branding

Deployment configuration and React components for the IDS-DRR India deployment, packaged as a pluggable npm dependency consumed by [IDS-DRR-Frontend](https://github.com/CivicDataLab/IDS-DRR-Frontend).

Exports from `src/index.ts`:

- `config`: the deployment's `DeploymentConfig` (see [ids-drr-branding-types](https://github.com/open-contracting/ids-drr-branding-types)): states, resources, locales, messages, brand assets (logo, hero, favicon, etc.), external links (user guide, docs) and feature flags.
- React components rendered conditionally by the frontend: `AboutPage` (the `/about-us` route), `About`, `Partners`, `DataStories` (home-page sections), `Footer`, `Credits`, `PartnerLogos`.

Translated strings come from `src/messages/`. Static images come from `src/assets/`.

## Tests

`tests/` is an npm workspace of this package, containing the tests, peer-package stubs and the vitest config. The root `package.json` has no `devDependencies`, so consumers linking via `file:` or installing from this repo don't pull in the test toolchain; this avoids interfering with `npm ci` in consumers.

```
npm install       # hoists tests/ workspace deps
npm test -w tests
```
