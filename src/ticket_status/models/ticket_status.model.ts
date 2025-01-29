import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITicked_StatusAtrr {
  name: string;
}

@Table({ tableName: "ticket_status" })
export class TicketStatus  extends Model<TicketStatus, ITicked_StatusAtrr>{
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

}
