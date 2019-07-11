import React from 'react';
import { SafeAreaView } from 'react-navigation';

export function withSafeArea(WrappedComponent) {
  function WrapperComponent(props) {
    return (
      <SafeAreaView forceInset={{ top: 'always', bottom: 'always' }}>
        <WrappedComponent {...props} />
      </SafeAreaView>
    );
  }

  return WrapperComponent;
}