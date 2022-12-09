import { CompanyReadDto } from './companies-read'
import { WorkMeasureCreateDto } from './work-measures-create'

export class WorkMeasureReadDto extends WorkMeasureCreateDto {
	id = 0
	company: CompanyReadDto
	constructor(company: CompanyReadDto) {
		super()
		this.company = company
	}
}
