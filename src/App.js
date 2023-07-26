import * as React from 'react';
import Blog from './Blog';
import {
  createInstance,
  OptimizelyProvider,
  useDecision,
} from '@optimizely/react-sdk';

export default function App() {
  const optimizely = createInstance({
    sdkKey: 'XKkRw1SWTRnp5WXmVMYdB',
  })

  return (
    <OptimizelyProvider optimizely={optimizely} user={{ id: 'user123' }}>
      <Blog/>
    </OptimizelyProvider>
  );
}
