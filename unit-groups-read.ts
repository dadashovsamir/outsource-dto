import { ClientCompanyReadDto } from './client-companies-read'
import { UnitGroupCreateDto } from './unit-groups-create'

export class UnitGroupReadDto extends UnitGroupCreateDto {
	id = 0
	clientCompany: ClientCompanyReadDto
	constructor(initialData?: Partial<UnitGroupReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
