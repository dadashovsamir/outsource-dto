import { PartialType } from '@nestjs/mapped-types'
import { PriceGroupCreateDto } from './price-groups-create'

export class PriceGroupUpdateDto extends PartialType(PriceGroupCreateDto) {}
