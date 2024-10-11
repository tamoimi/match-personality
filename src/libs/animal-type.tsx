function getAnimalType(mbti: string) {
  const animalMappings: { [key: string]: { animal: string; traits: string } } = {
    INTJ: {
      animal: "Owl",
      traits:
        "Strategic, Insightful, Independent. Owls are known for their wisdom and calculated thinking, much like INTJs.",
    },
    ENTP: {
      animal: "Fox",
      traits: "Quick-witted, Adaptable, Curious. Foxes represent the ENTP's love for innovation and clever solutions.",
    },
    ESFP: {
      animal: "Parrot",
      traits:
        "Energetic, Sociable, Fun-loving. Like parrots, ESFPs enjoy being the center of attention and bringing joy to others.",
    },
    ISFP: {
      animal: "Deer",
      traits:
        "Gentle, Creative, Sensitive. ISFPs are much like deer, appreciating beauty and living peacefully in the moment.",
    },
    INFP: {
      animal: "Dolphin",
      traits:
        "Idealistic, Compassionate, Imaginative. Dolphins, like INFPs, are known for their empathy and deep emotional connection to others.",
    },
    ESTJ: {
      animal: "Lion",
      traits:
        "Confident, Organized, Strong-willed. Lions represent ESTJs’ leadership qualities and their love for structure.",
    },
    INFJ: {
      animal: "Wolf",
      traits:
        "Loyal, Visionary, Empathetic. Wolves, like INFJs, are driven by a deep sense of purpose and loyalty to their group.",
    },
    ISTJ: {
      animal: "Elephant",
      traits: "Responsible, Practical, Loyal. Elephants embody the ISTJ’s dedication and strong sense of duty.",
    },
    ENFP: {
      animal: "Butterfly",
      traits:
        "Creative, Enthusiastic, Free-spirited. Butterflies symbolize the ENFP's adaptability and passion for new experiences.",
    },
    ESTP: {
      animal: "Tiger",
      traits:
        "Bold, Energetic, Action-oriented. Tigers reflect the ESTP's natural inclination for taking risks and seizing opportunities.",
    },
    ISTP: {
      animal: "Panther",
      traits:
        "Analytical, Independent, Calm under pressure. Panthers, like ISTPs, are known for their stealth and quick, decisive actions.",
    },
    ENTJ: {
      animal: "Eagle",
      traits:
        "Decisive, Strategic, Visionary. Eagles represent the ENTJ’s drive to achieve and their ability to lead from a high-level perspective.",
    },
    ISFJ: {
      animal: "Koala",
      traits:
        "Caring, Protective, Reliable. Koalas, like ISFJs, are nurturing and dedicated to taking care of those around them.",
    },
    ESFJ: {
      animal: "Dog",
      traits: "Friendly, Loyal, Outgoing. Dogs embody the ESFJ’s need to care for and support others.",
    },
    ENFJ: {
      animal: "Horse",
      traits:
        "Charismatic, Passionate, Altruistic. Horses reflect the ENFJ’s ability to inspire others with their positive energy.",
    },
    INTP: {
      animal: "Octopus",
      traits:
        "Intellectual, Curious, Innovative. Octopuses are known for their intelligence and problem-solving abilities, much like INTPs.",
    },
  };

  return animalMappings[mbti] || { animal: "Unknown Animal", traits: "Traits not available." };
}

export default getAnimalType;
