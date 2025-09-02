import { Module, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostRepository } from "./post.repository";
import { PostController } from "./post.controller";

@Module({
    controllers: [PostController],
    providers: [PostService,PostRepository],
})
export class PostModule {}