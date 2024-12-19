import getAnimalType from "@/libs/animal-type";
import calculateMBTI from "@/libs/calculate-mbti";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslatedQuestions } from "./question-data";
import Questions from "./questions";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useTranslation } from "react-i18next";

function PersonalityQuiz({ onRestart }: { onRestart: () => void }) {
  // ===================================================================================================================
  // state
  // ===================================================================================================================
  // current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<{ mbti: string; animal: string; traits: string } | null>(null);

  const questions = useTranslatedQuestions();

  // i18next
  const { t } = useTranslation();

  // ===================================================================================================================
  // react-hook-form
  // ===================================================================================================================
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: questions.reduce((acc, curr) => {
      acc[curr.name] = "";
      return acc;
    }, {} as { [key: string]: string }),
  });

  // total questions
  const totalQuestions = questions.length;

  // watch를 사용하여 각 질문의 응답 상태를 감시
  const watchAnswers = watch();

  // 응답된 질문 수 계산
  const answeredCount = questions.filter((q) => watchAnswers[q.name] !== "").length;

  // Progress 바의 값을 동적으로 계산
  const progressValue = (answeredCount / totalQuestions) * 100;

  const onSubmit = (data: any) => {
    const mbti = calculateMBTI(data); // 질문에 대한 응답 데이터를 사용하여 MBTI 계산
    const { animal, traits } = getAnimalType(mbti, t); // MBTI 결과로 동물 및 특성 가져오기
    setResult({ mbti, animal, traits });
  };

  // ===================================================================================================================
  // next / previous button handler
  // ===================================================================================================================
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

  const handleRestartQuiz = () => {
    reset(); // reset form
    setCurrentQuestion(0); // reset question index
    setResult(null); // reset result
    onRestart(); // back to main page
  };

  return (
    <>
      <div className="max-w-xl m-auto my-10 text-center font-Poppins">
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
            <Button onClick={handleRestartQuiz} className="w-full mt-10">
              {t("quizSection.restart")}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default PersonalityQuiz;
