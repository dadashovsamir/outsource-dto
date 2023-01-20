import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PositionReadDto } from './positions-read'
import { PaymentTypeReadDto } from './payment-types-read'
import { WorkerReadDto } from './workers-read'

export class PaymentCreateDto {
	amount = 0
	date = new Date()
	period = new Date()
	paymentType: PaymentTypeReadDto | { id: number } = { id: 0 }
	worker: WorkerReadDto | { id: number } = { id: 0 }
	//
	payer: WorkerReadDto | { id: number } = { id: 0 }
	position: PositionReadDto | { id: number } = { id: 0 }
	counterpartyUnit: CounterpartyUnitReadDto | { id: number } = { id: 0 }
}
