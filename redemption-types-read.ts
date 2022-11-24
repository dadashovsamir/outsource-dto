import { CompanyReadDto } from './companies-read'
import { RedemptionTypeCreateDto } from './redemption-types-create'

export class RedemptionTypeReadDto extends RedemptionTypeCreateDto {
	id: number
	company: CompanyReadDto
}
