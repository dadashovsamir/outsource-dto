import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceCreateDto {
	amount: number
	date: Date
	worker: WorkerReadDto | { id: number }
	position: UnitPositionReadDto | { id: number }
	counterpartyUnit: CounterpartyUnitReadDto | { id: number }
}
