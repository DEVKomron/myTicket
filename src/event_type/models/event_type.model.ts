import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/model/event.model";

interface IEventAttr {
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: "event_type", timestamps: false })
export class EventType extends Model<EventType, IEventAttr> {
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
    type: DataType.INTEGER,
  })
  parent_event_type_id: number; 


  @HasMany(()=> Event)
  event : Event
  
}
