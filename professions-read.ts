import { CompanyReadDto } from './companies-read'
import { ProfessionCreateDto } from './professions-create'

export class ProfessionReadDto extends ProfessionCreateDto {
	id = 0
	company: CompanyReadDto
	constructor(company: CompanyReadDto) {
		super()
		this.company = company
	}
}
