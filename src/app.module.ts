import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {FormsModule} from './forms/forms.module';

@Module({
  imports: [
      FormsModule,
      MongooseModule.forRoot('mongodb://admin:root@0.0.0.0:27016'),
  ],
  controllers: [
      AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
