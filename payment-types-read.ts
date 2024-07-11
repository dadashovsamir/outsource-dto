import { CompanyReadDto } from './companies-read'
import { PaymentTypeCreateDto } from './payment-types-create'

export class PaymentTypeReadDto extends PaymentTypeCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(initialData?: Partial<PaymentTypeReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
