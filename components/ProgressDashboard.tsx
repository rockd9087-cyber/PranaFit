type ProgressDashboardProps = {
  userProfile: { greenPoints: number; dailyStreak: number; goal: string; name: string };
  setUserProfile: (value: any) => void;
  greenPoints: number;
  dailyStreak: number;
};

export function ProgressDashboard(props: ProgressDashboardProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Progress Dashboard</h2>
      <p>{props.userProfile.name}</p>
      <p>Goal: {props.userProfile.goal}</p>
      <p>Green points: {props.greenPoints}</p>
      <p>Streak: {props.dailyStreak}</p>
    </div>
  );
}
