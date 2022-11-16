import { PartialType } from '@nestjs/mapped-types'
import { CompanyUpdateDto } from './companies'

export class ProfessionCreateDto {
	name: string
	company: CompanyUpdateDto
}

export class ProfessionUpdateDto extends PartialType(ProfessionCreateDto) {}
