var compare = require('./helpers/compare')

describe('Pythonlike json.tool', function () {
  it('stringifies primitives in the same way', function () {
    return compare([
      null,
      0,
      123,
      -123.6,
      '',
      'hello',
      'multiline\nstring',
      true,
      false
    ])
  })

  it('stringifies arrays in the same way', function () {
    return compare([
      [],
      [1],
      [1, 2, 3],
      [1, '2', 3],
      [{}, [], {}],
      ['hello', 'world'],
      ['multiline\nstring'],
      [ 'hello',
        {
          yas: 123,
          foo: 'boo'
        }
      ]
    ])
  })

  it('stringifies objects in the same way', function () {
    return compare([
      {},
      { foo: 'boo' },
      {
        not: 'in',
        alphabetical: 'order'
      },
      {
        has: 'multiline\n\nstring'
      },
      {
        n: 123,
        empty: null,
        t: true,
        f: false,
        a: [999, 123],
        a2: [],
        a3: [{}, { foo: 'boo' }, {}],
        a4: [{
          not: 'in',
          alphabetical: 'order'
        }],
        o: {
          sub: 'objects',
          are: 'cool',
          even: 'with',
          'very weird keys': 'here',
          'REALLY_weird!!keys': 99
        }
      },
      {
        8: 'numerical',
        9: 'keys',
        10: 'are',
        11: 'ok',
        even: 'if',
        we: 'are',
        mixed: 'with',
        strings: 'yeah',
        '-10': 'negative??'
      }
    ])
  })
})
