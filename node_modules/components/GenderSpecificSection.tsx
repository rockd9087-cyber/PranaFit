type GenderSpecificSectionProps = {
  currentGender: string;
  onGenderChange: (value: string) => void;
  onRewardPoints: (value: number) => void;
};

export function GenderSpecificSection(props: GenderSpecificSectionProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Gender Specific</h2>
      <button onClick={() => props.onGenderChange('female')}>Female</button>
      <button onClick={() => props.onGenderChange('male')}>Male</button>
      <button onClick={() => props.onRewardPoints(5)}>Reward</button>
    </div>
  );
}
