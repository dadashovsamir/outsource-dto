import { CompanyReadDto } from './companies-read'

export class JurpersonCreateDto {
	name = ''
	address = ''
	bankDetails = ''
	company: CompanyReadDto | { id: number }
}
