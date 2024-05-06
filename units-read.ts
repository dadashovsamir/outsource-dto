import { CompanyReadDto } from './companies-read'
import { UnitCreateDto } from './units-create'

export class UnitReadDto extends UnitCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(company: CompanyReadDto | { id: number }) {
		super()
		this.company = company
	}
}
