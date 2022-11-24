import { CompanyCreateDto } from './companies-create'

export class ProfessionCreateDto {
	name: string
	company: CompanyCreateDto | { id: number }
}
