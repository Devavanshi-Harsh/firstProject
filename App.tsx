import React from 'react';
import WebView from 'react-native-webview';

export default App = () => {
  return (
    <WebView
      source={{
        uri: 'https://stackoverflow.com/questions/883977/display-json-as-html',
      }}
    />
  );
};
