const date = new Date();

  const monthDate = Intl.DateTimeFormat('pt-BR', {
    month: 'short',
  }).format(date);
  const weekday = Intl.DateTimeFormat('pt-BR', {
    weekday: 'short',
  }).format(date);
  const day = Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
  }).format(date);
  const year = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
  }).format(date);

  export function formatDate() {
    const week = weekday.toUpperCase();
    const month = monthDate.charAt(0).toUpperCase() + monthDate.slice(1);
    return `${week} ${day} ${month} de ${year}`;
  }