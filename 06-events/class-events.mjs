import { error } from 'console'
import EventEmitter from 'events'

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likeQty = 0
        this.on('likePost', (username) =>
            console.log(`${username} like your post :)`)
        )
        this.on('error', (error) => console.error(error))
    }
    like(username) {
        if (!username) {
            return this.emit('error', new Error('No username in like request.'))
        }
        this.likeQty += 1
        this.emit('likePost', username)
    }
}

const myPost = new Post('Misha', 'Some text here...')

// console.log(myPost.author)
// console.log(myPost.text)
// console.log(myPost.likeQty)
myPost.like('Masha')
setTimeout(() => myPost.like('Lena'), 1000)
setTimeout(() => myPost.like(), 2000)
setTimeout(() => myPost.like('Misha'), 3000)
// console.log(myPost.likeQty)
