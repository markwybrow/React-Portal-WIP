export function formatDate(dateStr) {
  const dte = new Date(dateStr);
  return `${dte.getDate()} ${Months[dte.getMonth()]} ${dte.getFullYear()}`;
}

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function getlocaleTime(dateStr) {
  const dte = new Date(dateStr);
  let formattedetime = dte.toLocaleTimeString('en-AU').split(' ');
  // remove the last :00 from datetime
  return `${formattedetime[0].slice(0, formattedetime[0].length - 3)}${formattedetime[1]}`;
}
