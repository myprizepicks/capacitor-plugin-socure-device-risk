export interface SocureDeviceRiskPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
