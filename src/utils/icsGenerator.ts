export interface IcsEventParams {
  title: string;
  time: string;
  venue: string;
}

export function generateAndDownloadIcs({ title, time, venue }: IcsEventParams): void {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Tekno Krraft 2026//GDG ITER Chapter//EN',
    'BEGIN:VEVENT',
    `SUMMARY:Tekno Krraft 2026: ${title}`,
    `DESCRIPTION:Technical Session at Tekno Krraft 2026, GDG @ SOA, ITER Chapter. Time: ${time}`,
    `LOCATION:${venue}, ITER Campus, Bhubaneswar`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const fileName = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

