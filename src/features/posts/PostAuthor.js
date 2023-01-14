import { useSelector } from 'react-redux';
import { getUserById } from '../users/usersSlice';

const PostAuthor = ({ user }) => {
	const author = useSelector(state => getUserById(state, user));

	return <span>&nbsp; by {author ? author.name : 'Unknown Author'}</span>;
};
export default PostAuthor;
