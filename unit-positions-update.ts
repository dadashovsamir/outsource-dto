import { PartialType } from '@nestjs/mapped-types'
import { UnitPositionCreateDto } from './unit-positions-create'

export class UnitPositionUpdateDto extends PartialType(UnitPositionCreateDto) {}
