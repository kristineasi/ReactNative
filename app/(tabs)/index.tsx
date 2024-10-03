import { View, Text, StyleSheet, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.viewContainer}>
      <Text>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
});