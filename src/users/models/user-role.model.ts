import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Role } from "src/roles/model/role.model";

interface IUserRoleAtrr{
userId: number;
roleId: number;
}

@Table({ tableName: "user_role" })
export class UserRole extends Model<UserRole, IUserRoleAtrr> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING(50),
  })
  userId: number;
  

  @ForeignKey(() => Role)
  @Column({
    type: DataType.STRING(50),
  })
  roleId: number;
}
