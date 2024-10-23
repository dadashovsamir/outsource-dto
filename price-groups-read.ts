import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'
import { PriceGroupCreateDto } from './price-groups-create'

export class PriceGroupReadDto extends PriceGroupCreateDto {
	id = 0
	counterpartyJurperson: CounterpartyJurpersonReadDto
	constructor(initialData?: Partial<PriceGroupReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
