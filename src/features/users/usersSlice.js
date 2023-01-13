import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{ id: '0', name: 'Jethro Gibbs' },
	{ id: '1', name: 'Tim Mcgee' },
	{ id: '2', name: 'Ellie Bishop' },
];

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
});

export const getAllUsers = state => state.users;
export const getUserById = (state, id) =>
	state.users.find(user => user.id === id);

export default userSlice.reducer;
