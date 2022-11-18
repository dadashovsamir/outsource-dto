import { PartialType } from '@nestjs/mapped-types'
import {
	CounterpartyJurpersonReadDto,
	CounterpartyJurpersonUpdateDto
} from './counterparty-jurpersons'
import { JurpersonReadDto, JurpersonUpdateDto } from './jurpersons'

export class ContractCreateDto {
	name: string
	date: Date
	jurperson: JurpersonUpdateDto
	counterpartyJurperson: CounterpartyJurpersonUpdateDto
}

export class ContractUpdateDto extends PartialType(ContractCreateDto) {}

export class ContractReadDto extends ContractCreateDto {
	id: number
	jurperson: JurpersonReadDto
	counterpartyJurperson: CounterpartyJurpersonReadDto
}
