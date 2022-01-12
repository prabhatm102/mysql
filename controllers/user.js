const connection = require("../start/db");

const getUserById = (req, res) => {
  connection.query(
    "SELECT *FROM user WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      if (result.length === 0)
        return res.status(401).send("There is no user of id:" + req.params.id);
      res.send(result[0]);
    }
  );
};

const getUsers = (req, res) => {
  connection.query("SELECT *FROM user", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

const addUsers = (req, res) => {
  connection.query(
    "INSERT INTO user (name) VALUES(?)",
    [req.body.name],
    (err, result) => {
      if (err) throw err;
      connection.query(
        "SELECT *FROM user WHERE id=?",
        [result.insertId],
        (err, result) => {
          if (err) throw err;
          res.send(result[0]);
        }
      );
    }
  );
};

const updateUser = (req, res) => {
  
  connection.query(
    "UPDATE  user set name=? WHERE id=?",
    [req.body.name, req.params.id],
    (err, result) => {
      if (err) throw err;

      if (result.changedRows > 0) {
        connection.query(
          "SELECT *FROM user WHERE id=?",
          [req.params.id],
          (err, result) => {
            if (err) throw err;
            res.send(result[0]);
          }
        );
      } else if (result.affectedRows > 0) {
        res.send("Updated record is same as previous record.");
      } else {
        res.send("There is no user of id:" + req.params.id);
      }
    }
  );
};

const deleteUser = (req, res) => {
  connection.query(
    "DELETE FROM user where id=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0)
        return res.status(401).send("There is no user of id:" + req.params.id);
      res.send("Record has been successfully deleted.");
    }
  );
};
module.exports = {
  getUserById,
  getUsers,
  addUsers,
  updateUser,
  deleteUser,
};
