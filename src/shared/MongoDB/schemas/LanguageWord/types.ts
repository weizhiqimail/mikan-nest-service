import { Document, Types } from 'mongoose';

import {
  LanguageWordDifficulty,
  LanguageWordPartOfSpeech,
} from '@/shared/mongodb/schemas/LanguageWord/config';

export declare namespace LanguageWordModelTypes {
  interface Model extends Document {
    id: string;
    word: string;
    kana: string;
    partOfSpeech: LanguageWordPartOfSpeech[];
    definition: string;
    sentences: Types.ObjectId[];
    difficulty: LanguageWordDifficulty;
    synonyms: Types.ObjectId[];
    antonyms: Types.ObjectId[];
    relations: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
    remark?: string;
  }

  interface CreateParams {
    word: string;
    kana: string;
    partOfSpeech?: LanguageWordPartOfSpeech[];
    definition?: string;
    sentences?: Types.ObjectId[];
    difficulty?: LanguageWordDifficulty;
    synonyms?: Types.ObjectId[];
    antonyms?: Types.ObjectId[];
    relations?: Types.ObjectId[];
    remark?: string;
  }

  interface UpdateParams {
    id: string;
    word?: string;
    kana?: string;
    partOfSpeech?: LanguageWordPartOfSpeech[];
    definition?: string;
    sentences?: Types.ObjectId[];
    difficulty?: LanguageWordDifficulty;
    synonyms?: Types.ObjectId[];
    antonyms?: Types.ObjectId[];
    relations?: Types.ObjectId[];
    remark?: string;
  }

  interface QueryParams {
    word?: string;
    kana?: string;
  }
}
