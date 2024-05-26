'use client';

import { useState, useMemo, ChangeEvent } from "react";

declare const pl: any;   // typeof import('tau-prolog');
declare const session: any;


const InitProgram = `
likes(sam, salad).
likes(dean, pie).
likes(sam, apples).
likes(dean, whiskey).
`;

// can I pub it?
export function Content() {
  const [program, setProgram] = useState(InitProgram.trim());
  const [query, setQueryText] = useState('likes(sam, X).');
  const [result, setResult] = useState('');
  const doQuery = async () => {
    // console.info('do query:', { program, query });
    // Consult:
    await session.promiseConsult(program);
    // Query:
    await session.promiseQuery(query);
    // Answers:
    const answers = [];
    for await (const ans of session.promiseAnswers()) {
      // console.info(session.format_answer(answer));
      answers.push(session.format_answer(ans));
    }
    if (answers.length > 0)
      setResult(answers.join('\n'));
    else 
      setResult('% No answers.');
  };

  const FNs = useMemo(() => ({
    programChanged: (event: ChangeEvent<HTMLTextAreaElement>) => {
      setProgram(event.target.value);
    },
    queryChanged: (event: ChangeEvent<HTMLInputElement>) => {
      setQueryText(event.target.value);
    },
  }), []);

  return (
    <section>
      <div>Program:</div>
      <textarea rows={8} cols={100} value={program} onChange={FNs.programChanged}></textarea>
      <div>Query:</div>
      <input type="text" size={60} value={query} onChange={FNs.queryChanged} />
      <input type="button" value="Query" onClick={doQuery} />
      <div>Answers:</div>
      <textarea readOnly rows={6} cols={100} value={result}></textarea>

      <div style={{fontSize: 'small'}}>
        (If you find an error in this page, try to refresh and query again...)
      </div>
    </section>
  )
}
