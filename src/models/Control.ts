import {
  Document, Model, Schema, model
} from 'mongoose';

export interface IControl extends Document {
  type: 'knob' | 'switch' | 'footswitch';
  name: string;
  description: string;
}

interface IControlModel extends Model<IControl> {}

const schema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const Control: IControlModel = model<IControl, IControlModel>('Control', schema);

export default Control;
