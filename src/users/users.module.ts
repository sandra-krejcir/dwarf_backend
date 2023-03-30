import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardMemberEntity } from 'src/authentication/entities/board-member';
import { TenantEntity } from 'src/authentication/entities/tenant';
import { UserEntity } from 'src/authentication/entities/user';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([TenantEntity]),
    TypeOrmModule.forFeature([BoardMemberEntity]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
