export type GenderType = 'female' | 'male' | 'universal';

export interface UserProfile {
  name: string;
  gender: GenderType;
  age: number;
  weightKg: number;
  heightCm: number;
  fitnessGoal: 'weight_loss' | 'muscle_gain' | 'stress_relief' | 'endurance' | 'hormone_balance';
  greenPoints: number;
  dailyStreak: number;
  language: 'en' | 'hi';
}

export type EnergyLevel = 'low' | 'moderate' | 'high';
export type StressLevel = 'calm' | 'mild' | 'high' | 'overwhelmed';
export type TimeAvailable = 5 | 15 | 30 | 45;
export type HealthCondition = 'none' | 'diabetes_prevention' | 'pcos_pcod' | 'hypertension' | 'digestion_bloating' | 'back_neck_pain' | 'post_illness_fatigue';

export interface TodayHealthState {
  energy: EnergyLevel;
  soreness: 'none' | 'neck_back' | 'legs_knees' | 'shoulders' | 'full_body';
  sleepHours: number;
  stress: StressLevel;
  condition: HealthCondition;
  timeAvailable: TimeAvailable;
  lastUpdated: string;
}

export interface NextActionPlan {
  headline: string;
  summary: string;
  immediateWorkout: {
    title: string;
    duration: number;
    intensity: 'Low' | 'Moderate' | 'Vigorous';
    category: string;
    instructions: string[];
  };
  tailoredMeal: {
    name: string;
    description: string;
    calories: number;
    benefits: string;
    type: 'Snack' | 'Post-Workout' | 'Balanced Thali';
  };
  hydrationAndMind: {
    waterTargetMl: number;
    mindfulnessPrompt: string;
  };
}

export interface GenderRoutine {
  id: string;
  gender: GenderType;
  title: string;
  subtitle: string;
  targetFocus: string;
  phasesOrCategories: {
    tag: string;
    description: string;
    recommendedExercises: string[];
    dietaryFocus: string;
    hormoneInsight: string;
  }[];
  expertTip: string;
}

export type EmotionMood = 'stressed' | 'fatigued' | 'energized' | 'calm' | 'anxious';

export interface EmotionRecommendation {
  mood: EmotionMood;
  detectedConfidence: number;
  recommendedWorkout: string;
  intensityDesc: string;
  durationMinutes: number;
  musicSuggestion: string;
  breathworkTechnique: string;
  colorTone: string;
}

export interface MicroGoal {
  id: string;
  title: string;
  description: string;
  durationSeconds: number;
  points: number;
  category: 'hydration' | 'mobility' | 'breath' | 'posture' | 'nutrition';
  completed: boolean;
  completedAt?: string;
}

export interface CulturalFoodItem {
  id: string;
  name: string;
  regionalOrigin: string;
  traditionalDescription: string;
  healthyTransformation: string;
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
  glycemicIndex: 'Low' | 'Medium' | 'High';
  keyBenefits: string[];
  ingredients: string[];
  cookingTimeMinutes: number;
  tags: string[];
}

export interface GreenPointsReward {
  id: string;
  title: string;
  partner: string;
  category: 'Beverage' | 'Fitness Gear' | 'Nutrition' | 'Wellness';
  pointsCost: number;
  discountValue: string;
  couponCode: string;
  isRedeemed: boolean;
}

export interface PreventiveAlert {
  id: string;
  riskTitle: string;
  severity: 'low' | 'moderate' | 'high';
  riskScorePercent: number;
  triggerFactors: string[];
  earlySigns: string[];
  preventiveActionSteps: string[];
  medicalDisclaimer: string;
}

export interface CommunityChallenge {
  id: string;
  title: string;
  category: string;
  squadType: 'Hostel Wing' | 'University Campus' | 'Morning Runners' | 'Tech Workers';
  currentProgress: number;
  targetGoal: number;
  unit: string;
  daysRemaining: number;
  participantsCount: number;
  isJoined: boolean;
  leaderboard: { rank: number; name: string; avatar: string; score: number }[];
}

export interface WearableMetrics {
  heartRate: number;
  restingHeartRate: number;
  stepsToday: number;
  targetSteps: number;
  caloriesBurned: number;
  hrvMs: number;
  spo2Percent: number;
  syncStatus: 'connected' | 'syncing' | 'offline';
  lastSynced: string;
}

export interface SleepAnalysis {
  hoursSlept: number;
  deepSleepMinutes: number;
  remSleepMinutes: number;
  lightSleepMinutes: number;
  sleepScore: number;
  ambientNoiseDb: number;
  bedtimeConsistency: string;
  windDownRoutine: string[];
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface EmergencyProfile {
  bloodGroup: string;
  allergies: string[];
  chronicConditions: string[];
  emergencyContacts: EmergencyContact[];
  sosTriggered: boolean;
  lastSimulatedVitalsAlert?: string;
}
