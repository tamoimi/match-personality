import { useForm } from "react-hook-form";
import getAnimalType from "./libs/animal-type";
import { useState } from "react";
import calculateMBTI from "./libs/calculate-mbti";
import { questions } from "./components/question-data";
import Questions from "./components/questions";

function PersonalityQuiz() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState<{ mbti: string; animal: string; traits: string } | null>(null);

  const onSubmit = (data: any) => {
    console.log("Form Data:", data); // 데이터가 제대로 전달되었는지 확인
    const mbti = calculateMBTI(data); // 질문에 대한 응답 데이터를 사용하여 MBTI 계산
    const { animal, traits } = getAnimalType(mbti); // MBTI 결과로 동물 및 특성 가져오기
    setResult({ mbti, animal, traits });
  };

  return (
    <div className="max-w-md m-auto my-10 text-center font-Poppins">
      <h1 className="text-3xl font-medium">Find Your Animal Based on MBTI</h1>
      {!result ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          {questions.map((q, index) => (
            <Questions
              key={index}
              question={q.question}
              options={q.options}
              register={register}
              name={q.name} // 각 질문에 고유한 이름을 전달
            />
          ))}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Button
          </button>
        </form>
      ) : (
        <div>
          <h2>Your MBTI Type: {result.mbti}</h2>
          <h3>Your Animal: {result.animal}</h3>
          <p>{result.traits}</p>
        </div>
      )}
    </div>
  );
}

export default PersonalityQuiz;
