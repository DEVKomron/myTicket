import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/model/customer.model";

interface ICustomerAddressAttr {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: "customer_address", timestamps: false })
export class CustomerAddress extends Model<
  CustomerAddress,
  ICustomerAddressAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ForeignKey(()=> Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  country_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;

  @Column({
    type: DataType.STRING(255),
  })
  street: string;

  @Column({
    type: DataType.STRING(50),
  })
  house: string;

  @Column({
    type: DataType.INTEGER,
  })
  flat: number;

  @Column({
    type: DataType.STRING(255),
  })
  location: string;

  @Column({
    type: DataType.STRING(20),
  })
  post_index: string;

  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @BelongsTo(()=> Customer)
  customer: Customer;
}
