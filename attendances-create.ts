import { ClientUnitReadDto } from './client-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceCreateDto {
	amount: number
	date: Date = new Date()
	worker: WorkerReadDto | { id: number }
	pricePosition: PricePositionReadDto | { id: number }
	clientUnit: ClientUnitReadDto | { id: number }
}
