function formatearFecha(unafecha, opciones) {
  const fecha = new Date(unafecha);
  return fecha.toLocaleDateString("es-ES", opciones);
}

const fechaHora = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Europe/Madrid",
};
const fechaHoraCorta = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Europe/Madrid",
};
const fechaHoraCortisima = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Europe/Madrid",
};
const soloFecha = {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Europe/Madrid",
};

const soloHora = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Europe/Madrid",
};

module.exports = {
  formatearFecha,
  fechaHora,
  fechaHoraCorta,
  fechaHoraCortisima,
  soloFecha,
  soloHora,
};
