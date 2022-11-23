import { PartialType } from '@nestjs/mapped-types';
import { CompanyReadDto, CompanyUpdateDto } from './companies';

export class RoleCreateDto {
  name: string;
  company: CompanyReadDto | { id: number };
}

export class RoleUpdateDto extends PartialType(RoleCreateDto) {}

export class RoleReadDto extends RoleCreateDto {
  id: number;
  company: CompanyReadDto;
}
