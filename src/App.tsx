import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./components/ui/button";
import PersonalityQuiz from "./components/personality-quiz";
import LanguageBar from "./main-page/components/language-bar";

function MainPage() {
  // ===================================================================================================================
  // state
  // ===================================================================================================================
  const { t } = useTranslation();
  const [showQuiz, setShowQuiz] = useState(false);

  // handlers
  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleRestart = () => {
    setShowQuiz(false);
  };

  return (
    <div className="max-w-xl px-6 m-auto my-10 text-center font-Poppins">
      <div className="flex justify-end mb-3">
        <LanguageBar />
      </div>
      <h1 className="mb-6 text-2xl font-medium">{t("mainSection.title")}</h1>

      <div className="m-auto my-10 text-center ">
        {!showQuiz ? (
          <div className="flex flex-col items-center">
            <p className="mb-8 text-sm whitespace-pre-line">{t("mainSection.description")}</p>
            <Button onClick={handleStartQuiz} className="w-full">
              {t("mainSection.start")}
            </Button>
            <p className="mt-3 text-xs">made by Tami 🎲</p>
          </div>
        ) : (
          <PersonalityQuiz onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
}

export default MainPage;
