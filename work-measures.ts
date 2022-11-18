import { PartialType } from '@nestjs/mapped-types'
import { CompanyReadDto, CompanyUpdateDto } from './companies'

export class WorkMeasureCreateDto {
	shortName: string
	fullName: string
	company: CompanyUpdateDto
}

export class WorkMeasureUpdateDto extends PartialType(WorkMeasureCreateDto) {}

export class WorkMeasureReadDto extends WorkMeasureCreateDto {
	id: number
	company: CompanyReadDto
}
