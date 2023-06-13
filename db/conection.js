const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://ankurbhimani07:data17@cluster16.uehffps.mongodb.net/database", {
    useNewUrlParser: true,
}).then(() => {
    console.log('Db............................done ');
}).catch((error) => {
    console.log(error);
})
