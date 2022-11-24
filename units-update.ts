import { PartialType } from '@nestjs/mapped-types'
import { UnitCreateDto } from './units-create'

export class UnitUpdateDto extends PartialType(UnitCreateDto) {}
