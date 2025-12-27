export function formatTime(hora) {
  const [h, m] = hora.split(':');
  if (h > 0) {
    return `${h}`;
  }
  return m;
}