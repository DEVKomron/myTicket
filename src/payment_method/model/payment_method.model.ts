import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/model/booking.model";

interface IPayment_TypeAtrr {
  name: string;
}

@Table({ tableName: "payment_method" })
export class PaymentMethod extends Model<PaymentMethod, IPayment_TypeAtrr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(30),
  })
  name: string;

    @HasMany(()=>Booking)
    booking: Booking;
}
