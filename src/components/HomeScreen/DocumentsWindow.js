import { ScrollView, StyleSheet, View } from 'react-native';

function DocumentsWindow({ children }) {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
}

export default DocumentsWindow;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 10,
  },
});
