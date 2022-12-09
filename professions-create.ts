import { CompanyReadDto } from './companies-read'

export class ProfessionCreateDto {
	name: string = ''
	company: CompanyReadDto | { id: number }
}
