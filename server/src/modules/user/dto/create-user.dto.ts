/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  constructor(username: string, email: string, password: string) {
    this.username = username ?? '';
    this.email = email ?? '';
    this.password = password ?? '';
  }
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username should not be empty' })
  username: string;
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;
}
