import { registerPlugin } from '@capacitor/core';

import type { SocureDeviceRiskPlugin } from './definitions';

const SocureDeviceRisk = registerPlugin<SocureDeviceRiskPlugin>(
  'SocureDeviceRisk',
  {
    web: () => import('./web').then(m => new m.SocureDeviceRiskWeb()),
  },
);

export * from './definitions';
export { SocureDeviceRisk };
