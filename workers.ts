import { PartialType } from '@nestjs/mapped-types'
import { UnitUpdateDto } from './units'
import { WorkParamUpdateDto } from './work-params'

export class WorkerCreateDto {
	name: string
	phone: string
	birthday: Date
	addressResidence: string
	addressRegistration: string
	passport: string
	paymentDetails: string
	comment: string
	workParams: WorkParamUpdateDto[]
	unit: UnitUpdateDto
}

export class WorkerUpdateDto extends PartialType(WorkerCreateDto) {}

export class WorkerReadDto extends WorkerCreateDto {
	id: number
}
