import { Document } from 'mongoose';

export interface FormCreatedResponse extends Document {
    readonly id: bigint;
}

export interface UserForms extends Document {
    readonly id: bigint;
}