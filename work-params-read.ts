import { CompanyReadDto } from './companies-read'
import { WorkParamCreateDto } from './work-params-create'

export class WorkParamReadDto extends WorkParamCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(company: CompanyReadDto | { id: number }) {
		super()
		this.company = company
	}
}
