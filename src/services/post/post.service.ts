import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../../entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find({ relations: ['member'] });
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({ where: { id }, relations: ['member'] });
  }
}
