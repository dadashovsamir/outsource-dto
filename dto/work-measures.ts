import { PartialType } from '@nestjs/mapped-types'
import { CompanyUpdateDto } from './companies'

export class WorkMeasureCreateDto {
	shortName: string
	fullName: string
	company: CompanyUpdateDto
}

export class WorkMeasureUpdateDto extends PartialType(WorkMeasureCreateDto) {}
