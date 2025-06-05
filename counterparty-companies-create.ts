import { CompanyReadDto } from './companies-read'

export class ClientCompanyCreateDto {
	name = ''
	company: CompanyReadDto | { id: number }
}
