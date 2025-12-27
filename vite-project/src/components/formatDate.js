export function formatDate(data) {
  const [year, mounth, day] = data.split("-");
  return `${day}/${mounth}/${year}`;
}
