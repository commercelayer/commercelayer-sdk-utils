import type { Export, ExportCreate } from "@commercelayer/sdk"
import type { Task, TemplateTask } from "../batch"
import { type ResourceJobOutput, splitOutputJob, jobsToBatchTasks, type JobOptions, executeJobs } from "../jobs"



export type ExportResult = Export



export const splitExport = async (exp: ExportCreate, options?: JobOptions): Promise<ExportCreate[]> => {
	return splitOutputJob<ExportCreate>(exp, 'exports', options)
}


export const exportsToBatchTasks = (exports: ExportCreate[], baseTask?: TemplateTask): Array<Task & { operation: 'create' }> => {
	return jobsToBatchTasks(exports as ResourceJobOutput[], 'exports',  baseTask)
}


export const executeSplitExports = async (exports: ExportCreate[], options?: JobOptions): Promise<ExportResult[]> => {
	return executeJobs<Export>(exports, 'exports', options)
}


export const executeExport = async (exp: ExportCreate, options?: JobOptions): Promise<ExportResult[]> => {
	const exportz = await splitExport(exp, options)
	return executeSplitExports(exportz, options)
}



export const exportz = {
	split: splitExport,
	execute: executeExport,
	toBatchTasks: exportsToBatchTasks,
}
