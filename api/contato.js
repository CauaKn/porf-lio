export default function handler(req, res) {
  if (req.method === "POST") {
    const { nome, email, mensagem } = req.body;

    console.log("Novo contato:");
    console.log(nome, email, mensagem);

    return res.status(200).json({
      sucesso: true,
      message: "Mensagem recebida!"
    });
  }

  return res.status(405).json({ message: "Método não permitido" });
}