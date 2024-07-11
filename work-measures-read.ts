import { CompanyReadDto } from './companies-read'
import { WorkMeasureCreateDto } from './work-measures-create'

export class WorkMeasureReadDto extends WorkMeasureCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(initialData?: Partial<WorkMeasureReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
