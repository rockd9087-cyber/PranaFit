type EmergencySOSModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function EmergencySOSModal(props: EmergencySOSModalProps) {
  if (!props.isOpen) return null;
  return (
    <div style={{ padding: 20 }}>
      <h2>Emergency SOS</h2>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}
