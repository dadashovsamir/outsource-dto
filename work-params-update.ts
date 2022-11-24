import { PartialType } from '@nestjs/mapped-types'
import { WorkParamCreateDto } from './work-params-create'

export class WorkParamUpdateDto extends PartialType(WorkParamCreateDto) {}
