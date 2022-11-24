import { CompanyReadDto } from './companies-read'

export class WorkParamCreateDto {
	name: string
	company: CompanyReadDto | { id: number }
}
