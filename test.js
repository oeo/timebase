const assert = require('assert');
const moment = require('moment-timezone');
const timebase = require('./module');

describe('timebase', function() {
  it('should return start of day by default', function() {
    const result = timebase();
    const expected = moment().tz('America/New_York').startOf('day').unix();
    assert.strictEqual(result, expected);
  });

  it('should handle Unix timestamp input', function() {
    const input = 1684108800; // 2023-05-15 00:00:00 UTC
    const result = timebase(input, { timezone: 'UTC' });
    assert.strictEqual(result, input);
  });

  it('should handle string input', function() {
    const input = '2023-05-15T14:30:00Z';
    const result = timebase(input);
    const expected = moment.tz('2023-05-15', 'America/New_York').startOf('day').unix();
    assert.strictEqual(result, expected);
  });

  it('should handle Date object input', function() {
    const input = new Date();
    const result = timebase(input);
    const expected = moment.tz(new Date(), 'America/New_York').startOf('day').unix();
    assert.strictEqual(result, expected);
  });

  it('should return start of minute', function() {
    const result = timebase({ startPoint: 'minute' });
    const expected = moment().tz('America/New_York').startOf('minute').unix();
    assert.strictEqual(result, expected);
  });

  it('should return start of hour', function() {
    const result = timebase({ startPoint: 'hour' });
    const expected = moment().tz('America/New_York').startOf('hour').unix();
    assert.strictEqual(result, expected);
  });

  it('should return start of month', function() {
    const result = timebase({ startPoint: 'month' });
    const expected = moment().tz('America/New_York').startOf('month').unix();
    assert.strictEqual(result, expected);
  });

  it('should return start of year', function() {
    const result = timebase({ startPoint: 'year' });
    const expected = moment().tz('America/New_York').startOf('year').unix();
    assert.strictEqual(result, expected);
  });

  it('should return result in milliseconds', function() {
    const result = timebase({ format: 'unixMilliseconds' });
    const expected = moment().tz('America/New_York').startOf('day').valueOf();
    assert.strictEqual(result, expected);
  });

  it('should return result as Date object', function() {
    const result = timebase({ format: 'date' });
    const expected = moment().tz('America/New_York').startOf('day').toDate();
    assert.deepStrictEqual(result, expected);
  });

  it('should use specified timezone', function() {
    const result = timebase({ timezone: 'UTC' });
    const expected = moment().tz('UTC').startOf('day').unix();
    assert.strictEqual(result, expected);
  });

  it('should throw error for invalid startPoint', function() {
    assert.throws(() => timebase({ startPoint: 'invalid' }), Error, 'Invalid startPoint');
  });

  it('should throw error for invalid format', function() {
    assert.throws(() => timebase({ format: 'invalid' }), Error, 'Invalid format');
  });
});
