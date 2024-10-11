function calculateMBTI(answers: any) {
  let mbti = "";

  // Calculate Extraversion (E) vs Introversion (I)
  const eCount = countTraits(answers, "E");
  const iCount = countTraits(answers, "I");
  mbti += eCount > iCount ? "E" : "I";

  // Calculate Sensing (S) vs Intuition (N)
  const sCount = countTraits(answers, "S");
  const nCount = countTraits(answers, "N");
  mbti += sCount > nCount ? "S" : "N";

  // Calculate Thinking (T) vs Feeling (F)
  const tCount = countTraits(answers, "T");
  const fCount = countTraits(answers, "F");
  mbti += tCount > fCount ? "T" : "F";

  // Calculate Judging (J) vs Perceiving (P)
  const jCount = countTraits(answers, "J");
  const pCount = countTraits(answers, "P");
  mbti += jCount > pCount ? "J" : "P";

  return mbti;
}

export default calculateMBTI;

function countTraits(answers: any, trait: any) {
  return Object.values(answers).filter((answer) => answer === trait).length;
}
