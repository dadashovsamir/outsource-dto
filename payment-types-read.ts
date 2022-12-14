import { CompanyReadDto } from './companies-read';
import { PaymentTypeCreateDto } from './payment-types-create';

export class PaymentTypeReadDto extends PaymentTypeCreateDto {
  id = 0;
  company: CompanyReadDto;
  constructor(company: CompanyReadDto) {
    super();
    this.company = company;
  }
}
