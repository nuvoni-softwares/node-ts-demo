import app from './app'

class Server {
    readonly emailContato = 'contato@nuvoni.com.br'

    start(): void {
        app.listen(app.get('port'), () => {
            console.log(`IMED is running on ${app.get('port')}`)
            console.log(`Envie seu curriculo para ${this.emailContato}`);
        })
    }
}

const server = new Server()

server.start()