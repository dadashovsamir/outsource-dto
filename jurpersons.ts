import { PartialType } from '@nestjs/mapped-types'
import { CompanyUpdateDto } from './companies'

export class JurpersonCreateDto {
	name: string
	address: string
	bankDetails: string
	company: CompanyUpdateDto
}

export class JurpersonUpdateDto extends PartialType(JurpersonCreateDto) {}

export class JurpersonReadDto extends JurpersonCreateDto {
	id: number
}
