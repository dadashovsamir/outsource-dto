import { PartialType } from '@nestjs/mapped-types';
import { ContractPositionCreateDto } from './contract-positions-create';

export class ContractPositionUpdateDto extends PartialType(
  ContractPositionCreateDto,
) {}
