type MicroGoalsSectionProps = { onRewardPoints: (value: number) => void; };

export function MicroGoalsSection(props: MicroGoalsSectionProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Micro Goals</h2>
      <button onClick={() => props.onRewardPoints(5)}>Complete goal</button>
    </div>
  );
}
