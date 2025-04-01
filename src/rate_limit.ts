import type { HeadersObj } from "@commercelayer/sdk"
import type { Task } from "./batch"


type ApiEnv = 'live' | 'test'


export type RateLimitHeader = {
	count?: number,
	period?: number,
	interval: number,
	limit: number,
	remaining: number
}


export type RateLimitInfo = {
	limit: number
	interval: number
	delay: number,
	requests?: number
}


export const headerRateLimits = (headers?: HeadersObj): RateLimitHeader => {
	if (!headers) throw new Error('Unable to find rate limit headers in response')
	return {
		interval: Number(headers["x-ratelimit-interval"]),
		limit: Number(headers["x-ratelimit-limit"]),
		remaining: Number(headers["x-ratelimit-remaining"])
	}
}


/*
	"erl_oauth_limit_live" : 30,
	"erl_burst_limit_uncachable_live" : 50,
	"erl_burst_limit_uncachable_test" : 25,
	"erl_burst_limit_cachable_live" : 250,
	"erl_burst_limit_cachable_test" : 125,
	"erl_average_limit_uncachable_live" : 200,
	"erl_average_limit_uncachable_test" : 100,
	"erl_average_limit_cachable_live" : 1000,
	"erl_average_limit_cachable_test" : 500
 */
export const computeRateLimits = (rateLimit: RateLimitHeader, resourceType: string | Task, allRequests?: number | Task[], env?: ApiEnv): RateLimitInfo => {

	const apiEnv = env || 'test'

	const BURST_INTERVAL = 10 * 1000 // 10 seconds
	const BURST_MAX_REQUESTS = (apiEnv === 'live')? 50 : 25

	const resType = (typeof resourceType === 'string') ? resourceType : resourceType.resourceType
	// const task = (typeof currentTask === 'number')? allTasks[currentTask] : currentTask

	const rli: RateLimitInfo = {
		limit: rateLimit.limit,
		interval: rateLimit.interval,
		delay: 0
	}

	const allRequests_ = allRequests || (rateLimit?.limit * 2) || 0	// A number over the limit

	if (rateLimit) {
		const totalRequests = (typeof allRequests_ === 'number') ? allRequests_ : allRequests_.length
		rli.requests = totalRequests
		if (totalRequests >= rateLimit.limit) rli.delay = Math.ceil((rateLimit.interval * 1000) / rateLimit.limit)
		else {
			const resourceRequests = (typeof allRequests_ === 'number') ? totalRequests : allRequests_.filter(t => (t.resourceType === resType)).length
			if (resourceRequests >= BURST_MAX_REQUESTS) rli.delay = Math.ceil(BURST_INTERVAL / BURST_MAX_REQUESTS)
		}
	}

	return rli

}
