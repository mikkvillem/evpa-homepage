export type Tund = {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  time: `${number}:${number}`; // "10:00" - UTC time
  duration: number; // positive number, minutes
  name: string; // class name type
  instructor?: string; // instructor types
};
