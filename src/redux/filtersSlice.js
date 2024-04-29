import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		changeFilter(state, action) {
			state.name = action.payload;
		},
	},
});

export const { changeFilter } = filtersSlice.actions;
