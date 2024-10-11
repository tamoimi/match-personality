type Answers = {
  [question: string]: string; // 각 질문에 대한 답변
};

function calculateMBTI(answers: Answers): string {
  let mbti = "";

  // 콘솔에서 디버깅할 때 answers 객체를 확인
  console.log("Answers received:", answers);

  // Calculate Extraversion (E) vs Introversion (I)
  const eCount = countTraits(answers, "E");
  const iCount = countTraits(answers, "I");
  console.log(`E Count: ${eCount}, I Count: ${iCount}`);
  mbti += eCount > iCount ? "E" : "I";

  // Calculate Sensing (S) vs Intuition (N)
  const sCount = countTraits(answers, "S");
  const nCount = countTraits(answers, "N");
  console.log(`S Count: ${sCount}, N Count: ${nCount}`);
  mbti += sCount > nCount ? "S" : "N";

  // Calculate Thinking (T) vs Feeling (F)
  const tCount = countTraits(answers, "T");
  const fCount = countTraits(answers, "F");
  console.log(`T Count: ${tCount}, F Count: ${fCount}`);
  mbti += tCount > fCount ? "T" : "F";

  // Calculate Judging (J) vs Perceiving (P)
  const jCount = countTraits(answers, "J");
  const pCount = countTraits(answers, "P");
  console.log(`J Count: ${jCount}, P Count: ${pCount}`);
  mbti += jCount > pCount ? "J" : "P";

  console.log("Final MBTI:", mbti);
  return mbti;
}

export default calculateMBTI;

function countTraits(answers: Answers, trait: string): number {
  // 각 trait의 개수를 확인
  const count = Object.values(answers).filter((answer) => answer === trait).length;
  console.log(`Count for ${trait}: ${count}`);
  return count;
}
