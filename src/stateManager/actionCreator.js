export const ACTIONS = {
    TITLE_CHANGED: 'TITLE_CHANGED',
    TASK_ADDED: 'TASK_ADDED',
    TASK_DONE: 'TASK_DONE',
    TASK_DELETED: 'TASK_DELETED',
}

export const titleChanged = title => ({ type: ACTIONS.TITLE_CHANGED, payload: title })
export const taskAdded = title => ({ type: ACTIONS.TASK_ADDED, payload: title })
export const taskDone = id => ({ type: ACTIONS.TASK_DONE, payload: id })
export const taskDeleted = id => ({ type: ACTIONS.TASK_DELETED, payload: id })
