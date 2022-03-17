const fundModelHistory = require('../models/fund.model');
var fundDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateFund: updateFund
}
function findAll() {
    return fundModelHistory.findAll();
}
function findById(id) {
    return fundModelHistory.findByPk(id);
}
function deleteById(id) {
    return fundModelHistory.destroy({ where: { id: id } });
}
function create(data) {
    // connectdb();
    fundModelHistory.sync({ force: true })
        .then((result) => {
            console.log(result, "===============");
            console.log(`Database & tables created!`);
            var fundModel = new fundModelHistory({
                id: data.id,
                entity: data.entity,
                contact_id: data.contact_id,
                account_type: data.account_type,
                ifsc: data.bank_account.ifsc,
                bank_name: data.bank_account.bank_name,
                name: data.bank_account.name,
                account_name: data.bank_account.account_name,
                active: data.active,
                batch_id: data.batch_id || "null",
                created_at: data.created_at,
            });
            return fundModel.save();
        });
}
function updateFund(data, id) {
    var updateFund = {
        title: data.title,
        technologies: data.technologies,
        description: data.description,
        budget: data.budget,
        contact_email: data.contact_email
    };
    return updateFund.update(updateFund, { where: { id: id } });
}
module.exports = fundDao;