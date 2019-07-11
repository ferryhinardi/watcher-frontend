import React from 'react';
import { StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { border, color, screenWidth, spacing } from '../../config';
import withImagePixel from '../../wrapper/withImagePixel';
import { ROUTES } from '../../routes';

const cardWidth = screenWidth / 2 - spacing['spacing-05'];

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: spacing['spacing-05'],
    width: cardWidth,
  },
  title: { color: color.white },
  imageStyle: { borderRadius: border.radius.default },
});

const Background = withImagePixel(ImageBackground);

function MovieCard(props) {
  function handleCardClick() {
    props.navigation.navigate(ROUTES.MOVIE_DETAIL);
  }

  return (
    <TouchableOpacity activeOpacity={.8} onPress={handleCardClick}>
      <Background
        source={{ uri: 'https://image.tmdb.org/t/p/w185/or06FN3Dka5tukK1e9sl16pB3iy.jpg' }}
        style={styles.container}
        resizeMode="cover"
        width={cardWidth}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.title}>Avengers: Endgame (2019)</Text>
      </Background>
    </TouchableOpacity>
  );
}

export default withNavigation(MovieCard);
