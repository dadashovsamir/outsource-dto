import { UnitPositionReadDto } from './unit-positions-read'
import { RedemptionTypeReadDto } from './redemption-types-read'
import { WorkerReadDto } from './workers-read'

export class RedemptionCreateDto {
	amount: number
	date: Date
	period: Date
	redemptionType: RedemptionTypeReadDto | { id: number }
	worker: WorkerReadDto | { id: number }
	position: UnitPositionReadDto | { id: number }
	comment = ''
}
