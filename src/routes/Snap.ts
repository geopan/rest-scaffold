
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

import SnapCtrl from '@ctrl/Snap/SnapCtrl.mock';
import { paramMissingError } from '@shared/constants';

// Init shared
const router = Router();
const snapCtrl = new SnapCtrl();


/******************************************************************************
 *                      Get All Snaps - "GET /api/snaps/all"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
  const snaps = await snapCtrl.getAll();
  return res.status(OK).json({ snaps });
});


/******************************************************************************
 *                       Add One - "POST /api/snaps/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
  const { snap } = req.body;
  if (!snap) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  await snapCtrl.add(snap);
  return res.status(CREATED).end();
});


/******************************************************************************
 *                       Update - "PUT /api/snaps/update"
 ******************************************************************************/

router.put('/update', async (req: Request, res: Response) => {
  const { snap } = req.body;
  if (!snap) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  snap.id = Number(snap.id);
  await snapCtrl.update(snap);
  return res.status(OK).end();
});


/******************************************************************************
 *                    Delete - "DELETE /api/snaps/delete/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await snapCtrl.delete(Number(id));
  return res.status(OK).end();
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;