import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import OutlineButton from '../components/OutlineButton';
import Button from '../components/Button';
import { voteBoxIcon } from '../constants/svgs/servicesScreenIcons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function ModalWindow() {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  function handleCloseWindow() {
    setModalVisible(false);
  }

  function handleNavigate() {
    navigation.navigate('Voting');
    setModalVisible(false);
  }

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
      <View style={styles.screen}>
        <View style={styles.modalContainer}>
          <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={handleCloseWindow}
          >
            <Ionicons
              style={styles.closeIcon}
              name='close'
              size={24}
              color={colors.black50}
            />
          </Pressable>

          <View style={styles.descriptionContainer}>
            <View>{voteBoxIcon}</View>

            <View>
              <Text style={styles.title}>There is an active voting</Text>

              <Text style={styles.question}>
                Do you want to proceed to voting{' '}
                <Text style={styles.strong}>“Meeting Discussion”</Text>?
              </Text>
            </View>
          </View>

          <View style={styles.buttonsCOntainer}>
            <View style={styles.buttonBox}>
              <OutlineButton handlePress={handleCloseWindow}>
                Not Now
              </OutlineButton>
            </View>

            <View style={styles.buttonBox}>
              <Button handlePress={handleNavigate}>Proceed</Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalWindow;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 60,
    borderRadius: 20,
  },

  closeIcon: {
    marginLeft: 'auto',
  },

  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 40,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 7,
    letterSpacing: 0.5,
  },

  question: {
    fontSize: 15,
    paddingRight: Platform.OS === 'android' ? 130 : 120,
    fontWeight: '300',
  },

  strong: {
    fontWeight: '500',
  },

  buttonsCOntainer: {
    flexDirection: 'row',
    gap: 12,
  },

  buttonBox: {
    flex: 1,
  },

  pressed: {
    opacity: 0.5,
  },
});
