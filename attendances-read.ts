import { AttendanceCreateDto } from './attendances-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceReadDto extends AttendanceCreateDto {
	id = 0
	worker: WorkerReadDto
	position: UnitPositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
}
