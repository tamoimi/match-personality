import { useTranslation } from "react-i18next";

export const useTranslatedQuestions = () => {
  const { t } = useTranslation();

  return [
    {
      question: t("question.first"),
      options: [
        { label: t("options_01.first"), value: "E" },
        { label: t("options_01.second"), value: "I" },
      ],
      name: "q1",
    },
    {
      question: t("question.second"),
      options: [
        { label: t("options_02.first"), value: "E" },
        { label: t("options_02.second"), value: "I" },
      ],
      name: "q2",
    },
    {
      question: t("question.third"),
      options: [
        { label: t("options_03.first"), value: "E" },
        { label: t("options_03.second"), value: "I" },
      ],
      name: "q3",
    },
    {
      question: t("question.fourth"),
      options: [
        { label: t("options_04.first"), value: "S" },
        { label: t("options_04.second"), value: "N" },
      ],
      name: "q4",
    },
    {
      question: t("question.fifth"),
      options: [
        { label: t("options_05.first"), value: "S" },
        { label: t("options_05.second"), value: "N" },
      ],
      name: "q5",
    },
    {
      question: t("question.sixth"),
      options: [
        { label: t("options_06.first"), value: "S" },
        { label: t("options_06.second"), value: "N" },
      ],
      name: "q6",
    },
    {
      question: t("question.seventh"),
      options: [
        { label: t("options_07.first"), value: "T" },
        { label: t("options_07.second"), value: "F" },
      ],
      name: "q7",
    },
    {
      question: t("question.eighth"),
      options: [
        { label: t("options_08.first"), value: "T" },
        { label: t("options_08.second"), value: "F" },
      ],
      name: "q8",
    },
    {
      question: t("question.ninth"),
      options: [
        { label: t("options_09.first"), value: "T" },
        { label: t("options_09.second"), value: "F" },
      ],
      name: "q9",
    },
    {
      question: t("question.tenth"),
      options: [
        { label: t("options_10.first"), value: "J" },
        { label: t("options_10.second"), value: "P" },
      ],
      name: "q10",
    },
    {
      question: t("question.eleventh"),
      options: [
        { label: t("options_11.first"), value: "J" },
        { label: t("options_11.second"), value: "P" },
      ],
      name: "q11",
    },
    {
      question: t("question.twelfth"),
      options: [
        { label: t("options_12.first"), value: "J" },
        { label: t("options_12.second"), value: "P" },
      ],
      name: "q12",
    },
  ];
};
