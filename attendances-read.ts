import { AttendanceCreateDto } from './attendances-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PositionReadDto } from './positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceReadDto extends AttendanceCreateDto {
	id: number
	worker: WorkerReadDto
	position: PositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
}
