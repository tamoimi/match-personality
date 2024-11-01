import { useState } from "react";
import { useForm } from "react-hook-form";
import { questions } from "./components/question-data";
import Questions from "./components/questions";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import getAnimalType from "./libs/animal-type";
import calculateMBTI from "./libs/calculate-mbti";

function PersonalityQuiz() {
  // ===================================================================================================================
  // state
  // ===================================================================================================================
  // current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<{ mbti: string; animal: string; traits: string } | null>(null);

  // ===================================================================================================================
  // react-hook-form
  // ===================================================================================================================
  const { register, handleSubmit, watch } = useForm({
    defaultValues: questions.reduce((acc, curr) => {
      acc[curr.name] = "";
      return acc;
    }, {} as { [key: string]: string }),
  });

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

  const handleNextQuestion = () => {
    // 현재 질문에 대한 응답이 없으면 다음으로 넘어가지 않음
    if (watchAnswers[questions[currentQuestion].name] === "") {
      return;
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="max-w-xl px-6 m-auto my-10 text-center font-Poppins">
      <h1 className="mb-6 text-3xl font-medium">Find Your Animal Based on MBTI</h1>

      {/* Progress 컴포넌트에 동적 값 전달 */}
      <Progress value={progressValue} />

      {!result ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Questions
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            register={register}
            name={questions[currentQuestion].name} // 현재 질문에 고유한 이름 전달
            watch={watch} 
          />

          <div className="flex justify-between mt-5">
            <Button
              type="button"
              onClick={handlePreviousQuestion}
              //className="px-4 py-2 font-bold text-white bg-gray-400 rounded hover:bg-gray-500"
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            {currentQuestion === totalQuestions - 1 ? (
              <Button type="submit">Submit</Button>
            ) : (
              <Button type="button" onClick={handleNextQuestion}>
                Next
              </Button>
            )}
          </div>
        </form>
      ) : (
        <div className="mt-3">
          <h2>Your MBTI Type: {result.mbti} ✨</h2>
          <h3>Your Animal: {result.animal}</h3>
          <p className="p-3 mt-3 border rounded-md border-stone-300 bg-stone-100">{result.traits}</p>
        </div>
      )}
    </div>
  );
}

export default PersonalityQuiz;
