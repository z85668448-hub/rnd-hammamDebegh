export type Candidate = {
  id: string;
  nameAr: string;
  rank: string;
  photo: string | null;
  profession: string | null;
  education: string | null;
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

const candidateDetails: Partial<
  Record<string, Partial<Pick<Candidate, "profession" | "education">>>
> = {
  "01": { profession: "مفتش مركزي للضرائب (متقاعد)" },
  "02": { profession: "مهندس دراسات بشركة كوسيدار" },
  "03": { education: "تقني سامٍ في التسيير والمحاسبة" },
  "04": { profession: "رئيس مصلحة" },
  "05": { education: "ليسانس هندسة معمارية" },
  "06": { profession: "أعمال حرة" },
  "07": { profession: "موظف بالجامعة" },
  "08": { education: "ليسانس حقوق" },
  "09": { profession: "نائب رئيس المجلس الشعبي البلدي سابقًا" },
  "10": { profession: "متقاعد من الجيش · أعمال حرة" },
  "11": {
    profession: "موظف بالبلدية",
    education: "ليسانس اتصال تنظيمي",
  },
  "12": { education: "ليسانس كيمياء" },
  "13": { profession: "عضو سابق بالبلدية" },
  "14": { education: "ماستر تطبيق محاسبي" },
  "15": { education: "ليسانس محاسبة ومراقبة" },
  "16": { education: "ليسانس علوم إعلام واتصال" },
  "17": { profession: "رئيس قسمة البناء والتعمير (متقاعد)" },
  "18": { education: "ماستر أدب عربي" },
  "19": { profession: "عضو سابق بالبلدية" },
  "20": { profession: "تقني رئيسي للدراسات بشركة سونلغاز" },
  "21": { education: "ماستر رياضيات" },
  "22": { profession: "مدير وكالة تجارية باتصالات الجزائر" },
  "23": { profession: "موظف في شركة سونلغاز" },
  "24": { profession: "أعمال حرة (متقاعد)" },
  "25": { profession: "موظف بالبلدية" },
  "26": { profession: "رئيس مصلحة المركب المعدني حمام الشلالة" },
};

export const candidates: Candidate[] = candidateNames.map((nameAr, index) => {
  const rank = String(index + 1).padStart(2, "0");
  return {
    id: rank,
    nameAr,
    rank,
    photo:
      rank === "19" ? null : `/images/candidates/candidate-${rank}.webp`,
    profession: candidateDetails[rank]?.profession ?? null,
    education: candidateDetails[rank]?.education ?? null,
    bio: null,
  };
});
