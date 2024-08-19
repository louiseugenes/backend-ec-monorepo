import { Controller, Get, Param } from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from '../../entities/member.entity';

@Controller('members')
export class MemberController {
  constructor(private readonly membersService: MemberService) {}

  @Get()
  findAll(): Promise<Member[]> {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Member> {
    return this.membersService.findOne(Number(id));
  }
}
