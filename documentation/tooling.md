# Development Tooling

## NPM Scripts

- `compile`: `tsc --noEmit -p .`,
- `precommit`: `lint-staged`,
- `prepush`: `yarn test`,
- `format`: `yarn -s format:js && yarn -s format:ts && yarn -s format:json`,
- `format:js`: `prettier --write {.,**}/*.js`,
- `format:json`: `prettier --write {.,**}/*.json`,
- `format:ts`: `prettier --write **/*.{ts,tsx} && tslint --fix -p tsconfig.json`,
- `lint`: `yarn -s lint:ts`,
- `lint:ts`: `tslint -p tsconfig.json`,
- `start`: `node node_modules/react-native/local-cli/cli.js start`,
- `test`: `jest`

Active Development:


Unit Testing:


End-to-End Testing:

