import { PartialType } from '@nestjs/mapped-types'
import { CounterpartyJurpersonUpdateDto } from './counterparty-jurpersons'
import { JurpersonUpdateDto } from './jurpersons'

export class ContractCreateDto {
	name: string
	date: Date
	jurperson: JurpersonUpdateDto
	counterpartyJurperson: CounterpartyJurpersonUpdateDto
}

export class ContractUpdateDto extends PartialType(ContractCreateDto) {}
