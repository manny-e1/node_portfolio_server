import { send } from './contact.service.js';

export async function httpSend(req, res) {
  res.status(250).json(await send(req.body));
}
