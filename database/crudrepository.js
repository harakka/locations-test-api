let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

module.exports = {
  findAll: () => {
    return database;
  },

  findById: (id) => {
    return database.filter((entry) => entry.id == id);
  },

  deleteById: (id) => {
    let index = database.findIndex((entry) => entry.id == id);
    if (index === -1) return false;

    database.splice(index, 1);
    return true;
  },
};
