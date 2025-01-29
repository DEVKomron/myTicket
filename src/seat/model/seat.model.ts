import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";
import { SeatType } from "../../seat_type/models/seat_type.models";

interface ISeatAtrr {
  sector: number;
  row_number: number;
  number: number;
  venue_id: number;
  seat_type_id: number;
  location_in_schema: string;
}
@Table({tableName: "seat"})
export class Seat extends Model<Seat, ISeatAtrr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  sector: number;
  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;
  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
  })
  seat_type_id: number;

  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;

@BelongsTo(() => Venue)
venue: Venue;

@BelongsTo(() => SeatType)
seatType: SeatType;



}
