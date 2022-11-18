import { PartialType } from '@nestjs/mapped-types'
import { ContractReadDto, ContractUpdateDto } from './contracts'
import { ProfessionReadDto, ProfessionUpdateDto } from './professions'
import { WorkMeasureReadDto, WorkMeasureUpdateDto } from './work-measures'
import { WorkParamReadDto, WorkParamUpdateDto } from './work-params'

export class PositionCreateDto {
	serviceName: string
	internalRate: number
	externalRate: number
	profession: ProfessionUpdateDto
	workMeasure: WorkMeasureUpdateDto
	contract: ContractUpdateDto
	workParams: WorkParamUpdateDto[]
}

export class PositionUpdateDto extends PartialType(PositionCreateDto) {}

export class PositionReadDto extends PositionCreateDto {
	id: number
	profession: ProfessionReadDto
	workMeasure: WorkMeasureReadDto
	contract: ContractReadDto
	workParams: WorkParamReadDto[]
}
