/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-01-09T00:56:40+01:00
 * @Copyright: Technology Studio
**/

import { ESLint } from 'eslint'

test('shoud not have lint issues', async () => {
  const eslint = new ESLint()
  const results = await eslint.lintFiles(['test/**/*.tsx'])
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- result should have no errors
  const isWithoutError = results.every((result: { errorCount: number }) => result.errorCount === 0)
  expect(isWithoutError).toBe(true)
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- we want to make the timeout longer
}, 20000)
