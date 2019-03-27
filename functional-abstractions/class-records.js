const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

const sum = (total, value) => total + value;

const determineGrade = (score) => {
  if (score >= 93) return 'A';
  if (score >= 85) return 'B';
  if (score >= 77) return 'C';
  if (score >= 69) return 'D';
  if (score >= 60) return 'E';
  return 'F';
};

const determineAverage = scores => scores.reduce(sum) / scores.length;

const determineScore = function determineFinalScore(examScore, exerciseScore) {
  return Math.round(examScore * EXAM_WEIGHT + exerciseScore * EXERCISE_WEIGHT);
};

const generateClassRecordSummary = (scores) => {
  const exams = [];
  const exercises = [];

  Object.keys(scores).forEach((student) => {
    exams.push(scores[student].scores.exams.slice());
    exercises.push(scores[student].scores.exercises.slice());
  });

  const studentGrades = exams.map((studentExams, idx) => {
    const finalScore = determineScore(determineAverage(studentExams), exercises[idx].reduce(sum));
    return `${finalScore} (${determineGrade(finalScore)})`;
  });

  const examSets = exams[0].map((_, idx) => exams.map(elem => elem[idx]));

  return {
    studentGrades,
    exams: examSets.map(set => ({
      average: determineAverage(set),
      minimum: Math.min(...set),
      maximum: Math.max(...set),
    })),
  };
};

// Example:

const studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
