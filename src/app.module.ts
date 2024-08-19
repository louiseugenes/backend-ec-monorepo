import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Post } from './entities/post.entity';
import { PostModule } from './services/post/post.module';
import { MemberModule } from './services/member/member.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: 'redis',
      host: 'localhost',
      port: 6379,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'ecapp',
      entities: [Member, Post],
      synchronize: false,
    }),
    MemberModule,
    PostModule,
    TypeOrmModule.forFeature([Member, Post]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
