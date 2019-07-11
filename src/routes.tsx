import HomePage from './modules/HomePage';
import MovieDetailPage from './modules/MovieDetailPage';

export const ROUTES = {
  HOME: 'HOME',
  MOVIE_DETAIL: 'MOVIE_DETAIL',
};

export const ComponentMap = {
  [ROUTES.HOME]: HomePage,
  [ROUTES.MOVIE_DETAIL]: MovieDetailPage,
};
