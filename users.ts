import { PartialType } from '@nestjs/mapped-types'
import { RoleUpdateDto } from './roles'

export class UserCreateDto {
	name: string
	email: string
	password: string
	isActive: boolean
	roles: RoleUpdateDto[]
}

export class UserUpdateDto extends PartialType(UserCreateDto) {}
