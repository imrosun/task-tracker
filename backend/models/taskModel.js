import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    // Additional
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'], default: 'Low'
    } ,
    dueDate: {
        type: Date
    }
});

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);
export default Task;