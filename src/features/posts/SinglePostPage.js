import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getPostById } from './postsSlice';
import ReactionButtons from './ReactionButtons';

const SinglePostPage = () => {
	const { postId } = useParams();

	const post = useSelector(state => getPostById(state, postId));

	if (!post) {
		return (
			<section>
				<h2>Post not found!</h2>
			</section>
		);
	}

	return (
		<section>
			<article className='post'>
				<h2>{post.title}</h2>
				<p className='post-content'>{post.content}</p>
				<ReactionButtons post={post} />
				<Link to={`/editPost/${post.id}`} className='button'>
					Edit Post
				</Link>
			</article>
		</section>
	);
};
export default SinglePostPage;
