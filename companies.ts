import { PartialType } from '@nestjs/mapped-types'

export class CompanyCreateDto {
	name: string
}

export class CompanyUpdateDto extends PartialType(CompanyCreateDto) {}

export class CompanyReadDto extends CompanyCreateDto {
	id: number
}
