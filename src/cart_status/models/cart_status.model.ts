import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/model/cart.model";


interface ICartStatusCreationAttr {
    name: string
}

@Table({ tableName: "cart_status" })
export class CartStatus extends Model<CartStatus, ICartStatusCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;


    @Column({
        type: DataType.STRING,
    })
    name: string

    @HasMany(() => Cart)
    booking: Cart;
}
