import assert from 'assert'
import { count, increase } from '../count.js'

it('increase 함수를 호출하면, count 데이터가 1 증가!', () => {
  assert.equal(count, 0)
  increase()
  assert.equal(count, 7) // 실패!
})

it('increase 함수를 호출하면, count 값을 반환!', () => {
  assert.equal(increase(), count)
})