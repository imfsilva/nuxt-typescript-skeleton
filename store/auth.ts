import { GetterTree, ActionTree, MutationTree } from 'vuex'

// change user interface with real user properties
export interface User {
  token: string
  permissions: string[]
  data: { name: string; email: string; username: string }
}

interface AuthState {
  loggedInUser: User | null
}

export const state = (): AuthState => ({
  loggedInUser: null
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  loggedInUser: (state) => state.loggedInUser
}

export const mutations: MutationTree<RootState> = {
  updateLoggedInUser: (state, newUser: User) => {
    state.loggedInUser = newUser
  }
}

export const actions: ActionTree<RootState, RootState> = {}
