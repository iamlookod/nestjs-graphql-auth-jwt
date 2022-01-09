import { ObjectType, Field, HideField } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  @IsString()
  username: string;

  @HideField()
  @IsString()
  password: string;

  @Field(() => String, { nullable: true })
  name?: string | null;
}
