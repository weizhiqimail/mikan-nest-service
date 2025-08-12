import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsArray,
  IsMongoId,
} from 'class-validator';

import {
  LanguageWordDifficulty,
  LanguageWordPartOfSpeech,
} from '@/shared/MongoDB/schemas/LanguageWord/config';

// 创建单词 DTO
export class CreateWordDto {
  @IsString()
  @IsNotEmpty()
  word: string;

  @IsString()
  @IsNotEmpty()
  kana: string;

  @IsArray()
  @IsEnum(LanguageWordPartOfSpeech, { each: true })
  @IsOptional()
  partOfSpeech?: LanguageWordPartOfSpeech[];

  @IsString()
  @IsOptional()
  definition?: string;

  @IsEnum(LanguageWordDifficulty)
  @IsOptional()
  difficulty?: LanguageWordDifficulty;

  @IsString()
  @IsOptional()
  remark?: string;
}

// 更新单词 DTO
export class UpdateWordDto {
  @IsString()
  @IsMongoId()
  id: string;

  @IsString()
  @IsOptional()
  word?: string;

  @IsString()
  @IsOptional()
  kana?: string;

  @IsArray()
  @IsEnum(LanguageWordPartOfSpeech, { each: true })
  @IsOptional()
  partOfSpeech?: LanguageWordPartOfSpeech[];

  @IsString()
  @IsOptional()
  definition?: string;

  @IsEnum(LanguageWordDifficulty)
  @IsOptional()
  difficulty?: LanguageWordDifficulty;

  @IsString()
  @IsOptional()
  remark?: string;
}

// 查询单词 DTO
export class QueryWordDto {
  @IsString()
  @IsOptional()
  word?: string;

  @IsString()
  @IsOptional()
  kana?: string;

  @IsOptional()
  pageSize?: number;

  @IsOptional()
  pageNum?: number;
}
