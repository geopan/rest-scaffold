import { Router } from 'express';
import SnapRouter from './Snap';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/snaps', SnapRouter);

// Export the base-router
export default router;