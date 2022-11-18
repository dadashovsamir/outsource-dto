import { PartialType } from '@nestjs/mapped-types'
import { ContractUpdateDto } from './contracts'
import { ProfessionUpdateDto } from './professions'
import { WorkMeasureUpdateDto } from './work-measures'
import { WorkParamUpdateDto } from './work-params'

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
}
