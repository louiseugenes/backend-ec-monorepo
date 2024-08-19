import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../../entities/member.entity';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [TypeOrmModule.forFeature([Member]),
  CacheModule.register()],
  providers: [MemberService],
  controllers: [MemberController],
})
export class MemberModule {}
