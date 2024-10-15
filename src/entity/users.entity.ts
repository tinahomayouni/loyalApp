import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;



    

    @Column({ unique: true })
    @IsEmail()
    email: string;

    @Column()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}