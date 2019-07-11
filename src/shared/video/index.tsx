import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import LottieView from 'lottie-react-native';
import { screenWidth } from '../../config';

const height = screenWidth * 0.75;
const styles = StyleSheet.create({
  videoPlayer: { width: screenWidth, height },
  controller: {},
  icon: { position: 'absolute', top: 10, right: 0, width: 50, height: 50 },
});

function VideoPlayer(props) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoPlayerRef = useRef();

  function handleFullScreen() {
    setIsFullScreen(true);
  }

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={handleFullScreen}>
        <LottieView
          source={require('../../lotties/fullscreen.json')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Video
        ref={videoPlayerRef}
        style={styles.videoPlayer}
        fullscreen={isFullScreen}
        controls
        {...props}
      />
      <View style={styles.controller}></View>
    </View>
  );
}

export default VideoPlayer;
