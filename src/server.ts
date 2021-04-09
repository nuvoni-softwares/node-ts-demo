import app from './app'

class Server {
    start(): void {
        app.listen(app.get('port'), () => {
            console.log(`IMED is running on ${app.get('port')}`)
        })
    }
}

const server = new Server()

server.start()