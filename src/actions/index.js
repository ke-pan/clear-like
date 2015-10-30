import { ADD, UPDATE, DELETE, COMPLETE } from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: ADD, text }
}

export function updateTodo(id, text) {
  return { type: UPDATE, id, text }
}

export function deleteTodo(id) {
  return { type: DELETE, id }
}

export function completeTodo(id) {
  return { type: COMPLETE, id }
}
