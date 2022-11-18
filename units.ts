import { PartialType } from '@nestjs/mapped-types'
import { CompanyUpdateDto } from './companies'

export class UnitCreateDto {
	name: string
	address: string
	company: CompanyUpdateDto
}

export class UnitUpdateDto extends PartialType(UnitCreateDto) {}

export class UnitReadDto extends UnitCreateDto {
	id: number
	company: CompanyReadDto
}
