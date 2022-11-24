import { CompanyReadDto } from './companies-read'

export class RoleCreateDto {
	name: string
	company: CompanyReadDto | { id: number }
}
