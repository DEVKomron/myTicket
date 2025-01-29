import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "src/district/model/district.model";
import { Region } from "src/region/model/region.model";
import { VenueType } from "src/venue_type/models/venue_type.model";
import { VenueVenuetype } from "src/venue_venuetype/model/venue_venuetype.model";
import { Event } from "../../event/model/event.model";
import { Seat } from "../../seat/model/seat.model";
import { VenuePhoto } from "../../venue_photo/model/venue_photo.model";

interface IVenueAtrr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  schema: string;
  regionId: number;
  districtId: number;
}
@Table({ tableName: "venue" })
export class Venue extends Model<Venue, IVenueAtrr> {
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
  @Column({
    type: DataType.STRING(50),
  })
  address: string;
  @Column({
    type: DataType.STRING(50),
  })
  location: string;
  @Column({
    type: DataType.STRING(50),
  })
  site: string;

  @Column({
    type: DataType.STRING(50),
  })
  phone: string;

  @Column({
    type: DataType.STRING(50),
  })
  schema: string;

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;

  @BelongsToMany(() => VenueType, () => VenueVenuetype)
  venutypes: VenueType[];

  @HasMany(() => Event)
  event: Event;

  @HasMany(() => Seat)
  seat: Seat;

  @HasMany(() => VenuePhoto)
  venue_photo: VenuePhoto;
}
