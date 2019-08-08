import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Video from '../../shared/video';
import { color } from '../../config';

const styles = StyleSheet.create({
  containerModal: { backgroundColor: color.black, margin: 0 },
});

function MovieModal({ visible, dismiss, videoSource }) {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={dismiss}
      onBackdropPress={dismiss}
      swipeDirection="down"
      onSwipeComplete={dismiss}
      style={styles.containerModal}
    >
      <Video source={videoSource} />
    </Modal>
  );
}

export default MovieModal;
