const DrawingAppService = {
    getAllArts(knex) {
      return knex
      .select("*")
      .from("arts");
    },
    getRecentArts(knex){
      return knex
      .select("*")
      .from("arts")
      .whereRaw("arts.dateadded > (now() - interval '7 days')");
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