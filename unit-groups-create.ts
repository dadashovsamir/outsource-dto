import { ClientCompanyReadDto } from './client-companies-read'

export class UnitGroupCreateDto {
	name: string = ''
	clientCompany: ClientCompanyReadDto | { id: number }
}
