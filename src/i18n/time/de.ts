const texts = {
  past: {
    now: 'gerade',
    second: 'vor einer Sekunde',
    seconds: 'vor %s Sekunden',
    minute: 'vor einer Minute',
    minutes: 'vor %s Minuten',
    hour: 'vor einer Stunde',
    hours: 'vor %s Stunden',
    day: 'vor einem Tag',
    days: 'vor %s Tagen',
    week: 'vor einer Woche',
    weeks: 'vor %s Wochen',
    month: 'vor einem Monat',
    months: 'vor %s Monaten',
    year: 'vor einem Jahr',
    years: 'vor %s Jahren'
  },
  future: {
    now: 'jetzt',
    second: 'in einer Sekunde',
    seconds: 'in %s Sekunden',
    minute: 'in einer Minute',
    minutes: 'in %s Minuten',
    hour: 'in einer Stunde',
    hours: 'in %s Stunden',
    day: 'in einem Tag',
    days: 'in %s Tagen',
    week: 'in einer Woche',
    weeks: 'in %s Wochen',
    month: 'in einem Monat',
    months: 'in %s Monaten',
    year: 'in einem Jahr',
    years: 'in %s Jahren'
  }
};
const de = (number: number, index: number, total_sec: number) => {
  return [
    [texts.past.now, texts.future.now],
    [texts.past.seconds, texts.future.seconds],
    [texts.past.minute, texts.future.minute],
    [texts.past.minutes, texts.future.minutes],
    [texts.past.hour, texts.future.hour],
    [texts.past.hours, texts.future.hours],
    [texts.past.day, texts.future.day],
    [texts.past.days, texts.future.days],
    [texts.past.week, texts.future.week],
    [texts.past.weeks, texts.future.weeks],
    [texts.past.month, texts.future.month],
    [texts.past.months, texts.future.months],
    [texts.past.year, texts.future.year],
    [texts.past.years, texts.future.years]
  ][index];
};
export default de;
