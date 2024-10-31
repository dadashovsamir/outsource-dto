import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PriceGroupReadDto } from './price-groups-read'

export class PriceCreateDto {
	date: Date = new Date()
	counterpartyUnit?: CounterpartyUnitReadDto | { id: number }
	priceGroup?: PriceGroupReadDto | { id: number }
	comment = ''
}
