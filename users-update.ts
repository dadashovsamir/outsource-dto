import { PartialType } from '@nestjs/mapped-types'
import { UserCreateDto } from './users-create'

export class UserUpdateDto extends PartialType(UserCreateDto) {}
