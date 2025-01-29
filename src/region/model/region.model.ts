import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { District } from "src/district/model/district.model";
import { Venue } from "src/venue/model/venue.model";

interface IRegionAtrr {
  name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, IRegionAtrr> {
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

  @HasMany(()=> District)
  distrct: District[];

  @HasMany(()=> Venue)
  venue: Venue
}
