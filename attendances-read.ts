import { AttendanceCreateDto } from './attendances-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceReadDto extends AttendanceCreateDto {
	id = 0
	worker: WorkerReadDto
	pricePosition: PricePositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
}
