import { PartialType } from '@nestjs/mapped-types'
import { PriceCreateDto } from './prices-create'

export class PriceUpdateDto extends PartialType(PriceCreateDto) {}
