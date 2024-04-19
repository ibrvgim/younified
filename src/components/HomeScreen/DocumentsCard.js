import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { formatFileExtension } from '../../utilities/helpers/formatFileExtension';
import { shadow } from '../../constants/shadow';

function DocumentsCard({ fileName }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.file}>
        <Image style={styles.icon} source={formatFileExtension(fileName)} />
        <Text style={styles.fileName}>{fileName}</Text>
      </View>

      <Octicons name='download' size={24} color={colors.black50} />
    </Pressable>
  );
}

export default DocumentsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 25,

    ...shadow,
  },

  file: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  fileName: {
    fontSize: 16,
    letterSpacing: 0.5,
  },

  pressed: {
    opacity: 0.5,
  },

  icon: {
    height: 30,
    width: 30,
  },
});
