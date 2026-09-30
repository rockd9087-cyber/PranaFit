type PreventiveAlertsSectionProps = { onRewardPoints: (value: number) => void; };

export function PreventiveAlertsSection(props: PreventiveAlertsSectionProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Preventive Alerts</h2>
      <button onClick={() => props.onRewardPoints(5)}>Check alerts</button>
    </div>
  );
}
