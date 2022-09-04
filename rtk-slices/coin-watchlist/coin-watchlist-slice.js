import { createSlice } from '@reduxjs/toolkit';
// import { coinsData } from '../../pages/coins-watchlist';

const initialState = {
  coinsData: []
};

const coinWatchlistSlice = createSlice({
  name: 'coinsWatchlist',
  initialState
});

console.log(coinWatchlistSlice);

export default coinWatchlistSlice.reducer;
