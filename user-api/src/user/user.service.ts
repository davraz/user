import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser, IUserService } from './interfaces/index';
import { CreateUserDto } from './dto/createUser.dto';
import { debug } from 'console';




@Injectable()
export class UserService implements IUserService{
	constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

    async findAll(): Promise<IUser[]> {
        return await this.userModel.find().exec();
    }

    async findOne(options: object): Promise<IUser> {
        return await this.userModel.findOne(options).exec();
    }

    async findByUname(username: string): Promise<IUser> {
        return await this.userModel.findById(username).exec();
    }
    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async update(username: string, newValue: IUser): Promise<IUser> {
        const user = await this.userModel.findById(username).exec();

        if (!user.username) {
            debug('username not found');
        }

        await this.userModel.findByIdAndUpdate(username, newValue).exec();
        return await this.userModel.findById(username).exec();
    }
    async delete(username: string): Promise<string> {
        try {
            await this.userModel.findByIdAndRemove(username).exec();
            return 'The username has been deleted';
        }
        catch (err){
            debug(err);
            return 'The username could not be deleted';
        }
    }
}