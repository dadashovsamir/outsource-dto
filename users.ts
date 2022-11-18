import { PartialType } from '@nestjs/mapped-types'
import { RoleReadDto, RoleUpdateDto } from './roles'

export class UserCreateDto {
	name: string
	email: string
	password: string
	isActive: boolean
	roles: RoleUpdateDto[]
}

export class UserUpdateDto extends PartialType(UserCreateDto) {}

export class UserReadDto extends UserCreateDto {
	id: number
	roles: RoleReadDto[]
}
