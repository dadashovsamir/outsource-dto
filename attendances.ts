import { PartialType } from '@nestjs/mapped-types'
import { CounterpartyUnitUpdateDto } from './counterparty-units'
import { PositionUpdateDto } from './positions'
import { WorkerUpdateDto } from './workers'

export class AttendanceCreateDto {
	amount: number
	date: Date
	worker: WorkerUpdateDto
	position: PositionUpdateDto
	counterpartyUnit: CounterpartyUnitUpdateDto
}

export class AttendanceUpdateDto extends PartialType(AttendanceCreateDto) {}

export class AttendanceReadDto extends AttendanceCreateDto {
	id: number
}
