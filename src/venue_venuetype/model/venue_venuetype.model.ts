import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "src/venue/model/venue.model";
import { VenueType } from "src/venue_type/models/venue_type.model";

interface IVenu_VenuTypeAtrr{
    venueId: number;
    venueTypeId: number;
}

@Table({ tableName: "venu_venutype" })
export class VenueVenuetype extends Model<VenueVenuetype, IVenu_VenuTypeAtrr> {

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;


  @ForeignKey(() => VenueType)
  @Column({
    type: DataType.INTEGER,
  })
  venueTypeId: number;

}
