const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(person) {
  const [id] = await db('people').insert(person);
  return await db('people').where({ id }).first();
}

async function update(id, changes) {
  return null;
}

async function remove(id) {
    await db("people")
    .where({ id })
    .delete();
    return db('people');
  }

function getAll() {
  return db('people');
}

async function findById(id) {
  return await db("people")
    .where({ id })
    .first();
}
