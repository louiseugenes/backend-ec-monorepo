import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from '../../entities/post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Post> {
    return this.postsService.findOne(Number(id));
  }
}
