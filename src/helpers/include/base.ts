import { type QueryParams } from "@commercelayer/sdk"


class IncludePath {

  #resources: string[] = []

  clear(): this {
    this.#resources = []
    return this
  }
  
  add(resource: string): this {
    this.#resources.push(resource)
    return this
  }

  get(): string[] {
    return this.#resources
  }

}


export class ResourceInclude {

  readonly #includePath: IncludePath

  constructor(includePath?: IncludePath) {
    this.#includePath = includePath || new IncludePath()
  }

  protected include(resource: string): IncludePath {
    return this.#includePath.add(resource)
  }

  protected get(): string {
    return this.#includePath.get().join('.')
  }

  public build(): string {
    const newInclude = this.get()
    this.#includePath.clear()
    return newInclude
  }

  public addTo(filter: QueryParams): void {
    const newInclude = this.get()
    const currentInclude = filter.include || []
    if (newInclude && !currentInclude.includes(newInclude)) {
      currentInclude.push(newInclude)
      filter.include = currentInclude
    }
    this.#includePath.clear()
  }

}
