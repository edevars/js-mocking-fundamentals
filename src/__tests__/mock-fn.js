/**
 * Often when writing JavaScript tests and mocking
 * dependencies, you’ll want to verify that the function
 * was called correctly. That requires keeping track of
 * how often the function was called and what arguments
 * it was called with. That way we can make assertions
 * on how many times it was called and ensure it was
 * called with the right arguments.
 *
 * Task: use jest assertions to check
 *      1. how often the function is called
 *      2. the function is called with the right arguments
 *
 * Execute: Use `npx jest --watch src/__tests__/mock-fn.js` to watch the test
 */

const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner

  // Mock function -> Sigue los argumentos de la función y su comportamiento 
  utils.getWinner = jest.fn((p1, p2) => p1)
  let mockFunctionGetWinner = utils.getWinner


  // Your code:
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')

  // Mock function object
  // console.log(mockFunctionGetWinner.mock)

  // This assetion replace all bottom assertions
  expect(mockFunctionGetWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])
  // expect(mockFunctionGetWinner).toHaveBeenCalledTimes(2)
  // expect(mockFunctionGetWinner).toHaveBeenCalledWith('Kent C. Dodds', 'Ken Wheeler')
  // // First time it's called
  // expect(mockFunctionGetWinner).toHaveBeenNthCalledWith(1, 'Kent C. Dodds', 'Ken Wheeler')
  // // Second time it's called
  // expect(mockFunctionGetWinner).toHaveBeenNthCalledWith(2, 'Kent C. Dodds', 'Ken Wheeler')

  // cleanup
  utils.getWinner = originalGetWinner
})

/**
 * Hints:
 * - https://jestjs.io/docs/en/mock-function-api#mockfnmockcalls
 * - https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber
 * - https://jestjs.io/docs/en/expect#tohavebeennthcalledwithnthcall-arg1-arg2-
 *
 * Checkout master branch to see the answer.
 */
