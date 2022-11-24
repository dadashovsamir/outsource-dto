import { CompanyReadDto } from './companies-read'

export class JurpersonCreateDto {
	name: string = ''
	address: string = ''
	bankDetails: string = ''
	company: CompanyReadDto | { id: number }
	constructor(company: CompanyReadDto) {
		this.company = company
	}
}
