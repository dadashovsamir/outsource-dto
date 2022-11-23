import { PartialType } from '@nestjs/mapped-types'
import { CompanyReadDto, CompanyUpdateDto } from './companies'

export class JurpersonCreateDto {
	name: string = ''
	address: string = ''
	bankDetails: string = ''
	company: CompanyUpdateDto
	constructor(company: CompanyUpdateDto) {
		this.company = company
	}
}

export class JurpersonUpdateDto extends PartialType(JurpersonCreateDto) {}

export class JurpersonReadDto extends JurpersonCreateDto {
	id: number
	company: CompanyReadDto
}
