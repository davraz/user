import { Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [
	MongooseModule.forRoot('mongodb://alcaraz:admin1@ds255308.mlab.com:55308/challenge_back'),
	UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
