import { Document } from 'mongoose';

export interface IUser extends Document {
	readonly username: string;
	readonly name: string;
	readonly notes: number;
}