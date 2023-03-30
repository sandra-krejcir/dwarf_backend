import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Role } from 'src/users/Role';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SuperAdminGuard implements CanActivate {
  constructor(@Inject(UsersService) private usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId: number = request.user.id;

    const user = await this.usersService.findUserById(userId);

    console.log('user in guard', user);
    return user && user.role === Role.SuperAdmin;
  }
}
