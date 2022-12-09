import { CompanyReadDto } from './companies-read'
import { JurpersonCreateDto } from './jurpersons-create'

export class JurpersonReadDto extends JurpersonCreateDto {
	id = 0
	company: CompanyReadDto
	constructor(company: CompanyReadDto) {
		super()
		this.company = company
	}
}
