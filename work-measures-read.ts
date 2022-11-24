import { CompanyReadDto } from './companies-read'
import { WorkMeasureCreateDto } from './work-measures-create'

export class WorkMeasureReadDto extends WorkMeasureCreateDto {
	id: number
	company: CompanyReadDto | { id: number }
}
