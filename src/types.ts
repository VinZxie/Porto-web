export interface LocalizedString {
  id: string;
  en: string;
}

export interface LocalizedStringArray {
  id: string[];
  en: string[];
}

export interface FeatureStackMapping {
  feature: LocalizedString;
  tech: string;
  detail: LocalizedString;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web' | 'Frontend' | 'Backend' | 'Dashboard' | 'Networking' | 'AI' | 'Education' | 'Tools';
  categoryLabel: LocalizedString;
  tags: string[];
  shortDescription: LocalizedString;
  projectType?: LocalizedString;
  purpose?: LocalizedString;
  role?: LocalizedString;
  overview?: LocalizedString;
  projectGoals?: LocalizedString;
  problemStatement?: LocalizedString;
  solutionNarrative?: LocalizedString;
  developmentChallenges?: LocalizedString;
  developmentSolutions?: LocalizedString;
  keyFeatures: LocalizedStringArray;
  techStackDetailed: FeatureStackMapping[];
  technologies: string[];
  architectureSummary?: LocalizedString;
  githubUrl?: string;
  liveDemoUrl?: string;
  previewType: 'terminal' | 'dashboard' | 'calculator' | 'catalog' | 'network' | 'code';
  status: LocalizedString;
}

export interface EducationItem {
  id: string;
  institution: string;
  department?: LocalizedString;
  program: LocalizedString;
  status: LocalizedString;
  description: LocalizedString;
  focusAreas: LocalizedStringArray;
  highlights: LocalizedStringArray;
  type: 'vocational' | 'higher_education';
}

export interface SkillCategoryItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  skills: {
    name: string;
    focus: LocalizedString;
  }[];
}

export interface CompetitiveGameItem {
  id: string;
  gameName: string;
  shortName: string;
  rankTitle: string;
  tierTag: string;
  themeColor: string;
  iconUrl?: string;
  logoUrl?: string;
  description: LocalizedString;
  strategicFocus: LocalizedString;
  keyStats: LocalizedString;
}

export interface AchievementItem {
  id: string;
  title: string;
  subTitle: string;
  category: LocalizedString;
  description: LocalizedString;
  badge: string;
  milestoneKey: LocalizedString;
  keyTakeaways: LocalizedStringArray;
}

export interface TechStackGroup {
  category: LocalizedString;
  description: LocalizedString;
  items: string[];
}

export interface JourneyStep {
  phase: string;
  title: LocalizedString;
  focus: LocalizedString;
  narrative: LocalizedString;
  technologies: string[];
}
