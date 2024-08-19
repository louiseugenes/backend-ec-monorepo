import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../../entities/member.entity';
import { Cache } from 'cache-manager';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
  ) {}

  async findAll(): Promise<Member[]> {
    let members = await this.cacheManager.get<Member[]>('members');

    if (!members) {
      members = await this.memberRepository.find();
      await this.cacheManager.set('members', members, 1000);
    }

    return members;
  }

  findOne(id: number): Promise<Member> {
    return this.memberRepository.findOne({ where: { id } });
  }
}
