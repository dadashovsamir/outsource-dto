import { PaymentTypeReadDto } from './payment-types-read'
import { PaymentCreateDto } from './payments-create'
import { WorkerReadDto } from './workers-read'

export class PaymentReadDto extends PaymentCreateDto {
	id = 0
	paymentType: PaymentTypeReadDto
	payer: WorkerReadDto
	recipient: WorkerReadDto
	constructor(initialData?: Partial<PaymentReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
