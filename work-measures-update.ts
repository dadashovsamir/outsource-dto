import { PartialType } from '@nestjs/mapped-types'
import { WorkMeasureCreateDto } from './work-measures-create'

export class WorkMeasureUpdateDto extends PartialType(WorkMeasureCreateDto) {}
