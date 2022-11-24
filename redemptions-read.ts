import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PositionReadDto } from './positions-read'
import { RedemptionTypeReadDto } from './redemption-types-read'
import { RedemptionCreateDto } from './redemptions-create'
import { WorkerReadDto } from './workers-read'

export class RedemptionReadDto extends RedemptionCreateDto {
	id: number
	redemptionType: RedemptionTypeReadDto
	worker: WorkerReadDto
	position: PositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
}
