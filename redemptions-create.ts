import { CounterpartyUnitPositionReadDto } from './counterparty-unit-positions-read'
import { RedemptionTypeReadDto } from './redemption-types-read'
import { WorkerReadDto } from './workers-read'

export class RedemptionCreateDto {
	amount: number
	date: Date
	period: Date
	redemptionType: RedemptionTypeReadDto | { id: number }
	worker: WorkerReadDto | { id: number }
	position: CounterpartyUnitPositionReadDto | { id: number }
	comment = ''
}
