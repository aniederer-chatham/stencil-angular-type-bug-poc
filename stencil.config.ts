import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';


// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'stencil-angular-bug-poc',
  taskQueue: 'async',
  extras: {experimentalSlotFixes: true},
  outputTargets: [
    { type: 'dist', },
    angularOutputTarget({
      componentCorePackage: 'stencil-angular-bug-poc',
      outputType: 'component',
      directivesProxyFile: 'angular-output-target/projects/stencil-components/src/lib/components.ts',
      directivesArrayFile: 'angular-output-target/projects/stencil-components/src/lib/index.ts',
    }),
  ],
};
