type GreenPointsStoreProps = {
  greenPoints: number;
  onDeductPoints: (value: number) => void;
};

export function GreenPointsStore(props: GreenPointsStoreProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Points Store</h2>
      <p>Current points: {props.greenPoints}</p>
      <button onClick={() => props.onDeductPoints(10)}>Redeem</button>
    </div>
  );
}
