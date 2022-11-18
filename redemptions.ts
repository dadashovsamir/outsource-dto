import { PartialType } from '@nestjs/mapped-types'
import { CounterpartyUnitUpdateDto } from './counterparty-units'
import { PositionUpdateDto } from './positions'
import { RedemptionTypeUpdateDto } from './redemption-types'
import { WorkerUpdateDto } from './workers'

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
}
