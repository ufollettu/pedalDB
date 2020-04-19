import { RequestHandler } from 'express';

import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Pedal from '../../models/Pedal';

const all: RequestHandler = async (req, res) => {
  const pedals = await Pedal.find();
  res.send({ pedals });
};

export default handleErrorMiddleware(all);
