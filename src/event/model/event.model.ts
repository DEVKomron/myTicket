import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { EventType } from "src/event_type/models/event_type.model";
import { HumanCategory } from "src/human_category/models/human_category.model";
import { Lang } from "src/lang/models/lang.model";
import { Venue } from "src/venue/model/venue.model";

interface IEventAttr {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_type_id: number;
  parent_event_type_id: number; 
  human_category_id: number;
  venue_id: number;
  lang_id: number;
  release_date: string;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.STRING,
  })
  start_date: string;

  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @Column({
    type: DataType.STRING,
  })
  finish_date: string;

  @Column({
    type: DataType.STRING,
  })
  finish_time: string;

  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  event_type_id: number;

  @ForeignKey(() => EventType) 
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: number;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
  })
  human_category_id: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @Column({
    type: DataType.STRING,
  })
  release_date: string;

  @BelongsTo(() => EventType)
  eventType: EventType;

  @BelongsTo(() => EventType)
  parentEventType: EventType;

  @BelongsTo(() => HumanCategory)
  humanCategory: HumanCategory;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => Lang)
  language: Lang;
}
