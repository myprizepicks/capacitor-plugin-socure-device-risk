import { WebPlugin } from '@capacitor/core';

import type { SocureDeviceRiskPlugin } from './definitions';

export class SocureDeviceRiskWeb
  extends WebPlugin
  implements SocureDeviceRiskPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async setTracker(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO SET TRACKER', options);
    return options;
  }
  async sendData(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO SEND DATA', options);
    return options;
  }
}
