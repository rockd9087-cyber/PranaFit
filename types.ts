export type GenderType = 'female' | 'male';

export type UserProfile = {
  name: string;
  greenPoints: number;
  dailyStreak: number;
  goal: string;
};

export type TodayHealthState = {
  energy: number;
  stress: number;
};

export const initialUserProfile: UserProfile = {
  name: 'User',
  greenPoints: 120,
  dailyStreak: 5,
  goal: 'Balance'
};

export const defaultTodayHealthState: TodayHealthState = {
  energy: 72,
  stress: 38
};
