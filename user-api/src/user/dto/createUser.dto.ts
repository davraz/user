import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly username: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly notes: number;
}