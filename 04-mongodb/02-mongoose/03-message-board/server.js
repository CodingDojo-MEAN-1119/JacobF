// EXPRESS SETUP //
const express = require('express');
const app = express();
const server = app.listen(8000);
// EXPRESS MIDDLEWARE + SERVE STATIC FILES //
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
const flash = require('express-flash');
app.use(flash());
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
// MONGOOSE SETUP //
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board_db', {useNewUrlParser: true});
// MONGOOSE MODELS //
const CommentSchema = new mongoose.Schema({
    posted_by: {
        type: String,
        required: [true, "You must enter a name"],
        minlength: [1, "Your name cannot be blank"],
        maxlength: [25, "Names cannot exceed 25 characters"],
        trim: true
    },
    comment: {
        type: String,
        required: [true, "Comments cannot be blank"],
        minlength: [1, "You cannot post blank comments"],
        maxlength: [255, "Max length of comments are 255 characters"],
        trim: true
    }
}, {timestamps: true});
const MessageSchema = new mongoose.Schema({
    posted_by: {
        type: String,
        required: [true, "You must enter a name"],
        minlength: [1, "Your name cannot be blank"],
        maxlength: [25, "Names cannot exceed 25 characters"],
        trim: true
    },
    message: {
        type: String,
        required: [true, "Messages cannot be blank"],
        minlength: [1, "You cannot post blank messages"],
        maxlength: [255, "Max length of messages are 255 characters"],
        trim: true
    },
    comments: [CommentSchema]
}, {timestamps: true});
const Message = mongoose.model('Message', MessageSchema);
//END OF SETUP//

// SERVER SIDE SCRIPT //
app.get('/', (request, response) => {
    Message.find().sort({createdAt: 'desc'})
        .then(all_messages => {
            response.render('index', { all_messages })
        })
        .catch(err=>{
            console.log(err)
        });
});
app.post('/', (request, response) => {
    Message.create(request.body)
        .then(()=>response.redirect('/'))
        .catch(err=>{
            console.log(err)
            for (var key in err.errors) {
                request.flash('post_message', err.errors[key].message);
            }
            response.redirect('/')
        });
});
app.post('/:message_id/comment', (request, response) => {
    const { message_id } = request.params
    Message.findOne({_id:message_id})
        .then(this_message=>{
            this_message.comments.push(request.body)
            return this_message.save()
            .then(()=>response.redirect('/'))
        })
        .catch(err=>{
            console.log(err)
            for (var key in err.errors) {
                request.flash('post_comment', err.errors[key].message);
            }
            response.redirect('/')
        });
}); 