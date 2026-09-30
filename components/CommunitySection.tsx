type CommunitySectionProps = { onRewardPoints: (value: number) => void; };

export function CommunitySection(props: CommunitySectionProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Community</h2>
      <button onClick={() => props.onRewardPoints(5)}>Share win</button>
    </div>
  );
}
