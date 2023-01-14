import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { postUpdated, getPostById } from './postsSlice';
import { useParams, useHistory } from 'react-router-dom';

export default function EditPostForm() {
	const { postId } = useParams();

	const post = useSelector(state => getPostById(state, postId));
	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.content);

	const dispatch = useDispatch();
	const history = useHistory();

	const onTitleChanged = e => setTitle(e.target.value);
	const onContentChanged = e => setContent(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(
				postUpdated({
					id: post.id,
					title,
					content,
				})
			);
			setTitle('');
			setContent('');
			history.push(`/posts/${postId}`);
		}
	};

	return (
		<section>
			<h2>Add a New Post</h2>
			<form>
				<label htmlFor='postTitle'>Post Title:</label>
				<input
					type='text'
					id='postTitle'
					name='postTitle'
					value={title}
					onChange={onTitleChanged}
				/>
				<label htmlFor='postContent'>Content:</label>
				<textarea
					id='postContent'
					name='postContent'
					value={content}
					onChange={onContentChanged}
				/>
				<button type='button' onClick={onSavePostClicked}>
					Save Post
				</button>
			</form>
		</section>
	);
}
