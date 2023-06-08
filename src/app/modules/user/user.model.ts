import { model, Model, Schema } from 'mongoose';
import { IUser } from './user.interface';

export type UserModel = Model<IUser, object>;

export const userSchema = new Schema<IUser, UserModel>({
  id: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model<IUser, UserModel>('User', userSchema);
