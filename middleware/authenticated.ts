import { Middleware } from '@nuxt/types'

const authenticated: Middleware = (context) => {
  if (!context.store.getters.loggedInUser) {
    return context.redirect('/auth/login')
  }
}

export default authenticated
