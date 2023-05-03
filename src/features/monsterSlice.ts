import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface monsterState {
  selectedId: number;
} 

const initialState: monsterState = {
  selectedId: 0,
};

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
  }
});

export const monsterActions = monsterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectz = (state: RootState) => state.monster;

export default monsterSlice.reducer;
