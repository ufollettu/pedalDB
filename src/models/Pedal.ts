import {
  Document, Model, Schema, model
} from 'mongoose';

import { IControl } from './Control';
import { IResource } from './Resource';

export interface IPedal extends Document {
  brand: IResource;
  name: string;
  version: string
  categories: string[];
  subTypes: string[];
  controls? : IControl[];
  images?: IResource[];
  referenceSound?: string
  note?: string
  clonesDIY?: IResource[];
  discontinued: boolean;
}

interface IPedalModel extends Model<IPedal> { }

const schema = new Schema({
  brand: { type: Object, required: true },
  name: { type: String, required: true },
  version: { type: String, required: true },
  categories: { type: Array, required: true },
  subTypes: { type: Array, required: true },
  controls: { type: Array, required: false },
  images: { type: Array, required: false },
  referenceSound: { type: String, required: false },
  note: { type: String, required: false },
  clonesDIY: { type: Array, required: false },
  discontinued: { type: Boolean, required: true }
});

const Pedal: IPedalModel = model<IPedal, IPedalModel>('Pedal', schema);

export default Pedal;
