import type { NextApiRequest, NextApiResponse } from "next";


export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { login, senha } = req.body;

    if (login === 'admin@admin.com' && senha === 'admin123') {
      res.status(200).json({msg: "Usuario autenticado com sucesso" });
    }
    return res.status(400).json({ error: "Usuario ou senha nao encontrado" });
  }
  
  return res.status(405).json({ error: "Metodo informado nao e valido" });
}