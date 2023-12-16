import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function currentDay() {
  const date = new Date();
  const day = date.getDay();

  // Using Monday - Sunday instead of Sunday to Saturday
  return day === 0 ? 7 : day;
}

export function addMinutesToTimeString(time: `${number}:${number}`, minutes: number) {
  const hoursAndMinutes = time.split(':');

  const minuteInMilliseconds = 1000 * 60;
  const hourInMilliseconds = minuteInMilliseconds * 60;
  const milliseconds =
    Number(hoursAndMinutes[0]) * hourInMilliseconds +
    Number(hoursAndMinutes[1]) * minuteInMilliseconds;

  const addedTimeMilliseconds = minutes * minuteInMilliseconds;

  const sumMilliseconds = milliseconds + addedTimeMilliseconds;

  const utcHours = Math.floor(sumMilliseconds / hourInMilliseconds) % 24;
  const utcMinutes = (sumMilliseconds / minuteInMilliseconds) % 60;

  return `${utcHours < 10 ? '0' : ''}${utcHours}:${utcMinutes < 10 ? '0' : ''}${utcMinutes}`;
}

export const dayName = [
  'Esmaspäev',
  'Teisipäev',
  'Kolmapäev',
  'Neljapäev',
  'Reede',
  'Laupäev',
  'Pühapäev',
];
