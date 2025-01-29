import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/model/booking.model";

interface IDeliver_TypeAtrr {
  name: string;
}

@Table({ tableName: "deliver_method" })
export class DeliveryMethod extends Model<DeliveryMethod, IDeliver_TypeAtrr> {
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