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
    <div style={styles.container}>
      <h1>Find Your Animal Based on MBTI</h1>

      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        {questions.map((q, index) => (
          <Questions
            key={index}
            question={q.question}
            options={q.options}
            register={register}
            name={q.name} // 각 질문에 고유한 이름을 전달
          />
        ))}
        <input type="submit" value="Submit" style={styles.submitButton} />
      </form>

      {result && (
        <div style={styles.resultContainer}>
          <h2 style={styles.resultHeading}>Your MBTI Type: {result.mbti}</h2>
          <h3 style={styles.resultAnimal}>Your Animal: {result.animal}</h3>
          <p style={styles.resultTraits}>{result.traits}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
  },
  submitButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1rem",
  },
  resultContainer: {
    marginTop: "2rem",
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  resultHeading: {
    fontSize: "1.5rem",
    color: "#333",
  },
  resultAnimal: {
    fontSize: "1.25rem",
    color: "#ff6347",
    margin: "0.5rem 0",
  },
  resultTraits: {
    fontSize: "1rem",
    color: "#666",
  },
};

export default PersonalityQuiz;
