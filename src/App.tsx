import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './navigations/SwitchNavigator';
// import RootNavigator from './components/navigation/SwitchNavigator';
import RootProvider from './utils/providers';
import {ThemeProvider} from 'react-native-magnus';

function App(): React.ReactElement {
  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SafeAreaProvider>
    </RootProvider>
  );
}

export default ProviderWrapper;
