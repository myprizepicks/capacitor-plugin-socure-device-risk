export interface SocureDeviceRiskPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  setTracker(options: { value: string }): Promise<{ value: string }>;
  sendData(options: { value: string }): Promise<{ value: string }>;
}
