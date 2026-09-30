type EmotionFitnessSectionProps = { onRewardPoints: (value: number) => void; };

export function EmotionFitnessSection(props: EmotionFitnessSectionProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Emotion Fitness</h2>
      <button onClick={() => props.onRewardPoints(5)}>Earn reward</button>
    </div>
  );
}
