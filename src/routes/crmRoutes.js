import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../crmControllers/crmController';
const routes = (app) =>{
    app.route('/contact')
        .get((req, res, next) =>{
                console.log("Request url:"+req.originalUrl)
                console.log("Request type:"+req.method)
                next();
            }, getContacts)

        .post(addNewContact);
    
    app.route('/contact/:contactID')
        .get(getContactWithID)

        .delete(deleteContact)
        .put(updateContact);

        app.route('/index')
        .get((req, res) =>{
                console.log("Request url:"+req.originalUrl)
                console.log("Request type:"+req.method)
                res.render('./index.html')
            });    
};

export default routes;