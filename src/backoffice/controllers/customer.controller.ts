import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Customer } from "../models/customer.model";

@Controller('customer')
export class CustomerController {
    @Get()
    findAll() {
        return "All clients";
    }

    @Get(':document')
    findOne(@Param('document') document: string) {
        return 'Client:' + document;
    }

    @Post()
    create(@Body() body: Customer) {
        return body;
    }

    @Put(':document')
    update(@Param('document') document, @Body() body: Customer) {
        return {
            customer: document,
            data: body
        };
    }

    @Delete(':document')
    delete(@Param('document') document) {
        return {
            customer: document
        }
    }
}