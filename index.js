const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Use a porta fornecida pelo Render

server.use(middlewares);
server.use(router);

// Escute na porta e exiba uma mensagem ao iniciar
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
