import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
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
    props.navigation.navigate(ROUTES.MOVIE_DETAIL, { movieId: props.id });
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleCardClick}>
      <Background
        source={{ uri: props.imageUrl }}
        style={styles.container}
        resizeMode="cover"
        width={cardWidth}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.title}>{props.title}</Text>
      </Background>
    </TouchableOpacity>
  );
}

export default withNavigation(MovieCard);
