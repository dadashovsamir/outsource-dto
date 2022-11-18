import { PartialType } from '@nestjs/mapped-types'
import { CompanyReadDto, CompanyUpdateDto } from './companies'

export class CounterpartyCompanyCreateDto {
	name: string
	company: CompanyUpdateDto
}

export class CounterpartyCompanyUpdateDto extends PartialType(
	CounterpartyCompanyCreateDto
) {}

export class CounterpartyCompanyReadDto extends CounterpartyCompanyCreateDto {
	id: number
	company: CompanyReadDto
}