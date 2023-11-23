export interface IDbCheckpoint {
    title: string,
    name: string,
    executerInfo?: string,
    managerInfo?: string
  }
export interface IDbTask {
    title: string,
    body: string,
    priority: number
  }

export interface ICheckpoint {
    name: string,
    executerInfo?: string,
    managerInfo?: string
  }

export interface ITask {
    title: string
    checkPoints: ICheckpoint[]
    body: string
  }
