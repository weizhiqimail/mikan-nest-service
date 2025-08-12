import { Document, Types } from 'mongoose';

export declare namespace LanguageSentenceModelTypes {
  interface Model extends Document {
    id: string;
    sentence: string;
    definition: string;
    words: Types.ObjectId[];
    remark?: string;
  }
}
