import { PartialType } from '@nestjs/mapped-types';
import { ContractCreateDto } from './contracts-create';

export class ContractUpdateDto extends PartialType(ContractCreateDto) {}
