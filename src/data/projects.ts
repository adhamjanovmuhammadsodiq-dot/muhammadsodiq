export interface Project {
  id: string;
  titleKey: 'scratchCardTitle' | 'mblockCardTitle' | 'roboticsCardTitle' | 'appInventorCardTitle';
  descriptionKey: 'scratchCardDesc' | 'mblockCardDesc' | 'roboticsCardDesc' | 'appInventorCardDesc';
  technologies: string[];
  statusKey: 'comingSoonNotice';
  iconType: 'blocks' | 'cpu' | 'bot' | 'smartphone';
  color: string;
  category: string;
  url?: string; // Optional URL for future deployment
}

export const projectsData: Project[] = [
  {
    id: 'scratch-projects',
    titleKey: 'scratchCardTitle',
    descriptionKey: 'scratchCardDesc',
    technologies: ['Scratch', 'Block Code', 'Algorithms', 'Interactive Game'],
    statusKey: 'comingSoonNotice',
    iconType: 'blocks',
    color: 'from-amber-500/10 to-amber-500/5 text-amber-600 border-amber-200',
    category: 'Game & Logic',
    url: '', // Left empty; details coming soon
  },
  {
    id: 'mblock-experiments',
    titleKey: 'mblockCardTitle',
    descriptionKey: 'mblockCardDesc',
    technologies: ['mBlock', 'Microcontroller', 'Sensors', 'Hardware Logic'],
    statusKey: 'comingSoonNotice',
    iconType: 'cpu',
    color: 'from-blue-500/10 to-blue-500/5 text-blue-600 border-blue-200',
    category: 'Hardware Control',
    url: '',
  },
  {
    id: 'robotics-experiments',
    titleKey: 'roboticsCardTitle',
    descriptionKey: 'roboticsCardDesc',
    technologies: ['Robotics', 'Motors', 'Ultrasonic Sensor', 'Automation'],
    statusKey: 'comingSoonNotice',
    iconType: 'bot',
    color: 'from-cyan-500/10 to-cyan-500/5 text-cyan-600 border-cyan-200',
    category: 'Robotics',
    url: '',
  },
  {
    id: 'app-inventor-apps',
    titleKey: 'appInventorCardTitle',
    descriptionKey: 'appInventorCardDesc',
    technologies: ['MIT App Inventor', 'Android', 'Mobile UI', 'Logic Blocks'],
    statusKey: 'comingSoonNotice',
    iconType: 'smartphone',
    color: 'from-purple-500/10 to-purple-500/5 text-purple-600 border-purple-200',
    category: 'Mobile Apps',
    url: '',
  },
];
