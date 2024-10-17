import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService {
  private readonly client: Redis;
  
  constructor(private configService: ConfigService) {
    this.client = new Redis({
      host: this.configService.get<string>('REDIS_HOST'),
      port: this.configService.get<number>('REDIS_PORT'),
      password: this.configService.get<string>('REDIS_PASSWORD'),
    });
  }
  
  // 设置键值
  async set(key: string, value: string, expirationInSeconds?: number): Promise<string> {
    if (expirationInSeconds) {
      return this.client.set(key, value, 'EX', expirationInSeconds);
    }
    return this.client.set(key, value);
  }
  
  // 获取值
  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }
  
  // 删除键
  async del(key: string): Promise<number> {
    return this.client.del(key);
  }
  
  // 检查键是否存在
  async exists(key: string): Promise<number> {
    return this.client.exists(key);
  }
  
  // 增加键的值
  async increment(key: string, amount: number = 1): Promise<number> {
    return this.client.incrby(key, amount);
  }
  
  // 减少键的值
  async decrement(key: string, amount: number = 1): Promise<number> {
    return this.client.decrby(key, amount);
  }
  
  // 列出所有匹配的键
  async keys(pattern: string): Promise<string[]> {
    return this.client.keys(pattern);
  }
  
  // 清空 Redis 数据库
  async flushdb(): Promise<string> {
    return this.client.flushdb();
  }
  
  // 关闭 Redis 客户端
  async quit(): Promise<void> {
    await this.client.quit();
  }
}
