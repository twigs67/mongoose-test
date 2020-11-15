import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {FormsService} from './forms.service';
import {formsSchema} from './forms.schema';
import {FormsController} from './forms.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Forms', schema: formsSchema }])],
    controllers: [FormsController],
    providers: [FormsService],
})
export class FormsModule {}
