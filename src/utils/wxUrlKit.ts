const AuthCenterUrl = 'http://hknb.haofangkankan.com/m/bsk/basket'

export const getProviderUrlInAuthCenterMp = (redirectUrl: string): string => {
  return `${AuthCenterUrl}?redirect=${encodeURIComponent(redirectUrl)}`
}