import { PartialType } from '@nestjs/mapped-types'
import { PricePositionCreateDto } from './price-positions-create'

export class PricePositionUpdateDto extends PartialType(
  PricePositionCreateDto,
) {}
