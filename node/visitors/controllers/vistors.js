import db from "../db.js";
import { Visitor } from "../models/visitors.js";

export const createVisitor = (req, res) => {
  db.connect();
  const { name } = req.query;
  const date = Date.now();
  const newVisitor = {};
  newVisitor.name = name || "Anómimo";
  newVisitor.date = date;

  Visitor.create(newVisitor, (err, visitor) => {
    if (err) res.sendStatus(500);
    res.send(`<h1>El visitante fue almacenado con éxito</h1>`);
  });
};
