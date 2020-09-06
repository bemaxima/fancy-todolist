import { fakeApi } from '../services/services'

export const ACTIONS = {
    TITLE_CHANGED: 'TITLE_CHANGED',
    TASK_ADDED: 'TASK_ADDED',
    TASK_DONE: 'TASK_DONE',
    TASK_DELETED: 'TASK_DELETED',
    LOADING: 'LOADING'
}

export const titleChanged = title => ({ type: ACTIONS.TITLE_CHANGED, payload: title })
export const taskAdded = () => ({ type: ACTIONS.TASK_ADDED })
export const taskDone = id => ({ type: ACTIONS.TASK_DONE, payload: id })
export const taskDeleted = id => ({ type: ACTIONS.TASK_DELETED, payload: id })
export const loading = () => ({ type: ACTIONS.LOADING })
export const taskAddedWithLoading = () => (dispatch) => {
    dispatch({ type: ACTIONS.LOADING });
    fakeApi()
        .then(() => dispatch({ type: ACTIONS.TASK_ADDED }))
}