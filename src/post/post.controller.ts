import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller('post')
export class PostController {
  private readonly postService: PostService

  @HttpCode(HttpStatus.OK)
  @Get('')
  getAll() {
    return this.postService.getAllPosts();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.postService.getById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createPostDto: CreatePostDto){
    return this.postService.createPost(createPostDto);
  }


  @Delete(':id')
  remove(@Param('id')id: string){
    return this.postService.removePost('id')
  }

  @Patch(':id')
  update(@Param('id')id: string, @Body() updatePostDto: UpdatePostDto){
    // @ts-ignore
    return this.postService.updatePost(+id, UpdatePostDto);
  }
}