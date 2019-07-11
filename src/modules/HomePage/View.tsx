import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { MovieCard } from '../../shared/card';
import Header from '../../shared/header';
import { flatListKeyExtractor } from '../../utils/flatlistKeyExtractor';
import { spacing } from '../../config';

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainerStyle: { marginHorizontal: spacing['spacing-03'] },
  columnWrapperStyle: {
    marginVertical: spacing['spacing-02'],
    justifyContent: 'space-between',
  },
});

function HomePageView() {
  const data = Array(5)
    .fill(5)
    .map((_, index) => index);

  function _renderItem({ item }: { item: any }) {
    return <MovieCard {...item} />;
  }

  return (
    <FlatList
      keyExtractor={flatListKeyExtractor}
      numColumns={2}
      data={data}
      renderItem={_renderItem}
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      columnWrapperStyle={styles.columnWrapperStyle}
    />
  );
}

HomePageView.navigationOptions = {
  header: <Header />,
};

export default HomePageView;
