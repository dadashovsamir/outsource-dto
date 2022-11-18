import { PartialType } from '@nestjs/mapped-types'
import { CompanyReadDto, CompanyUpdateDto } from './companies'

export class ProfessionCreateDto {
	name: string
	company: CompanyUpdateDto
}

export class ProfessionUpdateDto extends PartialType(ProfessionCreateDto) {}

export class ProfessionReadDto extends ProfessionCreateDto {
	id: number
	company: CompanyReadDto
}