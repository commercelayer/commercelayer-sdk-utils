import type { Import, ImportCreate } from "@commercelayer/sdk"
import type { Task, TemplateTask } from "../batch"
import { type ResourceJobInput, splitInputJob, jobsToBatchTasks } from "../jobs"



export type ImportResult = Import



export const splitImport = (imp: ImportCreate, impSize?: number): ImportCreate[] => {
	return splitInputJob<ImportCreate>(imp, 'imports', impSize)
}


export const importsToBatchTasks = (imports: ImportCreate[], baseTask?: TemplateTask): Array<Task & { operation: 'create' }> => {
	return jobsToBatchTasks(imports as ResourceJobInput[], 'imports',  baseTask)
}


/*
export const executeExports = async (exports: ExportCreate[]): Promise<ExportResult[]> => {
	return executeOutputJobs<Export>(exports, 'exports')
}
*/



export const imports = {
	split: splitImport,
	toBatchTasks: importsToBatchTasks,
}
