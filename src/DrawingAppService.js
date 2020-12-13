const DrawingAppService = {
    getAllArts(knex) {
      return knex
      .select("*")
      .from("arts");
    },
  
    insertArt(knex, newArt) {
      return knex
      .insert(newArt)
      .into("arts")
      .returning("*")
      .then(rows => {
        return rows[0]
      });
    },
  };
  
  module.exports = DrawingAppService;