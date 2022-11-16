import { PartialType } from '@nestjs/mapped-types'

export class RoleCreateDto {
	name: string
}

export class RoleUpdateDto extends PartialType(RoleCreateDto) {}
