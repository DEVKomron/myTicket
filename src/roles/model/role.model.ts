import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRole } from "src/users/models/user-role.model";
import { User } from "src/users/models/user.model";

interface IRolesAtrr{
    value: string;
    description:string;

}


@Table({ tableName: "roles", timestamps: false })
export class Role extends Model<Role, IRolesAtrr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull:false,
    unique: true
  })
  value: string;



  
  @Column({
    type: DataType.STRING(50),
  })
  description: string;


    @BelongsToMany(() =>User, () => UserRole)
    users: User[]
}
