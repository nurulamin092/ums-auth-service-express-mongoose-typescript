import mongoose from 'mongoose'
import app from './app'
const port = 9000

async function bootstrap() {
  try {
    await mongoose.connect(
      `mongodb+srv://ums-admin:HUHaUSyi6QPefW1e@cluster0.yoijtmg.mongodb.net/ums-database?retryWrites=true&w=majority`
    )
    console.log(`Database connect successfully...!!!!`)
    app.listen(port, () => {
      console.log(`Application is listening on port ${port}`)
    })
  } catch (err) {
    console.log(`Failed to connect database....`)
  }
}

bootstrap()
