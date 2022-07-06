import { WebPlugin } from '@capacitor/core';

import type { SocureDeviceRiskPlugin } from './definitions';

export class SocureDeviceRiskWeb
  extends WebPlugin
  implements SocureDeviceRiskPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
