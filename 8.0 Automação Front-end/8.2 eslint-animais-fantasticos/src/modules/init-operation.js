export default function initOperation() {
  const operation = document.querySelector("[data-semana]");
  const weekdays = operation.dataset.semana.split(",").map(Number);
  const weekhour = operation.dataset.horario.split(",").map(Number);

  const now = new Date();

  const today = now.getDay();

  const openWeekday = weekdays.indexOf(today) !== -1;
  const openingHours = today >= weekhour[0] || today < weekhour[1];
  if (openWeekday && openingHours) operation.classList.add("openned");
}
