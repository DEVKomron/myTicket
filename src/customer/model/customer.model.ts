import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { Cart } from "src/cart/model/cart.model";
import { CustomerAddress } from "../../customer_address/model/customer_address.model";

interface ICustomerAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: Date;
  gender: number;
  lang_id: number;
  hashed_refresh_token: string;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.DATE,
  })
  birth_date: Date;

  @Column({
    type: DataType.SMALLINT,
  })
  gender: number;

  @Column({
    type: DataType.SMALLINT,
  })
  lang_id: number;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @HasMany(() => Cart)
  carts: Cart[];

  
  @HasMany(() => CustomerAddress)
  customeradress: CustomerAddress;
}
