import { CompanyReadDto } from './companies-read'
import { WorkParamCreateDto } from './work-params-create'

export class WorkParamReadDto extends WorkParamCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(initialData?: Partial<WorkParamReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
