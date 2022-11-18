import { PartialType } from '@nestjs/mapped-types'
import {
	CounterpartyCompanyReadDto,
	CounterpartyCompanyUpdateDto
} from './counterparty-companies'

export class CounterpartyUnitCreateDto {
	name: string
	address: string
	counterpartyCompany: CounterpartyCompanyUpdateDto
}

export class CounterpartyUnitUpdateDto extends PartialType(
	CounterpartyUnitCreateDto
) {}
export class CounterpartyUnitReadDto extends CounterpartyUnitCreateDto {
	id: number
	counterpartyCompany: CounterpartyCompanyReadDto
}
