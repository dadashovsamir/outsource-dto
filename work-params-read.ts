import { CompanyReadDto } from './companies-read'
import { WorkParamCreateDto } from './work-params-create'

export class WorkParamReadDto extends WorkParamCreateDto {
	id = 0
	company: CompanyReadDto
	constructor(company: CompanyReadDto) {
		super()
		this.company = company
	}
}
