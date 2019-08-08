import React from 'react';
import { Query } from 'react-apollo';
import get from 'lodash/get';
import { gql } from 'apollo-boost';
import LottieView from 'lottie-react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';
import HomePageView from './View';
import { spacing } from '../../config';

const QUERY_GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      imageUrl
    }
  }
`;

function HomePageContainer() {
  return (
    <Query query={QUERY_GET_MOVIES}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <LottieView
              source={require('../../lotties/loading.json')}
              style={{ width: spacing['spacing-03'] }}
            />
          );
        }

        return <HomePageView data={get(data, 'movies', [])} />;
      }}
    </Query>
  );
}

hoistNonReactStatics(HomePageContainer, HomePageView);

export default HomePageContainer;
