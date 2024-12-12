import type { Statuses, StatusTexts } from './enumeration.d.ts'

interface ResponseStatusConstructor {
  new(value: Statuses | StatusTexts): ResponseStatusConstructor

  (value: Statuses | StatusTexts): ResponseStatusConstructor

  has(value: Statuses | StatusTexts): boolean

  get(value: Statuses | StatusTexts): string | number

  readonly prototype: ResponseStatusConstructor

  readonly [Symbol.toStringTag]: 'ResponseStatus'
}

export let ResponseStatus: ResponseStatusConstructor
