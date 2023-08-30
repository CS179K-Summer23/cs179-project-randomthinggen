import React, { useState } from 'react';
import styles from './GenerateContainer.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const GenerateContainerAI = (props) => {
	console.log('PROPS: ', props);
	const boxCont = props.text;

	const [content, setContent] = useState(boxCont); // Default content
	const handleSave = () => {
		props.onSave(boxCont);
	};
	const user = useSelector((state) => state.user);
	const handleBranch = {
		//branching code here
	};
	const handleDelete = async () => {
		//deletion code here
		console.log('delete attempt');
		try {
			await axios.delete('/api/post/delete', {
				params: { content: boxCont },
			});
			axios
				.get('/api/post/completions_with_no_generation', {
					params: { uid: user.uid },
				})
				.then(async (res) => {
					// await console.log('res.data.post.withoutGen: ', res.data.post);
					// await console.log('res.data.post.withoutGen: ', res);
					props.setPosts([...res.data.post]);
				})
				.catch((err) => {
					console.log(err);
				});
			// props.onDelete()
		} catch (err) {
			console.error(err);
		}
	};
	console.log(content);
	return (
		<div className={styles.singlegeneratecontainer}>
			<div className={styles.generatecontainer}>{boxCont}</div>
			<select className={styles.select} id="branchSelect">
				<option value="Person">Person</option>
				<option value="Place">Place</option>
				<option value="Thing">Thing</option>
			</select>
			<button className={styles.branchgeneratebutton} onClick={handleBranch}>
				<div className={styles.branch}>Branch</div>
			</button>
			<button className={styles.savegeneratebutton} onClick={handleSave}>
				<div className={styles.save}>Save</div>
				<img
					className={styles.materialSymbolssaveIcon}
					alt=''
					src='/materialsymbolssave.svg'
				/>
			</button>
			<button className={styles.deletebutton} onClick={handleDelete}>
				<img className={styles.typcndeleteIcon} alt='' src='/typcndelete.svg' />
			</button>
		</div>
	);
};

export default GenerateContainerAI;
