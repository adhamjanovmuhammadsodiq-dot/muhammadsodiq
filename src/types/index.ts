export type Language = 'uz' | 'ru' | 'kir';

export interface ProjectItem {
  id: string;
  categoryKey: string;
  technologies: string[];
  image?: string;
  iconName: 'blocks' | 'cpu' | 'bot' | 'smartphone';
  color: string;
  accentBg: string;
}

export interface SkillItem {
  id: string;
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  levelKey: string;
  icon: 'blocks' | 'cpu' | 'bot' | 'smartphone';
  accentColor: string;
  badgeColor: string;
}

export interface JourneyItem {
  id: string;
  step: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  highlightKey?: string;
  icon: 'compass' | 'blocks' | 'cpu' | 'bot' | 'smartphone' | 'rocket';
}

export interface InterestItem {
  id: string;
  labelKey: string;
  icon: string;
  category: string;
}

export interface GoalItem {
  id: 'learn' | 'build' | 'grow';
  icon: 'book' | 'hammer' | 'sprout';
  titleKey: string;
  descriptionKey: string;
  color: string;
}
