import { CompanyReadDto } from './companies-read'
import { ProfessionCreateDto } from './professions-create'

export class ProfessionReadDto extends ProfessionCreateDto {
	id: number
	company: CompanyReadDto
}
