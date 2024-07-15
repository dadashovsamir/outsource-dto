import { CompanyReadDto } from './companies-read'
import { UnitCreateDto } from './units-create'

export class UnitReadDto extends UnitCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(initialData?: Partial<UnitReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
