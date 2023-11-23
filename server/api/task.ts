import sqlite3 from 'sqlite3'
import type { ICheckpoint, IDbCheckpoint, IDbTask, ITask } from '../../src/interfaces'

export class Task implements ITask {
  title: string
  checkPoints: ICheckpoint[]
  body: string

  constructor (title: string, checkPoints: ICheckpoint[], body: string) {
    this.title = title
    this.checkPoints = checkPoints
    this.body = body
  }

  static fromDb (dbTask: IDbTask, checkPoints: IDbCheckpoint[]) {
    const title = dbTask.title
    const body = dbTask.body
    return new Task(title, checkPoints, body)
  }
}

export default defineEventHandler((_) => {
  const db = new sqlite3.Database('./src/data.sqlite3')
  return new Promise<Task[]>((resolve, _reject) => {
    db.serialize(() => {
      const tasks: Task[] = []
      let count: number = 0
      db.get('select count(*) as count from task', (_err, recordCount: { count: number }) => {
        count = recordCount.count
      })
      db.each('select * from task order by priority', (_err, dbTaskRecord: IDbTask) => {
        db.all<IDbCheckpoint>(`select * from checkpoint where title = "${dbTaskRecord.title}"`, (_err, dbCheckpointRecords: IDbCheckpoint[]) => {
          tasks.splice(dbTaskRecord.priority - 1, 0, Task.fromDb(dbTaskRecord, dbCheckpointRecords))
          count -= 1
          if (count === 0) {
            resolve(tasks)
          }
        })
      })
    })
  })
})
