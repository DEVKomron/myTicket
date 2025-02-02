import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { LangModule } from "./lang/lang.module";
import { Lang } from "./lang/models/lang.model";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/models/human_category.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { SeatType } from "./seat_type/models/seat_type.models";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenueType } from "./venue_type/models/venue_type.model";
import { TicketStatusModule } from "./ticket_status/ticket_status.module";
import { TicketStatus } from "./ticket_status/models/ticket_status.model";
import { PaymentMethod } from "./payment_method/model/payment_method.model";
import { PaymentMethodModule } from "./payment_method/payment_method.module";
import { DeliveryMethodModule } from "./delivery_method/delivery_method.module";
import { DeliveryMethod } from "./delivery_method/models/delivery_method.model";
import { EventTypeModule } from "./event_type/event_type.module";
import { EventType } from "./event_type/models/event_type.model";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { CustomerAddress } from "./customer_address/model/customer_address.model";
import { RegionModule } from "./region/region.module";
import { Region } from "./region/model/region.model";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/model/district.model";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/model/venue.model";
import { VenueVenuetypeModule } from "./venue_venuetype/venue_venuetype.module";
import { VenueVenuetype } from "./venue_venuetype/model/venue_venuetype.model";
import { TickedModule } from "./ticked/ticked.module";
import { CartModule } from "./cart/cart.module";
import { Cart } from "./cart/model/cart.model";
import { CustomerModule } from "./customer/customer.module";
import { Customer } from "./customer/model/customer.model";
import { Event } from "./event/model/event.model";
import { EventModule } from "./event/event.module";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/model/role.model";
import { UsersModule } from './users/users.module';
import { User } from "./users/models/user.model";
import { UserRole } from "./users/models/user-role.model";
import { AuthModule } from './auth/auth.module';
import { Ticket } from "./ticked/model/ticked.model";
import { BookingModule } from './booking/booking.module';
import { Booking } from "./booking/model/booking.model";
import { BookingStatus } from "./booking_status/model/booking_status.model";
import { CartItemModule } from './cart_item/cart_item.module';
import { CartItem } from "./cart_item/model/cart_item.model";
import { CartStatus } from "./cart_status/models/cart_status.model";
import { DiscountCoupon } from "./discount_coupon/model/discount_coupon.model";
import { SeatModule } from './seat/seat.module';
import { Seat } from "./seat/model/seat.model";
import { VenuePhoto } from "./venue_photo/model/venue_photo.model";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { SingleFileService } from "./single-file.service";
import { MultiFileService } from "./multi-file.service";
import { SingleFileController } from "./single-file.controller";
import { MultiFileController } from "./multi-file.controller";
import { Admin } from "./admin/model/admin.model";
import { AdminModule } from "./admin/admin.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      port: Number(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Lang,
        HumanCategory,
        SeatType,
        VenueType,
        TicketStatus,
        PaymentMethod,
        DeliveryMethod,
        EventType,
        CustomerAddress,
        Region,
        District,
        Venue,
        VenueVenuetype,
        Event,
        Ticket,
        Cart,
        Customer,
        Role,
        User,
        UserRole,
        Booking,
        BookingStatus,
        CartItem,
        CartStatus,
        DiscountCoupon,
        Seat,
        VenuePhoto,
        Admin
      ],
      autoLoadModels: true,
      sync: { alter: false },
      logging: false,
    }),
    LangModule,
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
    TicketStatusModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    EventTypeModule,
    CustomerAddressModule,
    RegionModule,
    DistrictModule,
    VenueModule,
    VenueVenuetypeModule,
    EventModule,
    TickedModule,
    CartModule,
    CustomerModule,
    RolesModule,
    UsersModule,
    AuthModule,
    BookingModule,
    CartItemModule,
    SeatModule,
    FileModule,
    AdminModule
  ],
  controllers: [SingleFileController, MultiFileController],
  providers: [SingleFileService, MultiFileService],
})
export class AppModule {}
