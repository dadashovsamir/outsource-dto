import { CompanyReadDto } from './companies-read'

export class RedemptionTypeCreateDto {
	name = ''
	company: CompanyReadDto | { id: number }
}
