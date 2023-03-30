import { TenantEntity } from 'src/authentication/entities/tenant';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  description: string;

  @ManyToOne(() => TenantEntity, (tenant) => tenant.problem)
  tenant: TenantEntity;
}
