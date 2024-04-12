import { CompanyReadDto } from './companies-read'

export class PaymentTypeCreateDto {
	name = ''
	company: CompanyReadDto | { id: number }
}
