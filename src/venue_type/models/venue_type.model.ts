import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venue/model/venue.model";
import { VenueVenuetype } from "src/venue_venuetype/model/venue_venuetype.model";

interface IVenue_TypeAtrr {
  name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, IVenue_TypeAtrr> {
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

  @BelongsToMany(()=> Venue , ()=> VenueVenuetype)
  venues: Venue[]
}
