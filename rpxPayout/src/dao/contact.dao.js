const contactModelHistory = require('../models/contact.model.js');
var contactDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePayout: updatePayout
}
function findAll() {
    return contactModelHistory.findAll();
}
function findById(id) {
    return contactModelHistory.findByPk(id);
}
function deleteById(id) {
    return contactModelHistory.destroy({ where: { id: id } });
}
function create(data) {
    // connectdb();
    contactModelHistory.sync({ force: true })
        .then((result) => {
            console.log(result, "===============");
            console.log(`Database & tables created!`);
            var contactModel = new contactModelHistory({
                id: data.id,
                entity: data.entity,
                name: data.name,
                contact: data.contact || "null",
                email: data.email,
                // type: data.type,
                // reference_id: data.reference_id,
                // batch_id: data.batch_id || "null",
                active: data.active,
                created_at: data.created_at,
            });
            //  return contactModel.create();;
            return contactModel.save();
        });
}
function updatePayout(data, id) {
    var updatePayout = {
        title: data.title,
        technologies: data.technologies,
        description: data.description,
        budget: data.budget,
        contact_email: data.contact_email
    };
    return updatePayout.update(updatePayout, { where: { id: id } });
}
module.exports = contactDao;