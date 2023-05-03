import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../app/store';

export type Monster = { id: number } & MonsterInfo;

export type MonsterInfo = {
  name: string;
  hp: number;
  types: string[];
  image: string
};

export interface monsterState {
  loading: boolean;
  selectedId: number;
  monsters: Monster[];
  error: string;
};

const initialState: monsterState = {
  loading: false,
  selectedId: 0,
  monsters: [],
  error: '',
};

export const fetchMonsters = createAsyncThunk('monster/fetchMonsters', async () => {
  return axios
    .get('https://api.pokemontcg.io/v2/cards?page=1&pageSize=250')
    // data.data is not a typo. Monsters are an array assigned to data key in response.
    .then((response: any) => response.data.data.map((monster: any) => monster))});
  // return fetch('https://api.pokemontcg.io/v2/cards?page=1&pageSize=250')
  // .then((response) => {
  //   if (response.ok) {
  //     return response.json();
  //   } else {
  //     throw new Error(response.statusText);
  //   }
  // })
  // .then((data) => {data.map((monster: any) => monster.id)})
  // .catch((error) => {console.log(error)})
// });

export const monsterSlice = createSlice({
  name: 'monster',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // createSlice automatically generates Action Creators
    // Use the PayloadAction type to declare the contents of `action.payload`
    select: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload
    }
  },
  // Codevolution on YouTube: https://tinyurl.com/ej9ztw9e
  extraReducers: (builder) => {
    builder.addCase(fetchMonsters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMonsters.fulfilled, (state, action) => {
      state.loading = false;
      state.monsters = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMonsters.rejected, (state, action) => {
      state.loading = false;
      state.monsters = [];
      state.error = action.error.message || '';
    });
  },
});

export const monsterActions = monsterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const monster = (state: RootState) => state.monster;

export default monsterSlice.reducer;
