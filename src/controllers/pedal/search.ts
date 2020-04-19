import { RequestHandler } from 'express';

import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Pedal from '../../models/Pedal';

/**
 * Builds a mongoose query object to search Pedals according to Pedal name and author name.
 * @param name String containing the Pedal name or part of the Pedal's name
 * @param author String containing the author name or part of the author's name
 */
const buildPedalSeachQuery = (name: any, author: any) => {
  const query: any = {};
  if (name) {
    query.name = new RegExp(`.*${name}.*`, 'i');
  }
  if (author) {
    query.author = new RegExp(`.*${author}.*`, 'i');
  }

  return query;
};

const get: RequestHandler = async (req, res) => {
  const { name, author } = req.query;

  const query = buildPedalSeachQuery(name, author);
  const pedals = await Pedal.find(query);
  res.send({ pedals });
};

export default handleErrorMiddleware(get);
