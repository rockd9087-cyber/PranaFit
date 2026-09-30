type CulturalFoodSectionProps = { onRewardPoints: (value: number) => void; };

export function CulturalFoodSection(props: CulturalFoodSectionProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Cultural Food</h2>
      <button onClick={() => props.onRewardPoints(5)}>Log meal</button>
    </div>
  );
}
