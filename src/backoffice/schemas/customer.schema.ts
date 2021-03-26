import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Pet } from "../models/pet.model";
import { Address } from "../models/address.model";
import { CreditCard } from "../models/credit-card.model";
import { User } from "../models/user.model";

export type CustomerDocument = Customer & Document

export class Customer {
    @Prop({ required: true }) 
    name: string
    
    @Prop({ required: true }) 
    document: string
    
    @Prop({ required: true }) 
    email: string
    
    @Prop() 
    pets: Pet[]
    
    @Prop() 
    billingAddress: Address
    
    @Prop() 
    shippingAddress: Address
    
    @Prop() 
    creditCard: CreditCard
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }) 
    user: User
}


export const CustomerSchema = SchemaFactory.createForClass(Customer);