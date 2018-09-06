import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto} from './dto/createUser.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('user')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

    @Get()
    public async getUser(@Response() res) {
        const user = await this.userService.findAll();
        return res.status(HttpStatus.OK).json(user);
    }

    @Get('find')
    public async findUser(@Response() res, @Body() body) {
        const queryCondition = body;
        const user = await this.userService.findOne(queryCondition);
        return res.status(HttpStatus.OK).json(user);
    }

    @Get('/:username')
    public async getTodo(@Response() res, @Param() param){
        const user = await this.userService.findByUname(param.username);
        return res.status(HttpStatus.OK).json(user);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async createUser(@Response() res, @Body() CreateUserDto: CreateUserDto) {

        const user = await this.userService.create(CreateUserDto);
        return res.status(HttpStatus.OK).json(user);
    }

    @Patch('/:notes')
    public async updateUser(@Param() param, @Response() res, @Body() body) {

        const user = await this.userService.update(param.notes, body);
        return res.status(HttpStatus.OK).json(user);
    }

    @Delete('/:username')
    public async deleteTodo(@Param() param, @Response() res) {

        const user = await this.userService.delete(param.username);
        return res.status(HttpStatus.OK).json(user);
    }

}
