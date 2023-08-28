import {
	FormControlLabel,
	Radio,
	RadioGroup,
	FormControl,
	FormLabel,
} from '@mui/material';
import styles from './SettingsFormContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ChatGPTApi from './ChatGPTApi';
import { useState, useEffect } from 'react';

import {
	genreSelect,
	generateSelect,
	AISelect,
} from '../Reducer/selectionSlice';
import ImageUpload from './ImageUpload';
const SettingsFormContainer = (props) => {
	const selection = useSelector((state) => state.selection);
	const [image, setImage] = useState('');
	const user = useSelector((state) => state.user);
	const [selectedGenre, setSelectedGenre] = useState('Fantasy');
	const [selectedGenerateType, setSelectedGenerateType] = useState('Person'); // ADDED (Default value "Person")
	const [selectedAI, setSelectedAI] = useState('On'); // ADDED (Default value "On")

	const dispatch = useDispatch();

	//const [genre, setGenre] = useState('fantasy');
	const handleGenreChange = (event, value) => {
		setSelectedGenre(
			event.target.value,
			dispatch(genreSelect({ genre: event.target.value }))
		);
		console.log('selection: ', event.target.value);
	};
	const handleGenerateChange = (event, value) => {
		setSelectedGenerateType(
			event.target.value,
			dispatch(generateSelect({ generate: event.target.value }))
		);
	};
	const handleAIChange = (event, value) => {
		setSelectedAI(
			event.target.value,
			dispatch(AISelect({ AI: event.target.value }))
		);
	};
	const msg = `
	generate random thing with these conditions: 
	Genre: ${selection.genre}
	Object: ${selection.generate}
	height: tall
	build: thin
	job: welder
	hobbies: reading, writing
	limit response to be two paragraph
	`;
	//props.setMessage(msg);
	useEffect(() => {
		const msg = `
		generate random thing with these conditions: 
		Genre: ${selection.genre}
		Object: ${selection.generate}
		height: tall
		build: thin
		job: welder
		hobbies: reading, writing
		limit response to be two paragraph
		`;
		props.setMessage(msg);
	}, [selectedGenre, selectedGenerateType, selectedAI]);
	//console.log(message);
	// const getMessages = async () => {
	// 	const options = {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			message,
	// 			uid: user.uid,
	// 		}),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	};
	// 	try {
	// 		const response = await fetch(
	// 			'http://localhost:8000/api/post/completions',
	// 			options
	// 		);
	// 		console.log(response);
	// 		const data = await response.json();
	// 		console.log(data);
	// 		console.log(data.post);
	// 		setPosts(data.post);

	// 		console.log(posts);
	// 		// setMessage(data.choices[0].message);
	// 		// console.log(message);
	// 		// setResponse(data.choices[0].message.content);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	console.log('selection: ', selection);
	return (
		<div className={styles.settingscontainer}>
			<h1 className={styles.settings}>Settings</h1>
			{/* onClick={ChatGPTApi generateMessage={message}} */}
			{selection.AI === 'Off' && (
				<button
					className={styles.generatebutton}
					onClick={props.onGenerateButtonClick}
				>
					<div className={styles.generate}>Generate!</div>
					<img className={styles.mdimagicIcon} alt='' src='/mdimagic.svg' />
				</button>
			)}
			{/* <h2 className={styles.genre}>Genre:</h2> */}

			{/* <FormControl>
				<FormLabel id='genre-radio-buttons-group-label'>Genre</FormLabel>
				<RadioGroup
					aria-labelledby='genre-radio-buttons-group-label'
					defaultValue='Fantasy'
					name='genre-radio-buttons'
					onChange={handleGenreChange}
				>
					<FormControlLabel
						value='Fantasy'
						control={<Radio />}
						label='Fantasy'
					/>
					<FormControlLabel value='Sci-Fi' control={<Radio />} label='Sci-Fi' />
				</RadioGroup>
			</FormControl>
			<FormControl>
				<FormLabel id='generate-radio-buttons-group-label'>Generate</FormLabel>
				<RadioGroup
					aria-labelledby='generate-radio-buttons-group-label'
					defaultValue='Person'
					name='generate-radio-buttons'
					onChange={handleGenerateChange}
				>
					<FormControlLabel value='Person' control={<Radio />} label='Person' />
					<FormControlLabel value='Place' control={<Radio />} label='Place' />
					<FormControlLabel value='Thing' control={<Radio />} label='Thing' />
				</RadioGroup>
			</FormControl>
			<FormControl>
				<FormLabel id='AI-radio-buttons-group-label'>AI</FormLabel>
				<RadioGroup
					aria-labelledby='AI-radio-buttons-group-label'
					defaultValue='On'
					name='AI-radio-buttons'
					onChange={handleAIChange}
				>
					<FormControlLabel value='On' control={<Radio />} label='On' />
					<FormControlLabel value='Off' control={<Radio />} label='Off' />
				</RadioGroup>
			</FormControl> */}
			<h2 className={styles.genre}>Genre:</h2>
			<div className={styles.genreradiobuttons}>
				<FormControlLabel
					value='Fantasy' //ADDED
					label='Fantasy'
					labelPlacement='end'
					control={
						<Radio
							color='primary'
							size='medium'
							id='fantasy'
							checked={selectedGenre === 'Fantasy'} //ADDED
							onChange={handleGenreChange}
						/>
					} //ADDED
				/>
				<FormControlLabel
					value='Sci-Fi'
					label='Sci-Fi'
					labelPlacement='end'
					control={
						<Radio
							color='primary'
							size='medium'
							id='scifi'
							checked={selectedGenre === 'Sci-Fi'} //ADDED
							onChange={handleGenreChange} //ADDED
						/>
					}
				/>
			</div>
			<h2 className={styles.generate1}>Generate:</h2>
			<div className={styles.generateradiobuttons}>
				<FormControlLabel
					value='Person' //ADDED
					label='Person'
					labelPlacement='end'
					control={
						<Radio
							color='primary'
							size='medium'
							id='person'
							checked={selectedGenerateType === 'Person'} //ADDED
							onChange={handleGenerateChange} //ADDED
						/>
					}
				/>
				<FormControlLabel
					value='Place' //ADDED
					label='Place'
					labelPlacement='end'
					control={
						<Radio
							color='primary'
							size='medium'
							id='place'
							checked={selectedGenerateType === 'Place'} //ADDED
							onChange={handleGenerateChange} //ADDED
						/>
					}
				/>
			</div>
			<FormControlLabel
				className={styles.generateradiobuttons1}
				value='Thing' //ADDED
				label='Thing'
				labelPlacement='end'
				control={
					<Radio
						color='primary'
						size='medium'
						id='thing'
						checked={selectedGenerateType === 'Thing'} //ADDED
						onChange={handleGenerateChange} //ADDED
					/>
				}
			/>
			<h2 className={styles.ai}>AI:</h2>
			<div className={styles.airadiobuttons}>
				<FormControlLabel
					value='On' //ADDED
					label='On'
					labelPlacement='end'
					control={
						<Radio
							color='primary'
							size='medium'
							checked={selectedAI === 'On'} //ADDED
							onChange={handleAIChange} //ADDED
						/>
					}
				/>
				<FormControlLabel
					value='Off' //ADDED
					label='Off'
					labelPlacement='end'
					control={
						<Radio
							color='primary'
							size='medium'
							checked={selectedAI === 'Off'} //ADDED
							onChange={handleAIChange}
						/>
					} //ADDED
				/>
			</div>
			<div className={styles.aisettings}>
				<div className={styles.aiinput}>
					Height:
					<div className={styles.aisettingtextbox}>Tall</div>
				</div>
				<div className={styles.aiinput}>
					Build:
					<div className={styles.aisettingtextbox}>Thin</div>
				</div>
				<div className={styles.aiinput}>
					Job:
					<div className={styles.aisettingtextbox}>Welder</div>
				</div>
				<div className={styles.aiinput}>
					Hobbies:
					<div className={styles.aisettingtextbox}>Reading, Writing</div>
				</div>
			</div>

			{/* <ImageUpload setImage={setImage} /> */}
		</div>
	);
};

export default SettingsFormContainer;
