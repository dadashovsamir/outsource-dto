import { CompanyReadDto } from './companies-read'
import { UnitCreateDto } from './units-create'

export class UnitReadDto extends UnitCreateDto {
	id: number
	company: CompanyReadDto
}
