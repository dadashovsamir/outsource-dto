import { CompanyReadDto } from './companies-read'

export class WorkMeasureCreateDto {
	shortName = ''
	fullName = ''
	company: CompanyReadDto | { id: number }
}
