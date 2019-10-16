import React from 'react';
import AppNavigator from './navigation/AppNavigator';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

export default App;