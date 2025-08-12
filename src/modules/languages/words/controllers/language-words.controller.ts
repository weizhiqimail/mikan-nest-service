import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import {
  CreateWordDto,
  QueryWordDto,
  UpdateWordDto,
} from '@/modules/languages/words/dto/words.dto';
import { LanguageWordsService } from '@/modules/languages/words/services/language-words.service';

@Controller('languages/words')
export class LanguageWordsController {
  constructor(private readonly languageWordsService: LanguageWordsService) {}

  @ApiOperation({ summary: '查询单词列表' })
  @Get('/queryList')
  async queryWordList(@Query() bodyDto: QueryWordDto) {
    return this.languageWordsService.queryWordList(bodyDto);
  }

  @ApiOperation({ summary: '创建单词' })
  @Post('/create')
  async createWord(@Body() bodyDto: CreateWordDto) {
    return this.languageWordsService.createWord(bodyDto);
  }

  @ApiOperation({ summary: '修改单词' })
  @Post('/update')
  async updateWordById(@Body() bodyDto: UpdateWordDto) {
    return this.languageWordsService.updateWordById(bodyDto);
  }
}
