import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema({
    timestamps: true,
    autoIndex: true,
})
export class Form {
    @Prop()
    id: bigint;

    // ToDo: follow-up - https://github.com/nestjs/mongoose/issues/638
    // { required: true } throwing error
    @Prop({
        required:true
    })
    metrics: object; // ToDo: implement later

    @Prop()
    data: object;

    @Prop()
    user_id: string;
}

export const formsSchema = SchemaFactory.createForClass(Form);
