import express, { Express, NextFunction, Response, Request } from 'express'
import path from 'path'

export default function (): Express {
  const app = express()
  app.use(express.static('Shop.Client/ReactApp/build'))
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(
      path.resolve(__dirname, 'Shop.Client/ReactApp', 'build', 'index.html')
    )
  })

  return app
}
