import { registerMiddleware } from 'tarojs-router-next'
import { AuthCheck } from './auth-check'

registerMiddleware(AuthCheck)