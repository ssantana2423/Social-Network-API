import mongoose from "mongoose";
import reactionSchema from "./reaction.js";


const thoughtSchema = new mongoose.Schema({
  thought: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],

});
thoughtSchema.virtual('reactioncount').get(function() {
    return this.reactions.length;
  });
const Thought = mongoose.model('Thought', thoughtSchema); 
export default Thought;
