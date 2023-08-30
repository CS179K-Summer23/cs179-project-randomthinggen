var express = require('express');
var router = express.Router();
const multer = require('multer');
//const API_KEY = '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';
const API_KEY = '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';

const { Chat } = require('../Model/Chat');
const { Chat_no_ai } = require('../Model/Chat_no_ai');

router.post('/completions', async (req, res) => {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: req.body.message }],
			max_tokens: 1000,
		}),
	};

	try {
		const response = await fetch(
			'https://api.openai.com/v1/chat/completions',
			options
		);
		console.log(req.body.uid);
		const data = await response.json();
		// const chatPostQuestion = new Chat({
		// 	role: 'user',
		// 	content: req.body.message,
		// 	uid: req.body.uid,
		// });
		// await chatPostQuestion.save();
		const chatPostAnswer = new Chat({
			role: 'assistant',
			content: data.choices[0].message.content,
			uid: req.body.uid,
		});
		await chatPostAnswer.save();
		console.log('data is ');
		console.log(data.choices[0].message.content);
		await Chat.find({ uid: req.body.uid })
			.exec()
			.then((chats) => {
				res.status(200).json({ success: true, post: chats });
			});
	} catch (error) {
		console.log('data is ');
		console.error(error);
	}
});

router.post('/completions_no_ai', async (req, res) => {
	try {
		console.log(req.body);

		// const chatPostQuestion = new Chat({
		// 	role: 'user',
		// 	content: req.body.message,
		// 	uid: req.body.uid,
		// });
		// await chatPostQuestion.save();
		const chatPostAnswer = new Chat_no_ai({
			role: 'assistant',
			content: req.body.message,
			uid: req.body.uid,
		});
		await chatPostAnswer.save();
		console.log('data is ');
		console.log(req.body.message);
		await Chat_no_ai.find({ uid: req.body.uid })
			.exec()
			.then((chats) => {
				res.status(200).json({ success: true, post: chats });
			});
	} catch (error) {
		console.log('data is ');
		console.error(error);
	}
});

router.get('/completions_with_no_generation', async (req, res) => {
	try {
		// const chatPostQuestion = new Chat({
		// 	role: 'user',
		// 	content: req.body.message,
		// 	uid: req.body.uid,
		// });
		// await chatPostQuestion.save();
		console.log('REQ12:', req.query.uid);
		await Chat.find({ uid: req.query.uid })
			.exec()
			.then((chats) => {
				console.log('chats: ', chats);
				res.status(200).json({ success: true, post: chats });
			});
	} catch (error) {
		console.log('data is ');
		console.error(error);
	}
});

router.get('/get_no_ai_posts', async (req, res) => {
	try {
		console.log('Serverside: ', req.query.uid);
		//console.log('Serverside: ', req.body.uid);
		const chat_no_ai = await Chat_no_ai.find({ uid: req.query.uid })
			.exec()
			.then((chats) => {
				res.status(200).json({ success: true, post: chats });
			});
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'server error' });
	}
});

router.delete('/delete', async (req, res) => {
	try {
		console.log('SERVERSIDE: ', req.query.content);

		await Chat_no_ai.findOneAndDelete({
			content: req.query.content,
		})
			.exec()
			.then((chats) => {
				res.status(200).json({ success: true, post: chats });
			});
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'server error' });
	}
});

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '../randthigen/public/');
	},
	filename: function (req, file, cb) {
		cb(null, 'customizedImage.jpg');
	},
});

const upload = multer({ storage: storage }).single('file');

router.post('/image/upload', (req, res) => {
	console.log(req.body, req.formData);
	upload(req, res, (err) => {
		if (err) {
			res.status(400).json({ success: false });
		} else {
			res.status(200).json({ success: true, filePath: res.req.file.path });
		}
	});
});

module.exports = router;
