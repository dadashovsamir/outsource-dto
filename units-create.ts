import { CompanyReadDto } from './companies-read'

export class UnitCreateDto {
	name: string
	address: string
	company: CompanyReadDto | { id: number }
}
