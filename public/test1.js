console.info(`Hello test1`);

// session.consult(`likes(sam, salad).`);
var session = pl.create();

// Consult:
session.consult(`
  likes(sam, salad).
  likes(dean, pie).
  likes(sam, apples).
  likes(dean, whiskey).
`, {
  // Query:
  success: function() {
    console.log('program loaded correctly');
    session.query(`likes(sam, X).`, {
      success: function(goal) {
        // Answer:
        // console.log('goal success:', goal);
        session.answer({
          success: function (answer) {
            console.log('answer:', answer, session.format_answer(answer));
          },
        });
      },
    })
  },
  error: function(err) {
    console.log(err);
  }
});
