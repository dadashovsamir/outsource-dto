import { PartialType } from '@nestjs/mapped-types'
import {
	CounterpartyUnitReadDto,
	CounterpartyUnitUpdateDto
} from './counterparty-units'
import { PositionReadDto, PositionUpdateDto } from './positions'
import { WorkerReadDto, WorkerUpdateDto } from './workers'

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
	worker: WorkerReadDto
	position: PositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
}
