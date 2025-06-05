import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { UnitGroupCreateDto } from './unit-groups-create'

export class UnitGroupReadDto extends UnitGroupCreateDto {
	id = 0
	counterpartyCompany: CounterpartyCompanyReadDto
	constructor(initialData?: Partial<UnitGroupReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
