
type NonEmptyString<T extends string> = T extends '' ? never: T

type SingleValOperator = <T extends string>(val: NonEmptyString<T>) => string
type MultipleValOperator = <T extends string>(...val: Array<NonEmptyString<T>>) => string


class Filter {

  #filter: string[] = []

  clear(): this {
    this.#filter = []
    return this
  }

  add(val: string): this {
    this.#filter.push(val)
    return this
  }

  get(): string[] {
    return this.#filter
  }

}


class FilterObject {

  protected readonly filterVals: Filter

  constructor(filterVals?: Filter) {
    this.filterVals = filterVals || new Filter()
  }

  protected addValue(val: string): Filter {
    return this.filterVals.add(val)
  }

}


export interface FilterMaster extends FilterObject {

}


export class FilterOperator<M extends FilterMaster> extends FilterObject {

 readonly #master: M

  constructor(master: M, filter?: Filter) {
    super(filter)
    this.#master = master
  }


  private addOperator<T extends string>(op: string, ...val: Array<NonEmptyString<T>>): string {
    this.addValue(op)
    if (val.length > 0) this.addValue(val.join(','))
    return this.build()
  }

  private build(): string {
    const newFilter = this.filterVals.get()
    const val = newFilter.pop()
    const filter = `${newFilter.join('_')}=${val}`
    this.filterVals.clear()
    return filter
  }


  eq: SingleValOperator = (val) => { return this.addOperator('eq', val) }

  in: MultipleValOperator = (...val) => { return this.addOperator('in', ...val) }

  lt: SingleValOperator = (val) =>  { return this.addOperator('lt', val) }

  matches_all: MultipleValOperator = (...val) => { return this.addOperator('matches_all', ...val) }

  get or(): M {
    this.addValue('or')
    return this.#master
  }

}


export abstract class ResourceFilter<M extends FilterMaster> extends FilterObject {

  protected readonly master: M
  protected readonly operator: FilterOperator<M>

  constructor(master?: M, operator?: FilterOperator<M>, filter?: Filter) {
    super(filter)
    this.master = master || this as unknown as M
    this.operator = operator || new FilterOperator<M>(this.master, this.filterVals)
  }

  protected addField(val: string): typeof this.operator {
    this.addValue(val)
    return this.operator
  }

  protected addRelationship(val: string): Filter {
    return this.addValue(val)
  }

}
