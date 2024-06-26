import { UnitPositionReadDto } from './unit-positions-read'
import { RedemptionTypeReadDto } from './redemption-types-read'
import { RedemptionCreateDto } from './redemptions-create'
import { WorkerReadDto } from './workers-read'

export class RedemptionReadDto extends RedemptionCreateDto {
	id = 0
	redemptionType: RedemptionTypeReadDto
	worker: WorkerReadDto
	position: UnitPositionReadDto
}
