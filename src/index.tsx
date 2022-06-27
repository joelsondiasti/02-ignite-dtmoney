import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

createServer({
  models: { transaction: Model },
 
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de WebSite",
          amount: 6000,
          category: "Dev",
          type: "deposit",
          createdAt: new Date("2022-06-25 09:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1500.3,
          category: "Moradia",
          type: "withdraw",
          createdAt: new Date("2022-06-23 09:00"),
        },
        {
          id: 3,
          title: "Salário de Professor",
          amount: 3000,
          category: "Jobs",
          type: "deposit",
          createdAt: new Date("2022-06-10 15:00"),
        },
      ],
    });
  },
  
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
