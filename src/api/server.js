require('dotenv').config()
const app = require('./app')

const PORT = process.env.MYSQL_PORT || 3001

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
