import { PartialType } from '@nestjs/mapped-types'
import { RoleCreateDto } from './roles-create'

export class RoleUpdateDto extends PartialType(RoleCreateDto) {}
