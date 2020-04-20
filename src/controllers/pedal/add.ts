import { RequestHandler } from "express";

import handleErrorMiddleware from "../../middleware/handle-error-middleware";
import Control, { IControl } from "../../models/Control";
import Pedal, { IPedal } from "../../models/Pedal";
import Resource, { IResource } from "../../models/Resource";

const add: RequestHandler = async (req, res) => {
  const {
    brand,
    name,
    version,
    categories,
    subTypes,
    controls,
    images,
    referenceSound,
    note,
    clonesDIY,
    discontinued,
  } = req.body;

  const resource = new Resource(brand);

  await resource.save();

  // INFO: Bulk insert
  await Control.insertMany(controls);
  await Resource.insertMany(images);

  const pedal = new Pedal({
    brand,
    name,
    version,
    categories,
    subTypes,
    controls,
    images,
    referenceSound,
    note,
    clonesDIY,
    discontinued,
  });

  await pedal.save();

  res.send({
    message: "Saved",
    pedal: pedal.toJSON(),
  });
};

export default handleErrorMiddleware(add);
