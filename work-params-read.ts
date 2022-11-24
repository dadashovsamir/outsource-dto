import { CompanyReadDto } from './companies-read'
import { WorkParamCreateDto } from './work-params-create'

export class WorkParamReadDto extends WorkParamCreateDto {
	id: number
	company: CompanyReadDto | { id: number }
}
