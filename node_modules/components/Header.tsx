type HeaderProps = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  selectedGender: string;
  setSelectedGender: (value: string) => void;
  greenPoints: number;
  dailyStreak: number;
  onOpenSOS: () => void;
  isVoiceActive: boolean;
  onToggleVoice: () => void;
};

export function Header(props: HeaderProps) {
  return (
    <header style={{ padding: 16, borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <strong>PranaFit</strong>
          <div style={{ fontSize: 12, color: '#64748b' }}>Holistic Lifestyle & Preventive Health</div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <button onClick={() => props.setActiveTab('today')}>Today</button>
          <button onClick={() => props.setActiveTab('emotion')}>Emotion</button>
          <button onClick={() => props.setActiveTab('nutrition')}>Nutrition</button>
          <button onClick={() => props.onOpenSOS()}>SOS</button>
          <button onClick={() => props.onToggleVoice()}>{props.isVoiceActive ? 'Mute' : 'Voice'}</button>
          <span>Points: {props.greenPoints}</span>
          <span>Streak: {props.dailyStreak}</span>
        </div>
      </div>
    </header>
  );
}
