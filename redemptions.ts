import { PartialType } from '@nestjs/mapped-types'
import {
	CounterpartyUnitReadDto,
	CounterpartyUnitUpdateDto
} from './counterparty-units'
import { PositionReadDto, PositionUpdateDto } from './positions'
import {
	RedemptionTypeReadDto,
	RedemptionTypeUpdateDto
} from './redemption-types'
import { WorkerReadDto, WorkerUpdateDto } from './workers'

export class RedemptionCreateDto {
	amount: number
	date: Date
	period: Date
	redemptionType: RedemptionTypeUpdateDto
	worker: WorkerUpdateDto
	position: PositionUpdateDto
	counterpartyUnit: CounterpartyUnitUpdateDto
}

export class RedemptionUpdateDto extends PartialType(RedemptionCreateDto) {}

export class RedemptionReadDto extends RedemptionCreateDto {
	id: number
	redemptionType: RedemptionTypeReadDto
	worker: WorkerReadDto
	position: PositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
}
