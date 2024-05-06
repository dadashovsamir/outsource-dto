import { CompanyReadDto } from './companies-read'
import { ProfessionCreateDto } from './professions-create'

export class ProfessionReadDto extends ProfessionCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(company: CompanyReadDto | { id: number }) {
		super()
		this.company = company
	}
}
