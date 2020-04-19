import {
  Document, Model, Schema, model
} from 'mongoose';

export interface IResource extends Document {
  type: 'brand' | 'image' | 'diy';
  name: string;
  url: string;
}

interface IResourceModel extends Model<IResource> {}

const schema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true }
});

const Resource: IResourceModel = model<IResource, IResourceModel>('Resource', schema);

export default Resource;
