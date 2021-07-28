const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pinterest', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));