import React from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

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
  wrapperHeaderTitle: { padding: spacing['spacing-05'], borderTopWidth: 1, borderBottomWidth: 1 },
  headerTitle: { fontSize: fontSize['size-03'] },
  content: { padding: spacing['spacing-05'] },
  contentText: { lineHeight: 20 },
});

const Background = withImagePixel(ImageBackground);
const movieBackgroundWidth = screenWidth;

function MovieDetailPageView() {
  return (
    <View>
      <View style={styles.header}>
        <Background
          source={{ uri: 'https://image.tmdb.org/t/p/w780/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg' }}
          width={movieBackgroundWidth}
          style={styles.imageContainer}
          imageStyle={styles.imageStyle}>
          <TouchableOpacity activeOpacity={.8}>
            <LottieView source={require('../../lotties/play.json')} autoPlay loop style={styles.iconPlay} />
          </TouchableOpacity>
          <Text style={styles.title}>Avengers: Endgame (2019)</Text>
        </Background>
      </View>
      <View style={styles.wrapperHeaderTitle}>
        <Text style={styles.headerTitle}>Synopsis</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          {`The turning point of the beloved heroes' epic journey, as they come to truly understand how fragile their reality is and the sacrifices that must be made to uphold it.`}
        </Text>
      </View>
    </View>
  );
}

MovieDetailPageView.navigationOptions = {
  header: null,
};

export default MovieDetailPageView;