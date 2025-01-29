import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Region } from "src/region/model/region.model";
import { Venue } from "src/venue/model/venue.model";

interface IDustrictAtrr{
    name: string;
    regionId: number;

}
@Table({tableName: "district"})
export class District  extends Model<District, IDustrictAtrr>{
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

      @ForeignKey(() => Region)
      @Column({
        type: DataType.INTEGER,
        onDelete: "Restrict",
      })
      regionId: number;

      @BelongsTo(()=> Region)
      region: Region

      @HasMany(() => Venue)
      venue: Venue
    }



