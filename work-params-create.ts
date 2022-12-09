import { CompanyReadDto } from './companies-read'

export class WorkParamCreateDto {
	name = ''
	company: CompanyReadDto | { id: number }
}
