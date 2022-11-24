import { PartialType } from '@nestjs/mapped-types'
import { PositionCreateDto } from './positions-create'

export class PositionUpdateDto extends PartialType(PositionCreateDto) {}
