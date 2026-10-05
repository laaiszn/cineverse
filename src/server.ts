import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ mensagem: "CineVerse API funcionando!" });
});

app.get("/movies/trending", async (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  res.json(dados);
});

app.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});