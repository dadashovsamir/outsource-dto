import { PartialType } from '@nestjs/mapped-types'
import { CompanyUpdateDto } from './companies'

export class WorkParamCreateDto {
	name: string
	company: CompanyUpdateDto
}

export class WorkParamUpdateDto extends PartialType(WorkParamCreateDto) {}

export class WorkParamReadDto extends WorkParamCreateDto {
	id: number
}
