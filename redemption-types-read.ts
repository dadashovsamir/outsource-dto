import { CompanyReadDto } from './companies-read'
import { RedemptionTypeCreateDto } from './redemption-types-create'

export class RedemptionTypeReadDto extends RedemptionTypeCreateDto {
	id = 0
	company: CompanyReadDto
	constructor(company: CompanyReadDto) {
		super()
		this.company = company
	}
}
