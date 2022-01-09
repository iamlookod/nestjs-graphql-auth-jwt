import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  @IsString()
  username: string;

  @HideField()
  @IsString()
  password: string;

  @Field(() => String, { nullable: true })
  name?: string | null;
}
