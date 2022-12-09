import { CompanyReadDto } from './companies-read'

export class UnitCreateDto {
	name = ''
	address = ''
	company: CompanyReadDto | { id: number }
}
