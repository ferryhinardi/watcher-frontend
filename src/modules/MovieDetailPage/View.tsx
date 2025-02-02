import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';
import MovieModal from '../MovieModal';
import { screenWidth, spacing, fontSize, color } from '../../config';
import withImagePixel from '../../wrapper/withImagePixel';

const iconSize = Dimensions.get('screen').width * 0.3;

const styles = StyleSheet.create({
  header: {},
  imageContainer: { justifyContent: 'center', alignItems: 'center' },
  imageStyle: { opacity: 0.5 },
  title: {
    fontSize: fontSize['size-03'],
    fontWeight: 'bold',
    color: color.primary,
    opacity: 1,
  },
  iconPlay: { width: iconSize, height: iconSize },
  wrapperHeaderTitle: {
    padding: spacing['spacing-05'],
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  headerTitle: { fontSize: fontSize['size-03'] },
  content: { padding: spacing['spacing-05'] },
  contentText: { lineHeight: 20 },
});

const Background = withImagePixel(ImageBackground);
const movieBackgroundWidth = screenWidth;

function MovieDetailPageView(props) {
  const [visible, setVisible] = useState(false);

  function handleOpenModal() {
    setVisible(true);
  }
  function handleCloseModal() {
    setVisible(false);
  }

  return (
    <View>
      <View style={styles.header}>
        <Background
          source={{
            uri: props.imageDetailUrl,
          }}
          width={movieBackgroundWidth}
          style={styles.imageContainer}
          imageStyle={styles.imageStyle}
        >
          <TouchableOpacity activeOpacity={0.8} onPress={handleOpenModal}>
            <LottieView
              source={require('../../lotties/play.json')}
              autoPlay
              loop
              style={styles.iconPlay}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{props.title}</Text>
        </Background>
      </View>
      <View style={styles.wrapperHeaderTitle}>
        <Text style={styles.headerTitle}>Synopsis</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{props.synopsis}</Text>
      </View>
      <MovieModal
        visible={visible}
        dismiss={handleCloseModal}
        videoSource={{ uri: props.url }}
      />
    </View>
  );
}

MovieDetailPageView.navigationOptions = {
  headerTransparent: true,
  headerStyle: {},
};

export default MovieDetailPageView;
