import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { Seat } from "../../seat/model/seat.model";

interface ISeat_TypeAtrr {
  name: string;
}

@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, ISeat_TypeAtrr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
  })
  name: string;

  @HasMany(()=> Seat)
  event : Seat
}
