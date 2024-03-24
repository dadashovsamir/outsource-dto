import { PaymentTypeReadDto } from './payment-types-read'
import { WorkerReadDto } from './workers-read'

export class PaymentCreateDto {
	amount = 0
	date = new Date()
	period = new Date()
	paymentType: PaymentTypeReadDto | { id: number } = { id: 0 }
	payer: WorkerReadDto | { id: number } = { id: 0 }
	recipient: WorkerReadDto | { id: number } = { id: 0 }
	comment = ''
}
