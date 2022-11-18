import { PartialType } from '@nestjs/mapped-types'
import { CompanyReadDto, CompanyUpdateDto } from './companies'

export class RedemptionTypeCreateDto {
	name: string
	company: CompanyUpdateDto
}

export class RedemptionTypeUpdateDto extends PartialType(
	RedemptionTypeCreateDto
) {}

export class RedemptionTypeReadDto extends RedemptionTypeCreateDto {
	id: number
	company: CompanyReadDto
}
