import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { JurpersonReadDto } from './jurpersons-read'
import { PriceGroupReadDto } from './price-groups-read'

export class PriceCreateDto {
	date: Date = new Date()
	jurperson: JurpersonReadDto | { id: number } = { id: 0 }
	counterpartyUnit?: CounterpartyUnitReadDto | { id: number }
	priceGroup?: PriceGroupReadDto | { id: number }
	comment = ''
}
