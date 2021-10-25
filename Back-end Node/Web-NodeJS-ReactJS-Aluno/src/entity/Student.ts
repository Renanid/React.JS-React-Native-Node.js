import { Column, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class Student{
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;

    @Column()
    ra: string;

    @Column()
    borndate: string;

    @Column()
    adress: string;


    @Column({
        default: true
    })
    active: boolean;

    @Column()
    age: string;
 
    @CreateDateColumn()
    create_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
