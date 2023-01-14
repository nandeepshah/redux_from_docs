import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';
const reactionEmoji = {
	thumbsUp: '👍',
	hooray: '🎉',
	heart: '❤️',
	rocket: '🚀',
	eyes: '👀',
};

const ReactionButtons = ({ post }) => {
	const dispatch = useDispatch();

	const reactionButtons = Object.entries(reactionEmoji).map(
		([em_name, emoji]) => {
			return (
				<button
					key={em_name}
					type='button'
					className='muted-button reation-button'
					onClick={() =>
						dispatch(reactionAdded({ postId: post.id, reaction: em_name }))
					}
				>
					{emoji} {post.reactions[em_name]}
				</button>
			);
		}
	);
	return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
