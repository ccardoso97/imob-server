import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

export class Order {
  id?: string;
  user?: User;
  products?: Product[];
  createdAt?: Date;
  updatedAt?: Date;
}
