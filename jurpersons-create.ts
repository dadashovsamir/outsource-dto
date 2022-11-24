import { CompanyReadDto } from './companies-read'

export class JurpersonCreateDto {
	name: string = ''
	address: string = ''
	bankDetails: string = ''
	company: CompanyReadDto | { id: number } = { id: 0 }
}
