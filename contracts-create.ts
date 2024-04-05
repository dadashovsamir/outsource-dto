import { JurpersonReadDto } from './jurpersons-read';

export class ContractCreateDto {
  name: string = '';
  date: Date = new Date();
  jurperson: JurpersonReadDto | { id: number } = { id: 0 };
}
