const socketControllers = (socket) => {
    console.log('Cliente conectado ', socket.id)

    socket.on('disconnect', () => {
        console.log('Cliente desconectado ', socket.id);
    })

    socket.on('Enviar-mensaje', (payload, callback) => {
        const id = 'localhost';
        callback(id);
        
        socket.broadcast.emit('Enviar-servidor', payload)
    })
}

export {socketControllers}