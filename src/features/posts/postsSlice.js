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
		reactions: { thumbsUp: 5, hooray: 6, heart: 44, rocket: 89, eyes: 345 },
	},
	{
		id: '2',
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		title: 'Second Post',
		content: 'Abby what are the results?',
		user: '2',
		reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
	},
	{
		id: '3',
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		title: 'Third Post',
		content: 'Ducky got some news?',
		user: '2',
		reactions: { thumbsUp: 23, hooray: 6, heart: 4, rocket: 77, eyes: 780 },
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
						reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
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
		reactionAdded(state, action) {
			const { postId, reaction } = action.payload;
			const existingPost = state.find(post => post.id === postId);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
});

export const { postAdded, postUpdated, reactionAdded } = postSlice.actions;

export const getPostById = (state, postId) =>
	state.posts.find(post => post.id === postId);

export default postSlice.reducer;
