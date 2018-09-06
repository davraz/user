import { IUser } from './user.interface';

export interface IUserService {
	findAll(): Promise<IUser[]>;
	findByUname(username: string): Promise<IUser | null>;
	findOne(options: object): Promise<IUser | null>;
	create(createUserDto: CreateUserDto): Promise<IUser>;
	update(username: string, newValue: IUser): Promise<IUser | null>;
	delete(username: string): Promise<string>;
}