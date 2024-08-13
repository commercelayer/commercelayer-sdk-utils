
export const currentTokenData = (accessToken: string): any => {
  return JSON.parse(atob(accessToken.split('.')[1]))
}
