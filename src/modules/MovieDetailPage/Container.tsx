import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import get from 'lodash/get';
import LottieView from 'lottie-react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';
import MovieDetailPageView from './View';
import { spacing } from '../../config';

const QUERY_GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      title
      synopsis
      imageDetailUrl
      url
    }
  }
`;

function MovieDetailPageContainer(props) {
  const movieId = props.navigation.getParam('movieId');

  return (
    <Query query={QUERY_GET_MOVIE} variables={{ id: movieId }}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <LottieView
              source={require('../../lotties/loading.json')}
              style={{ width: spacing['spacing-03'] }}
            />
          );
        }

        return <MovieDetailPageView {...get(data, 'movie', {})} />;
      }}
    </Query>
  );
}

hoistNonReactStatics(MovieDetailPageContainer, MovieDetailPageView);

export default MovieDetailPageContainer;
