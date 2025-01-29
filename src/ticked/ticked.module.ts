import { Module } from "@nestjs/common";
import { TickedService } from "./ticked.service";
import { TickedController } from "./ticked.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Ticket } from "./model/ticked.model";

@Module({
  imports: [SequelizeModule.forFeature([Ticket])],
  controllers: [TickedController],
  providers: [TickedService],
})
export class TickedModule {}
