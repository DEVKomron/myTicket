import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Customer } from "./model/customer.model";

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
