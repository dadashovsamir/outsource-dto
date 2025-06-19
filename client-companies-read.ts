import { CompanyReadDto } from './companies-read'
import { ClientCompanyCreateDto } from './client-companies-create'

export class ClientCompanyReadDto extends ClientCompanyCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(initialData?: Partial<ClientCompanyReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
