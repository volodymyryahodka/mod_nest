import { Injectable } from '@nestjs/common';
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdateUserDto } from "../user/dto/update-user.dto";

@Injectable()
export class PostService {
  private posts = [];

  getAllPosts() {
    return this.posts;
  }

  getById(id: string) {
    return this.posts.find((post) => post.id == id)
  }

  createPost(postDto: CreatePostDto){
    this.posts.push({
      ...CreatePostDto,
      id: new Date().valueOf()
    })
    return postDto
  }

  removePost(id: string) {
    return this.removePost(id)
  }

  updatePost(id: string, postDto: UpdateUserDto){
    return this.posts.find((post) => post.id == id)
  }
}
