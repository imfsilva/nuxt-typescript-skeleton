import { state, User } from '@/store/auth'

interface QueryParams {
  [key: string]: string
}

interface CustomRequest {
  uri: string
  body?: unknown
  queryParams?: QueryParams
}

interface ResponseResult {
  status: number
  data: unknown
}

const authHeader = (): Headers => {
  const loggedInUser: User | null = state().loggedInUser
  const headers = new Headers()

  headers.append('Content-Type', 'application/json')

  if (loggedInUser) {
    headers.append('Authorization', `Bearer ${loggedInUser.token}`)
  }

  return headers
}

const responseHandler = async (
  response: Response
): Promise<ResponseResult> => ({
  status: response.status,
  data: await response.json()
})

const sendRequest = async (uri: string, requestOptions: RequestInit) => {
  const response: Response = await fetch(uri, requestOptions)
  return responseHandler(response)
}

export const GET = async (request: CustomRequest) => {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: authHeader()
  }

  if (request.queryParams) {
    const URIWithQueryParams = `${request.uri}?${new URLSearchParams(
      request.queryParams
    ).toString()}`
    return sendRequest(URIWithQueryParams, requestOptions)
  }

  return sendRequest(request.uri, requestOptions)
}

export const POST = async (request: CustomRequest) => {
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(request.body)
  }

  return sendRequest(request.uri, requestOptions)
}

export const PUT = async (request: CustomRequest) => {
  const requestOptions: RequestInit = {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(request.body)
  }

  return sendRequest(request.uri, requestOptions)
}

export const DELETE = async (request: CustomRequest) => {
  const requestOptions: RequestInit = {
    method: 'DELETE',
    headers: authHeader()
  }

  return sendRequest(request.uri, requestOptions)
}
