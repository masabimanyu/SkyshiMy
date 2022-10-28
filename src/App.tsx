import React from 'react';
import RootNavigator from './navigations/SwitchNavigator';
// import RootNavigator from './components/navigation/SwitchNavigator';
import RootProvider from './utils/providers';

function App(): React.ReactElement {
  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default ProviderWrapper;
