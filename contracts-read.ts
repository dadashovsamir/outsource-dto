import { ContractCreateDto } from './contracts-create'
import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'
import { JurpersonReadDto } from './jurpersons-read'

export class ContractReadDto extends ContractCreateDto {
	id: number
	jurperson: JurpersonReadDto
	counterpartyJurperson: CounterpartyJurpersonReadDto
}
