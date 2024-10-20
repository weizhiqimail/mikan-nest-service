import * as uuid from 'uuid';

export function generateUUID(): string {
  return uuid.v4();
}

export function safeJSONParse(value: any) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}
