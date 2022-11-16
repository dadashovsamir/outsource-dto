import { PartialType } from '@nestjs/mapped-types'
import { CompanyUpdateDto } from './companies'

export class RedemptionTypeCreateDto {
	name: string
	company: CompanyUpdateDto
}

export class RedemptionTypeUpdateDto extends PartialType(
	RedemptionTypeCreateDto
) {}
