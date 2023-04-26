import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface monsterSelectorState {
  id: number;
}

const initialState: monsterSelectorState = {
  id: 0,
};

export const monsterSelectorSlice = createSlice({
  name: 'monster',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    }
  }
})

export const { selectId } = monsterSelectorSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const select = (state: RootState) => state.id;

export default monsterSelectorSlice.reducer;
