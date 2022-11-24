import { PartialType } from '@nestjs/mapped-types'
import { RedemptionCreateDto } from './redemptions-create'

export class RedemptionUpdateDto extends PartialType(RedemptionCreateDto) {}
