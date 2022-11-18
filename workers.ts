import { PartialType } from '@nestjs/mapped-types'
import { UnitReadDto, UnitUpdateDto } from './units'
import { WorkParamReadDto, WorkParamUpdateDto } from './work-params'

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
	workParams: WorkParamReadDto[]
	unit: UnitReadDto
}
