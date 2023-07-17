const mySQLHelpers = {
  selectFromTable: function (tableName, columnsArray = ["*"]) {
    return `SELECT ${columnsArray.join(", ")} FROM ${tableName};`;
  },
  // and so on, for all the sorts of repetitive SQL queries you might have to write.
};
module.exports = mySQLHelpers