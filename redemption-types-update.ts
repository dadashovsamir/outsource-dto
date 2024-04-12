import { PartialType } from '@nestjs/mapped-types'
import { RedemptionTypeCreateDto } from './redemption-types-create'

export class RedemptionTypeUpdateDto extends PartialType(
	RedemptionTypeCreateDto,
) {}
