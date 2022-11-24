export class AttendanceReadDto extends AttendanceCreateDto {
	id: number
	worker: WorkerReadDto
	position: PositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
}
