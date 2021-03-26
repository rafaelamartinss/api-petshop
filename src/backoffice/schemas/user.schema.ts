import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document

export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string

    @Prop({ default: true })
    active: boolean
}

export const UserSchema = SchemaFactory.createForClass(User);