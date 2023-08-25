const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
name: {
	type: String
},
email: {
	type: String
},
password: {
	type: String
},
username: {
	type: String
}
}, {
	collection: 'Users'
})

module.exports = mongoose.model('Users', UserSchema)