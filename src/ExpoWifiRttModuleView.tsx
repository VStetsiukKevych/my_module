import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoWifiRttModuleViewProps } from './ExpoWifiRttModule.types';

const NativeView: React.ComponentType<ExpoWifiRttModuleViewProps> =
  requireNativeViewManager('ExpoWifiRttModule');

export default function ExpoWifiRttModuleView(props: ExpoWifiRttModuleViewProps) {
  return <NativeView {...props} />;
}
