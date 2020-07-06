# Import Maps Examples

Simple examples of [import maps](https://github.com/WICG/import-maps) using the polly fill [es-module-shims](https://github.com/guybedford/es-module-shims)

The purpose of these examples is try to use [lit-element](https://lit-element.polymer-project.org/guide/start) without a bundler or bare module specifiers

Examples can be found on different branches 

- The **main** branch uses import es-module-shims without any helper
- The **snowpack** branch uses
- The **map-generators** branch uses [open-wc/@import-maps/generate](https://www.npmjs.com/package/@import-maps/generate) this requires yarn

The snowpack branch uses [snowpack](https://www.snowpack.dev/#import-maps) generated import maps. The bad thing here is that snowpack generates a `web_modules folder` so there is code duplication.

## Getting started

Install dependencies using yarn only not npm
```
yarn install
```

See `package.json` in each branch for run commands

In **snowpack** branch run `npm run snowpack` or `npx run snowpack` to generate the web_modules folder

In **map-generators** run `npm run generate-map` to generate to automatically generate the import map into a file

## References

[Using Import Maps and Lit Element Web Components](https://coryrylan.com/blog/using-import-maps-and-lit-element-web-components)
