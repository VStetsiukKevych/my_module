import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoWifiRttModule.web.ts
// and on native platforms to ExpoWifiRttModule.ts
import ExpoWifiRttModule from './ExpoWifiRttModule';
import ExpoWifiRttModuleView from './ExpoWifiRttModuleView';
import { ChangeEventPayload, ExpoWifiRttModuleViewProps } from './ExpoWifiRttModule.types';

// Get the native constant value.
export const PI = ExpoWifiRttModule.PI;

export function hello(): string {
  return ExpoWifiRttModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoWifiRttModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoWifiRttModule ?? NativeModulesProxy.ExpoWifiRttModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoWifiRttModuleView, ExpoWifiRttModuleViewProps, ChangeEventPayload };
