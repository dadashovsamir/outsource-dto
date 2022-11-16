import { PartialType } from '@nestjs/mapped-types'
import { CounterpartyCompanyUpdateDto } from './counterparty-companies'

export class CounterpartyUnitCreateDto {
	name: string
	address: string
	counterpartyCompany: CounterpartyCompanyUpdateDto
}

export class CounterpartyUnitUpdateDto extends PartialType(
	CounterpartyUnitCreateDto
) {}
