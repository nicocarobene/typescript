
export interface Sub{
    nick: string
    avatar: string
    description?: string
    subMonths: number
  }
  
export type SubResponseFromApi= Array<{
  nick: string
  months: number
  profileUrl: string
  description: string
}>