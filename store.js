import { configureStore } from '@reduxjs/toolkit';
import coinsWatchlistReducer from './rtk-slices/coin-watchlist/coin-watchlist-slice';

const store = configureStore({
  reducer: {
    coinsWatchlist: coinsWatchlistReducer
  }
});

export default store;
