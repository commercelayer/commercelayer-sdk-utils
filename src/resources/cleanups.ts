import type { Cleanup, CleanupCreate } from "@commercelayer/sdk"
import type { Task, TemplateTask } from "../batch"
import { type ResourceJobOutput, splitOutputJob, jobsToBatchTasks, type JobOptions, executeJobs } from "../jobs"



export type CleanupResult = Cleanup



export const splitCleanup = async (clp: CleanupCreate, options?: JobOptions): Promise<CleanupCreate[]> => {
	return splitOutputJob<CleanupCreate>(clp, 'cleanups', options)
}


export const cleanupsToBatchTasks = (cleanups: CleanupCreate[], baseTask?: TemplateTask): Array<Task & { operation: 'create' }> => {
	return jobsToBatchTasks(cleanups as ResourceJobOutput[], 'cleanups',  baseTask)
}


export const executeSplitCleanups = async (cleanups: CleanupCreate[], options?: JobOptions): Promise<CleanupResult[]> => {
	return executeJobs<Cleanup>(cleanups, 'cleanups', options)
}


export const executeCleanup = async (clp: CleanupCreate, options?: JobOptions): Promise<CleanupResult[]> => {
	const cleanups = await splitCleanup(clp, options)
	return executeSplitCleanups(cleanups, options)
}



export const cleanups = {
	split: splitCleanup,
	execute: executeCleanup,
	toBatchTasks: cleanupsToBatchTasks,
}
