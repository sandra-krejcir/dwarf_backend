import { Role } from 'src/users/Role';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { BoardMemberEntity } from './board-member';
import { TenantEntity } from './tenant';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne((type) => TenantEntity, (tenant) => tenant.user)
  tenant: TenantEntity | null;

  @OneToOne((type) => BoardMemberEntity, (boardMember) => boardMember.user)
  boardMember: BoardMemberEntity | null;

  @Column({
    type: 'enum',
    enum: Role,
    default: [Role.User],
  })
  role: Role;
}
