
const mongoose = require("mongoose");


const app = require("./app");
const usuarioController = require("./src/controllers/users.controller");
const lineaController = require("./src/controllers/lineaTiempo.controller")
const noticasController = require("./src/controllers/noticias.controller")
const mainPage = require("./src/controllers/mainPage.controller")
const historiaController = require('./src/controllers/historia.controller')
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb+srv://desjr:desjr@cluster0.qmiwvug.mongodb.net/?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Se ha conectado correctamente a la base de datos.");
     mainPage.DefultFINAL()
    

      const PORT = process.env.PORT || 3002
    app.listen(PORT, function () {
      console.log(
        'El servidor está levantado en el puerto '+PORT 
      );

    });
  })
  .catch((error) => console.log(error));
