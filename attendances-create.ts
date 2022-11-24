export class AttendanceCreateDto {
	amount: number
	date: Date
	worker: WorkerUpdateDto
	position: PositionUpdateDto
	counterpartyUnit: CounterpartyUnitUpdateDto
}
