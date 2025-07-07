let Adm = require('../models/adm');

const AdmController = {
    index: async (req, res, next) => {
        Adm.find().then(dado => res.send(dado));
        
        /*try {
            const adm = new Adm ({nome: 'Jhon Santos', senha: '123456', email: "jhon@exemple.com"});
            await adm.save();
            res.send(adm);
        } catch(error) {
            res.status(500).send(error);
        }*/
    }
}
 
module.exports = AdmController;