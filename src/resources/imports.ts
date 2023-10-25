import type { Import, ImportCreate } from "@commercelayer/sdk"
import type { Task, TemplateTask } from "../batch"
import { splitInputJob, jobsToBatchTasks, type JobOptions, executeJobs } from "../jobs"



export type ImportResult = Import



export const splitImport = (imp: ImportCreate, options?: JobOptions): ImportCreate[] => {
	return splitInputJob<ImportCreate>(imp, 'imports', options)
}


export const importsToBatchTasks = (imports: ImportCreate[], baseTask?: TemplateTask): Array<Task & { operation: 'create' }> => {
	return jobsToBatchTasks(imports, 'imports',  baseTask)
}


export const executeSplitImports = async (imports: ImportCreate[], options?: JobOptions): Promise<ImportResult[]> => {
	return executeJobs<Import>(imports, 'imports', options)
}


export const executeImport = async (imp: ImportCreate, options?: JobOptions): Promise<ImportResult[]> => {
	const imports = splitImport(imp, options)
	return executeSplitImports(imports, options)
}



export const imports = {
	split: splitImport,
	execute: executeImport,
	toBatchTasks: importsToBatchTasks,
}
