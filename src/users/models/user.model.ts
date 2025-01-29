import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/model/role.model";
import { UserRole } from "./user-role.model";

interface IUsersAtrr{
    name: string;
    email:string;
    password: string;

}

@Table({ tableName: "users" })
export class User extends Model<User, IUsersAtrr> {
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
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  is_active: boolean;


  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[]
}
