import { useForm } from "react-hook-form";
import getAnimalType from "./libs/animal-type";
import { useState } from "react";
import calculateMBTI from "./libs/calculate-mbti";
import { questions } from "./components/question-data";
import Questions from "./components/questions";
import { Progress } from "./components/ui/progress";

function PersonalityQuiz() {
  // useForm에 defaultValues를 설정해 모든 질문의 기본값을 미리 제공
  const { register, handleSubmit, watch } = useForm({
    defaultValues: questions.reduce((acc, curr) => {
      acc[curr.name] = "";
      return acc;
    }, {} as { [key: string]: string }),
  });

  const [result, setResult] = useState<{ mbti: string; animal: string; traits: string } | null>(null);

  // 총 질문 수
  const totalQuestions = questions.length;

  // watch를 사용하여 각 질문의 응답 상태를 감시
  const watchAnswers = watch();

  // 응답된 질문 수 계산
  const answeredCount = questions.filter((q) => watchAnswers[q.name] !== "").length;

  // Progress 바의 값을 동적으로 계산
  const progressValue = (answeredCount / totalQuestions) * 100;

  const onSubmit = (data: any) => {
    const mbti = calculateMBTI(data); // 질문에 대한 응답 데이터를 사용하여 MBTI 계산
    const { animal, traits } = getAnimalType(mbti); // MBTI 결과로 동물 및 특성 가져오기
    setResult({ mbti, animal, traits });
  };

  return (
    <div className="max-w-xl m-auto my-10 text-center font-Poppins">
      <h1 className="mb-6 text-3xl font-medium">Find Your Animal Based on MBTI</h1>

      {/* Progress 컴포넌트에 동적 값 전달 */}
      <Progress value={progressValue} />

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
            className="w-full px-4 py-2 mt-5 font-bold text-white rounded bg-stone-500 hover:bg-stone-600"
          >
            Submit
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
