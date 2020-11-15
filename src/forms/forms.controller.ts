import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {FormsService} from './forms.service';
import {DeleteFormByIdDto} from './models/dtos/delete-form.dto';
import {CreateFormDto} from './models/dtos/create-form.dto';
import {UserForms} from './models/interfaces/form.interface';
import {UserFormByIdDto} from './models/dtos/get-form.dto';

@Controller('forms')
export class FormsController {
    constructor(
        private readonly formsService: FormsService,
    ) {}

    @Get('user/:user_id')
    async findAll(@Param() params): Promise<object> {
        return await this.formsService.getUserForms(params.user_id);
    }

    // ToDo: enforce types later
    @Post('create')
    async create(@Body() form: object): Promise<object> {
        return await this.formsService.createForm(form);
    }

    @Delete('id/:id')
    async delete(@Param() params: DeleteFormByIdDto) {
        await this.formsService.deleteById(params.id);
    }

    @Post('test')
    async createTestForm() {
        await this.formsService.test();
    }
}
