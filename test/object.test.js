const XEUtils = require('../index')

test('assign()', () => {
  let obj1 = { bb: { b: 11 } }
  let obj2 = XEUtils.assign(true, obj1, { a: 11 })
  expect(
    obj1 === obj2
  ).toEqual(false)
  expect(
    obj1.bb === obj2.bb
  ).toEqual(false)
  obj1 = { bb: { b: 11 } }
  obj2 = XEUtils.assign(obj1, { a: 11 })
  expect(
    obj1.bb === obj2.bb
  ).toEqual(true)
  expect(
    obj1.bb === obj2.bb
  ).toEqual(true)
})

test('objectMap()', () => {
  expect(
    XEUtils.objectMap({ a: { type: 'a' }, b: { type: 'b' } }, item => item.type)
  ).toEqual({ a: 'a', b: 'b' })
  expect(
    XEUtils.objectMap([{ type: 'a' }, { type: 'b' }], item => item.type)
  ).toEqual({ 0: 'a', 1: 'b' })
  expect(
    XEUtils.objectMap([11, 22, 33], item => item)
  ).toEqual({ 0: 11, 1: 22, 2: 33 })
})

test('objectEach()', () => {
  let rest = []
  XEUtils.each({ a: 11, b: 22, c: 33, d: 44 }, (item, key, obj) => {
    rest.push([item, key])
  })
  expect(
    rest
  ).toEqual([[11, 'a'], [22, 'b'], [33, 'c'], [44, 'd']])
})

test('lastObjectEach()', () => {
  let rest = []
  XEUtils.lastObjectEach({ a: 11, b: 22, c: 33, d: 44 }, (item, key, obj) => {
    rest.push([item, key])
  })
  expect(
    rest
  ).toEqual([[44, 'd'], [33, 'c'], [22, 'b'], [11, 'a']])
})
