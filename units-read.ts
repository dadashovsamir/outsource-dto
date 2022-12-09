import { CompanyReadDto } from './companies-read'
import { UnitCreateDto } from './units-create'

export class UnitReadDto extends UnitCreateDto {
	id = 0
	company: CompanyReadDto
	constructor(company: CompanyReadDto) {
		super()
		this.company = company
	}
}
