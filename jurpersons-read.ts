import { CompanyReadDto } from './companies-read'
import { JurpersonCreateDto } from './jurpersons-create'

export class JurpersonReadDto extends JurpersonCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(initialData?: Partial<JurpersonReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
