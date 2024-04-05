import { ContractCreateDto } from './contracts-create';
import { JurpersonReadDto } from './jurpersons-read';

export class ContractReadDto extends ContractCreateDto {
  id = 0;
  jurperson: JurpersonReadDto;
}
