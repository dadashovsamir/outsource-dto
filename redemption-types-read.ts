import { CompanyReadDto } from './companies-read'
import { RedemptionTypeCreateDto } from './redemption-types-create'

export class RedemptionTypeReadDto extends RedemptionTypeCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(initialData?: Partial<RedemptionTypeReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
