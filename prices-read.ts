import { PriceCreateDto } from './prices-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PriceGroupReadDto } from './price-groups-read'
import { JurpersonReadDto } from './jurpersons-read'

export class PriceReadDto extends PriceCreateDto {
	id = 0
	jurperson: JurpersonReadDto
	counterpartyUnit?: CounterpartyUnitReadDto
	priceGroup?: PriceGroupReadDto
	constructor(initialData?: Partial<PriceReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
