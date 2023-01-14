import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
	{
		id: '1',
		date: sub(new Date(), { minutes: 20 }).toISOString(),
		title: 'First Post',
		content: 'Tony Dinozzo',
		user: '1',
	},
	{
		id: '2',
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		title: 'Second Post',
		content: 'Abby what are the results?',
		user: '2',
	},
	{
		id: '3',
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		title: 'Third Post',
		content: 'Ducky got some news?',
		user: '2',
	},
];

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						date: new Date().toISOString(),
						title,
						content,
						user: userId,
					},
				};
			},
		},
		postUpdated(state, action) {
			const { id, title, content } = action.payload;
			const existingPost = state.find(post => post.id === id);
			if (existingPost) {
				existingPost.title = title;
				existingPost.content = content;
			}
		},
	},
});

export const { postAdded, postUpdated } = postSlice.actions;

export const getPostById = (state, postId) =>
	state.posts.find(post => post.id === postId);

export default postSlice.reducer;
