import { PriceCreateDto } from './prices-create'
import { ClientUnitReadDto } from './client-units-read'

export class PriceReadDto extends PriceCreateDto {
	id = 0
	clientUnit?: ClientUnitReadDto
	constructor(initialData?: Partial<PriceReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
