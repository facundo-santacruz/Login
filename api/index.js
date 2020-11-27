const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { User } = require('./src/db');




// Syncing all the models at once.
const force = true;
conn.sync({ force }).then(() => {
  server.listen(3001, () => {            //MODIFIQUE EL PUERTO EN EL QUE SE ESCUCHA EL SERVIDOR PARA PODER TENER FRONT Y BACK ABIERTOS

    console.log('%s listening at 3001'); // eslint-disable-line no-console


 
  


   
  });
});
