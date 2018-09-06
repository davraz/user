import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
	text: String,
	complete: Boolean,
});