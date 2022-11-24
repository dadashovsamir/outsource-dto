import { CompanyReadDto } from './companies-read'

export class WorkMeasureCreateDto {
	shortName: string
	fullName: string
	company: CompanyReadDto | { id: number }
}
