import { CompanyReadDto } from './companies-read'
import { WorkMeasureCreateDto } from './work-measures-create'

export class WorkMeasureReadDto extends WorkMeasureCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(company: CompanyReadDto | { id: number }) {
		super()
		this.company = company
	}
}
