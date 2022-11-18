import { PartialType } from '@nestjs/mapped-types'
import { CounterpartyCompanyUpdateDto } from './counterparty-companies'

export class CounterpartyJurpersonCreateDto {
	name: string
	address: string
	bankDetails: string
	counterpartyCompany: CounterpartyCompanyUpdateDto
}

export class CounterpartyJurpersonUpdateDto extends PartialType(
	CounterpartyJurpersonCreateDto
) {}

export class CounterpartyJurpersonReadDto extends CounterpartyJurpersonCreateDto {
	id: number
}
