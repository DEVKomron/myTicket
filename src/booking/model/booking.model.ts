import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/model/cart.model";
import { PaymentMethod } from "../../payment_method/model/payment_method.model";
import { DeliveryMethod } from "../../delivery_method/models/delivery_method.model";
import { BookingStatus } from "../../booking_status/model/booking_status.model";
import { DiscountCoupon } from "../../discount_coupon/model/discount_coupon.model";

interface BookingAtrr {
  card_id: number;
  finished: string;
  payment_method_id: number;
  delivery_method_id: number;
  discount_cupon_id: number;
  status_id: number
}

@Table({ tableName: "booking" })
export class Booking extends Model<Booking, BookingAtrr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cart_id: number;

  @Column({
    type: DataType.DATE,
  })
  finished: string;

  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
  })
  payment_method_id: number;

  @ForeignKey(() => DeliveryMethod)
  @Column({
    type: DataType.INTEGER,
  })
  delivery_method_id: number;

  @ForeignKey(() => DiscountCoupon)
  @Column({
    type: DataType.INTEGER,
  })
  discount_cupon_id: number;

  @ForeignKey(() => BookingStatus)
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @BelongsTo(() => PaymentMethod)
  payment_method: PaymentMethod;

  @BelongsTo(() => DeliveryMethod)
  delivery_method: DeliveryMethod;

  @BelongsTo(() => BookingStatus)
  booking_status: BookingStatus;
}
