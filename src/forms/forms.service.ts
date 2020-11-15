import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {FormCreatedResponse} from './models/interfaces/form.interface';
import {CreateFormDto} from './models/dtos/create-form.dto';
import {Form, FormDocument} from './forms.schema';
import {DeleteFormByIdDto} from './models/dtos/delete-form.dto';

@Injectable()
export class FormsService {
    constructor(@InjectModel('Forms') private readonly formModel: Model<FormDocument>) {}

    async createForm(form): Promise<object> {
        const createdForm = new this.formModel(form);
        return await createdForm.save();
    }

    async getUserForms(userId: string) {
        return this.formModel.find({user_id: userId}).sort({created_at: -1}).limit(50).exec();
    }

    async findAll() {
        return await this.formModel.find().exec();
    }

    async delete(params: DeleteFormByIdDto) {
        await this.formModel.remove(params);
    }

    async deleteById(id: string) {
        await this.formModel.findByIdAndDelete(id);
    }

    async test() {
        const createdForm = new this.formModel({data: {test: 'data'}, user_id: 1});
        return await createdForm.save();
    }

}
