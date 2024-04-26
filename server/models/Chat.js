const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
		participants : [
			{
				required:true
			}
		],
		
	} , {timestamps : true });


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;


