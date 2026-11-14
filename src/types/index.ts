// Global Type Definitions for UISPHERE 2.0 (Tekno Krraft 2026)

export type ThemeMode = 'dark' | 'light';

export interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

export type ScheduleDay = 1 | 2 | 3;

export type SessionLevel =
  | 'Keynote · All Levels'
  | 'Workshop · Intermediate'
  | 'Workshop · Beginner'
  | 'Workshop · Advanced'
  | 'Contest · Top 50 Finalists'
  | 'Esports · Open to All';

export interface ScheduleSession {
  id: string;
  day: ScheduleDay;
  timeRange: string;
  level: SessionLevel;
  title: string;
  speakerName: string;
  speakerRole: string;
  venue: string;
  icsTitle: string;
  icsTime: string;
  icsVenue: string;
}

export type EventCategory = 'all' | 'hackathon' | 'coding' | 'labs' | 'esports';

export interface BentoArenaItem {
  id: string;
  category: Exclude<EventCategory, 'all'>;
  colSpan: 1 | 2;
  badgeTag: string;
  prizePool?: string;
  isFeatured?: boolean;
  title: string;
  description: string;
  tags?: string[];
  trackModules?: { title: string; subtitle: string }[];
  metaTiming: string;
  actionText: string;
  modalTarget: 'rules-modal' | 'cp-modal' | 'syllabus-modal' | 'register-modal';
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  trackTag: string;
  avatarUrl: string;
  linkedinUrl: string;
}

export type SponsorTier = 'Title Partner' | 'Platinum' | 'Gold' | 'Host Partner';

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  websiteUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface StatTileItem {
  number: string;
  label: string;
  color?: string;
}

export interface FeaturePillarItem {
  title: string;
  description: string;
  icon: 'code' | 'zap' | 'users';
  color?: string;
}

export type RegistrationTrack =
  | 'hackathon'
  | 'gen-ai'
  | 'web-cloud'
  | 'mobile-flutter'
  | 'coding-contest'
  | 'gaming';

export interface RegistrationFormData {
  name: string;
  email: string;
  college: string;
  track: RegistrationTrack;
}

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

export interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

export type ModalType = 'conduct-modal' | 'rules-modal' | 'register-modal' | 'syllabus-modal' | 'cp-modal' | null;

export interface ModalContextValue {
  activeModal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

