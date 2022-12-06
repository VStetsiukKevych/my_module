import * as React from 'react';

import { ExpoWifiRttModuleViewProps } from './ExpoWifiRttModule.types';

export default function ExpoWifiRttModuleView(props: ExpoWifiRttModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
