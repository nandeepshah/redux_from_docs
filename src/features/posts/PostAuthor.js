import { useSelector } from 'react-redux';
import { getUserById } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
	const author = useSelector(state => getUserById(state, userId));

	return <span>&nbsp; by {author ? author.name : 'Unknown Author'}</span>;
};
export default PostAuthor;
