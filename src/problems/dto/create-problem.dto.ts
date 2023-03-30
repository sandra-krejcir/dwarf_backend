import { TenantEntity } from 'src/authentication/entities/tenant';

export class CreateProblemDto {
  tenant: TenantEntity;

  constructor(public subject: string, public description: string) {}
}
