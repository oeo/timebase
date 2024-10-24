![Run Tests](../../actions/workflows/test.yml/badge.svg)

# timebase

get the start of a time period. uses just a singular runtime dependency, [moment-timezone](https://www.npmjs.com/package/moment-timezone).

## install

```bash
npm install timebase --save
```

## use

```javascript
const timebase = require('timebase');
timebase.DEFAULT_TIMEZONE = 'UTC';

// return the 00:00:00 unix timestamp of the current day
console.log(timebase());

// return the 00:00:00 unix timestamp of yesterday
let yesterday = timebase(timebase() - 1);
console.log(timebase(yesterday));

// give me the start of the day as a timestamp for the given unix timestamp
console.log(timebase(1684108800, {startPoint: 'day', timezone: 'America/New_York'}));

// start of current hour for now
console.log(timebase({startPoint: 'hour'}));

// start of month for now
console.log(timebase({startPoint: 'month'}));

// start of year as a date object
console.log(timebase({startPoint: 'year', format: 'date'}));

// start of the day for this date
console.log(timebase('2023-05-15T14:30:00Z'));

// start of minute for now
console.log(timebase({startPoint: 'minute'}));
```

## options

- startPoint: 'minute', 'hour', 'day', 'month', 'year' (default: 'day')
- format: 'unixSeconds', 'unixMilliseconds', 'date' (default: 'unixSeconds')
- timezone: 'America/New_York', 'UTC', etc (default: timebase.DEFAULT_TIMEZONE)

## license

mit

