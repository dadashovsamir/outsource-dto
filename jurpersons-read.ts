import { CompanyReadDto } from './companies-read'
import { JurpersonCreateDto } from './jurpersons-create'

export class JurpersonReadDto extends JurpersonCreateDto {
	id: number
	company: CompanyReadDto
}
