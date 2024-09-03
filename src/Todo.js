import { v4 as uuidv4 } from 'uuid';

export class Todo {
    constructor(title) {
        this.title = title
        this.isChecked = false
        this.id = uuidv4()
    }
}