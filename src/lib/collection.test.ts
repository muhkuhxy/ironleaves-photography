import { expect, test } from "vitest"
import { splitAt, dropWhile } from "./collections"

test("dropWhile", () => {
  expect(dropWhile([1, 2, 3], (x) => x !== 2)).toEqual([2, 3])
})

test("splitAt empty", () => {
  expect(splitAt([], (x) => x % 2 !== 0)).toEqual([])
})

test("splitAt head", () => {
  expect(splitAt([1, 2, 3], (x) => x % 2 !== 0)).toEqual([[1, 2], [3]])
})

test("splitAt simple", () => {
  // console.log(splitAt([1,2,3,4,5], x => x % 2 === 0))
  expect(splitAt([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0)).toEqual([
    [1],
    [2, 3],
    [4, 5],
    [6],
  ])
})
