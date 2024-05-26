console.info(`Hello test2`);

// session.consult(`likes(sam, salad).`);
var session = pl.create();

// const program = `
//   likes(sam, salad).
//   likes(dean, pie).
//   likes(sam, apples).
//   likes(dean, whiskey).
// `;

// session.consult(program);

// document.getElementById('do_query').onclick = function() {
//   const query = document.getElementById('prolog_query').value;
//   if (!query) return;
//   do_query(query);
// };

async function do_query(goal) {
  // Query:
  await session.promiseQuery(goal);
  // Answer:
  const answers = [];
  for await (const answer of session.promiseAnswers()) {
    // console.info(session.format_answer(answer));
    answers.push(session.format_answer(answer));
  }

  const textarea = document.getElementById("prolog_answers");
  textarea.textContent = answers.join("\n");
}

async function _test2_program() {
  const goal = `likes(sam, X).`;
  // Consult:
  await session.promiseConsult(program);

  do_query(goal);
}
// _test2_program();
