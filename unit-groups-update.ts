import { PartialType } from '@nestjs/mapped-types'
import { UnitGroupCreateDto } from './unit-groups-create'

export class UnitGroupUpdateDto extends PartialType(UnitGroupCreateDto) {}
