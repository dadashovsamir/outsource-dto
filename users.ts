import { PartialType } from '@nestjs/mapped-types';
import { CompanyReadDto, CompanyUpdateDto } from './companies';
import { RoleReadDto, RoleUpdateDto } from './roles';
import { UnitUpdateDto, UnitReadDto } from './units';

export class UserCreateDto {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  companies: CompanyUpdateDto[];
  units: UnitUpdateDto[];
  roles: RoleUpdateDto[];
}

export class UserUpdateDto extends PartialType(UserCreateDto) {}

export class UserReadDto extends UserCreateDto {
  id: number;
  companies: CompanyReadDto[];
  units: UnitReadDto[];
  roles: RoleReadDto[];
}
