import { colors } from '@/constants/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SuperScript() {
  return (
    <View style={styles.container}>
      <Text style={styles.superscriptText}>6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline', // Align the baseline of the texts
  },
  superscriptText: {
	marginBottom: 24,
    fontSize: 12, // Adjust font size as needed for superscript
	color: colors.foreground
  },
});

export default SuperScript;
