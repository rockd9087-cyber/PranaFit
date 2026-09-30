type TodayHealthFilterProps = {
  gender: string;
  healthState: { energy: number; stress: number };
  setHealthState: (value: { energy: number; stress: number }) => void;
  onCompleteAction: (points: number) => void;
  isVoiceActive: boolean;
};

export function TodayHealthFilter(props: TodayHealthFilterProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Today Health</h2>
      <p>Energy: {props.healthState.energy}</p>
      <p>Stress: {props.healthState.stress}</p>
      <button onClick={() => props.onCompleteAction(10)}>Complete action</button>
    </div>
  );
}
