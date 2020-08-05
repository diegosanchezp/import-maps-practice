import { 
  getImportMapFromNodeModules,
  generateImportMapForProject,
} from "@jsenv/node-module-import-map"

const projectDirectoryUrl = new URL("./", import.meta.url);

const importMapInputs = [getImportMapFromNodeModules({
  projectDirectoryUrl: projectDirectoryUrl,
  projectPackageDevDependenciesIncluded: false,
})];

generateImportMapForProject(importMapInputs, {
  projectDirectoryUrl,
  importMapFileRelativeUrl: "./import-map.importmap",
}).then((importMap)=> console.log(importMap));
