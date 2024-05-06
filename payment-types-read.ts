import { CompanyReadDto } from './companies-read'
import { PaymentTypeCreateDto } from './payment-types-create'

export class PaymentTypeReadDto extends PaymentTypeCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(company: CompanyReadDto | { id: number }) {
		super()
		this.company = company
	}
}
