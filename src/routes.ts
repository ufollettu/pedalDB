import { Router } from 'express';

import swaggerUi from 'swagger-ui-express';

import apiSpec from '../openapi.json';

import * as PedalController from './controllers/pedal';

const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const router = Router();

// Pedal routes
router.post('/pedal/add', PedalController.add);
router.get('/pedal/all', PedalController.all);
router.get('/pedal/search', PedalController.search);

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));
}

export default router;
