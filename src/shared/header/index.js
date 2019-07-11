import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { color, spacing, border, fontSize } from '../../config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    paddingHorizontal: spacing['spacing-05'],
    paddingVertical: spacing['spacing-05'],
  },
  textInput: {
    backgroundColor: color.white,
    fontSize: fontSize['size-02'],
    borderRadius: border.radius.default,
    paddingHorizontal: spacing['spacing-03'],
    height: spacing['spacing-06'],
    paddingVertical: 0,
  },
});

function Header() {
  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <TextInput style={styles.textInput} />
    </SafeAreaView>
  );
}

export default Header;
