import mongoose, { HydratedDocument } from 'mongoose';
import { POST_STATUS } from 'src/config/type';
export type PostDocument = HydratedDocument<Post>;
export declare class Post {
    owner: mongoose.Schema.Types.ObjectId;
    groupId: mongoose.Schema.Types.ObjectId;
    content: string;
    images: Array<string>;
    isLockComment: boolean;
    status: POST_STATUS;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, mongoose.Document<unknown, any, Post> & Post & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Post, mongoose.Document<unknown, {}, mongoose.FlatRecord<Post>> & mongoose.FlatRecord<Post> & {
    _id: mongoose.Types.ObjectId;
}>;
