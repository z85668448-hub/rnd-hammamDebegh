export type Candidate = {
  id: string;
  nameAr: string;
  rank: string;
  photo: string | null;
  bio: string | null;
};

const candidateNames = [
  "درويش عبد الوهاب",
  "بن رازق ياسر",
  "بن قيراط محمد",
  "بن كموش ميهوب",
  "بوخميس بدر الدين",
  "بوعبيد خالد",
  "بوعون عدنان",
  "بومعالي عمار",
  "حميدي رابح",
  "خلفون أحسن",
  "خلة عبد القادر",
  "بن رازق محمد سامي",
  "زايدي فريد",
  "بشكورة حليم",
  "سطحة صالح",
  "صغير أيوب",
  "عميرة عبد الرحمان",
  "فريعن أسماء",
  "معلالة رشيدة",
  "قميحي سفير",
  "كعور أيمن",
  "مشيطة عبد الخليل",
  "معلالة عبد الناصر",
  "نعيجة رؤوف",
  "يحمدي يوسف",
  "يسعد حسان",
] as const;

export const candidates: Candidate[] = candidateNames.map((nameAr, index) => {
  const rank = String(index + 1).padStart(2, "0");
  return {
    id: rank,
    nameAr,
    rank,
    photo: null,
    bio: null,
  };
});
