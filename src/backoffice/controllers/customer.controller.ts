import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from "@nestjs/common";
import { ValidatorInterceptor } from "src/interceptors/validator.interceptor";
import { CreateCustomerContract } from "../contracts/customer.contracts";
import { Customer } from "../models/customer.model";
import { Result } from "../models/result.model";

@Controller('/v1/customer')
export class CustomerController {
    @Get()
    findAll() {
        return new Result(null, true, [], null);
    }

    @Get(':document')
    findOne(@Param('document') document: string) {
        return new Result(null, true, {}, null);
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract))
    create(@Body() body: Customer) {
        return new Result('Customer created!', true, body, null);
    }

    @Put(':document')
    update(@Param('document') document, @Body() body: Customer) {
        return new Result('Customer updated!', true, body, null);
    }

    @Delete(':document')
    delete(@Param('document') document) {
        return new Result('Customer deleted!', true, null, null);
    }
}