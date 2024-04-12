import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { CounterpartyUnitPositionReadDto } from './counterparty-unit-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceCreateDto {
	amount: number
	date: Date
	worker: WorkerReadDto | { id: number }
	position: CounterpartyUnitPositionReadDto | { id: number }
	counterpartyUnit: CounterpartyUnitReadDto | { id: number }
}
