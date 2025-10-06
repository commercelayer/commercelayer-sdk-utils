import type { QueryFilter } from '@commercelayer/sdk'
import type { NonEmptyString } from '../../types'



type NoValOperator = () => QueryFilter
type SingleValOperator = <T extends string>(val: NonEmptyString<T>) => QueryFilter
type MultipleValOperator = <T extends string>(...val: Array<NonEmptyString<T>>) => QueryFilter


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

  protected readonly filterValues: Filter

  constructor(filterVals?: Filter) {
    this.filterValues = filterVals || new Filter()
  }

  protected addValue(val: string): Filter {
    return this.filterValues.add(val)
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


  private addOperator<T extends string>(op: string, ...val: Array<NonEmptyString<T>>): QueryFilter {
    this.addValue(op)
    if (val.length > 0) this.addValue(val.join(','))
    return this.build()
  }

  private keyval(): { key: string, val: string } {
    const newFilter = this.filterValues.get()
    const val = newFilter.pop() || ''
    const key = newFilter.join('_')
    return { key, val }
  }

  private build(): QueryFilter {
    const kv = this.keyval()
    // const filter = `${kv.key}=${kv.val}`
    const filter = { [kv.key]: kv.val } 
    this.filterValues.clear()
    return filter
  }

  // ##__FILTER_OPERATORS_START__##
	eq: SingleValOperator = (val) => { return this.addOperator('eq', val) }
	eq_or_null: SingleValOperator = (val) => { return this.addOperator('eq_or_null', val) }
	not_eq: SingleValOperator = (val) => { return this.addOperator('not_eq', val) }
	not_eq_or_null: SingleValOperator = (val) => { return this.addOperator('not_eq_or_null', val) }
	matches: SingleValOperator = (val) => { return this.addOperator('matches', val) }
	does_not_match: SingleValOperator = (val) => { return this.addOperator('does_not_match', val) }
	matches_any: MultipleValOperator = (...val) => { return this.addOperator('matches_any', ...val) }
	matches_all: MultipleValOperator = (...val) => { return this.addOperator('matches_all', ...val) }
	does_not_match_any: MultipleValOperator = (...val) => { return this.addOperator('does_not_match_any', ...val) }
	does_not_match_all: MultipleValOperator = (...val) => { return this.addOperator('does_not_match_all', ...val) }
	lt: SingleValOperator = (val) => { return this.addOperator('lt', val) }
	lteq: SingleValOperator = (val) => { return this.addOperator('lteq', val) }
	gt: SingleValOperator = (val) => { return this.addOperator('gt', val) }
	gteq: SingleValOperator = (val) => { return this.addOperator('gteq', val) }
	present: NoValOperator = () => { return this.addOperator('present', 'true') }
	blank: NoValOperator = () => { return this.addOperator('blank', 'true') }
	null: NoValOperator = () => { return this.addOperator('null', 'true') }
	not_null: NoValOperator = () => { return this.addOperator('not_null', 'true') }
	in: MultipleValOperator = (...val) => { return this.addOperator('in', ...val) }
	in_or_null: SingleValOperator = (val) => { return this.addOperator('in_or_null', val) }
	not_in: MultipleValOperator = (...val) => { return this.addOperator('not_in', ...val) }
	not_in_or_null: MultipleValOperator = (...val) => { return this.addOperator('not_in_or_null', ...val) }
	lt_any: MultipleValOperator = (...val) => { return this.addOperator('lt_any', ...val) }
	lteq_any: MultipleValOperator = (...val) => { return this.addOperator('lteq_any', ...val) }
	gt_any: MultipleValOperator = (...val) => { return this.addOperator('gt_any', ...val) }
	gteq_any: MultipleValOperator = (...val) => { return this.addOperator('gteq_any', ...val) }
	lt_all: MultipleValOperator = (...val) => { return this.addOperator('lt_all', ...val) }
	lteq_all: MultipleValOperator = (...val) => { return this.addOperator('lteq_all', ...val) }
	gt_all: MultipleValOperator = (...val) => { return this.addOperator('gt_all', ...val) }
	gteq_all: MultipleValOperator = (...val) => { return this.addOperator('gteq_all', ...val) }
	not_eq_all: MultipleValOperator = (...val) => { return this.addOperator('not_eq_all', ...val) }
	start: SingleValOperator = (val) => { return this.addOperator('start', val) }
	not_start: SingleValOperator = (val) => { return this.addOperator('not_start', val) }
	start_any: MultipleValOperator = (...val) => { return this.addOperator('start_any', ...val) }
	not_start_any: MultipleValOperator = (...val) => { return this.addOperator('not_start_any', ...val) }
	not_start_all: MultipleValOperator = (...val) => { return this.addOperator('not_start_all', ...val) }
	end: SingleValOperator = (val) => { return this.addOperator('end', val) }
	not_end: SingleValOperator = (val) => { return this.addOperator('not_end', val) }
	end_any: MultipleValOperator = (...val) => { return this.addOperator('end_any', ...val) }
	end_all: MultipleValOperator = (...val) => { return this.addOperator('end_all', ...val) }
	not_end_any: MultipleValOperator = (...val) => { return this.addOperator('not_end_any', ...val) }
	not_end_all: MultipleValOperator = (...val) => { return this.addOperator('not_end_all', ...val) }
	cont: SingleValOperator = (val) => { return this.addOperator('cont', val) }
	not_cont: SingleValOperator = (val) => { return this.addOperator('not_cont', val) }
	cont_any: MultipleValOperator = (...val) => { return this.addOperator('cont_any', ...val) }
	cont_all: MultipleValOperator = (...val) => { return this.addOperator('cont_all', ...val) }
	not_cont_all: MultipleValOperator = (...val) => { return this.addOperator('not_cont_all', ...val) }
	jcont: SingleValOperator = (val) => { return this.addOperator('jcont', val) }
	true: NoValOperator = () => { return this.addOperator('true', 'true') }
	false: NoValOperator = () => { return this.addOperator('false', 'true') }
  // ##__FILTER_OPERATORS_STOP__##

  get or(): M {
    this.addValue('or')
    return this.#master
  }

}


export abstract class FilterOperand<M extends FilterMaster> extends FilterObject {

  protected readonly master: M
  protected readonly operator: FilterOperator<M>

  constructor(master?: M, operator?: FilterOperator<M>, filter?: Filter) {
    super(filter)
    this.master = master || this as unknown as M
    this.operator = operator || new FilterOperator<M>(this.master, this.filterValues)
  }

  protected addField(val: string): typeof this.operator {
    this.addValue(val)
    return this.operator
  }

  protected addRelationship(val: string): Filter {
    return this.addValue(val)
  }

}


export class ResourceFilterFields<M extends FilterMaster> extends FilterOperand<M> {
	get id(): FilterOperator<M> { return this.addField('id') }
  get created_at(): FilterOperator<M> { return this.addField('created_at') }
	get updated_at(): FilterOperator<M> { return this.addField('updated_at') }
	get reference(): FilterOperator<M> { return this.addField('reference') }
	get reference_origin(): FilterOperator<M> { return this.addField('reference_origin') }
	get metadata(): FilterOperator<M> { return this.addField('metadata') }
}

export type ResourceFilter = ResourceFilterFields<ResourceFilter>
