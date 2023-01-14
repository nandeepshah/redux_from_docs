import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';
const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await client.get('/fakeApi/users');
	return response.data;
});

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const getAllUsers = state => state.users;
export const getUserById = (state, id) =>
	state.users.find(user => user.id === id);

export default userSlice.reducer;
