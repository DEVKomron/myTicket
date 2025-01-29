import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticked/model/ticked.model";
import { Cart } from "../../cart/model/cart.model";

interface ICart_ItemAtrr{
    ticked_id: number;
    cart_id: number;
    quantity: number;
}

@Table({tableName: "cart_item"})
export class CartItem extends Model<CartItem, ICart_ItemAtrr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticked_id: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cart_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @BelongsTo(() => Ticket)
  ticked: Ticket;

  @BelongsTo(() => Cart)
  cart: Cart;
}
