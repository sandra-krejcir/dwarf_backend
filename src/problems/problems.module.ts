import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from './entities/problem.entity';
import { UserEntity } from 'src/authentication/entities/user';
import { TenantEntity } from 'src/authentication/entities/tenant';
import { AuthModule } from 'src/authentication/auth.module';
import { UsersService } from 'src/users/users.service';
import { BoardMemberEntity } from 'src/authentication/entities/board-member';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Problem,
      UserEntity,
      TenantEntity,
      BoardMemberEntity,
    ]),
    AuthModule,
  ],
  controllers: [ProblemsController],
  providers: [ProblemsService, UsersService],
})
export class ProblemsModule {}
