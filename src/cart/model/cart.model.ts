import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "src/customer/model/customer.model";
import { Booking } from "../../booking/model/booking.model";
import { CartStatus } from "../../cart_status/models/cart_status.model";

interface ICartAttr {
  customer_id: number;
  createdAt: Date;
  finishedAt: Date;
  status_id: number;
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;

  @ForeignKey(() => CartStatus)
  @Column({
    type: DataType.SMALLINT,
  })
  status_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;


  @BelongsTo(() => CartStatus)
  cart_status: CartStatus;

  @HasMany(() => Booking)
  booking: Booking;
}
