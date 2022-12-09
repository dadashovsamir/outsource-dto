import { ContractCreateDto } from './contracts-create'
import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'
import { JurpersonReadDto } from './jurpersons-read'

export class ContractReadDto extends ContractCreateDto {
	id = 0
	jurperson: JurpersonReadDto
	counterpartyJurperson: CounterpartyJurpersonReadDto
}
