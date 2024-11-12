function getAnimalType(mbti: string, t: any) {
  const animalMappings: { [key: string]: { animal: string; traits: string } } = {
    INTJ: {
      animal: t("animalMappings.INTJ.animal"),
      traits: t("animalMappings.INTJ.traits"),
    },
    ENTP: {
      animal: t("animalMappings.ENTP.animal"),
      traits: t("animalMappings.ENTP.traits"),
    },
    ESFP: {
      animal: t("animalMappings.ESFP.animal"),
      traits: t("animalMappings.ESFP.traits"),
    },
    ISFP: {
      animal: t("animalMappings.ISFP.animal"),
      traits: t("animalMappings.ISFP.traits"),
    },
    INFP: {
      animal: t("animalMappings.INFP.animal"),
      traits: t("animalMappings.INFP.traits"),
    },
    ESTJ: {
      animal: t("animalMappings.ESTJ.animal"),
      traits: t("animalMappings.ESTJ.traits"),
    },
    INFJ: {
      animal: t("animalMappings.INFJ.animal"),
      traits: t("animalMappings.INFJ.traits"),
    },
    ISTJ: {
      animal: t("animalMappings.ISTJ.animal"),
      traits: t("animalMappings.ISTJ.traits"),
    },
    ENFP: {
      animal: t("animalMappings.ENFP.animal"),
      traits: t("animalMappings.ENFP.traits"),
    },
    ESTP: {
      animal: t("animalMappings.ESTP.animal"),
      traits: t("animalMappings.ESTP.traits"),
    },
    ISTP: {
      animal: t("animalMappings.ISTP.animal"),
      traits: t("animalMappings.ISTP.traits"),
    },
    ENTJ: {
      animal: t("animalMappings.ENTJ.animal"),
      traits: t("animalMappings.ENTJ.traits"),
    },
    ISFJ: {
      animal: t("animalMappings.ISFJ.animal"),
      traits: t("animalMappings.ISFJ.traits"),
    },
    ESFJ: {
      animal: t("animalMappings.ESFJ.animal"),
      traits: t("animalMappings.ESFJ.traits"),
    },
    ENFJ: {
      animal: t("animalMappings.ENFJ.animal"),
      traits: t("animalMappings.ENFJ.traits"),
    },
    INTP: {
      animal: t("animalMappings.INTP.animal"),
      traits: t("animalMappings.INTP.traits"),
    },
  };

  return (
    animalMappings[mbti] || { animal: t("animalMappings.default.animal"), traits: t("animalMappings.default.traits") }
  );
}

export default getAnimalType;
