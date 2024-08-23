import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class UserTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  firstname: string;

  @Column({
    type: 'text',
  })
  lastname: string;

  @Column({
    type: 'text',
  })
  email: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isDelete: boolean;

  // TODO: Incluir la relación con los producto

  // @OneToMany()
  // products: ProductTypeOrmEntity[];

  @CreateDateColumn()
  createdAt: Date;
}
