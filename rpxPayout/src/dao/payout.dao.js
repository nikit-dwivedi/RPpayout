const payoutModelHistory = require('../models/payout.model');
var payoutDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePayment: updatePayment
}
function findAll() {
    return payoutModelHistory.findAll();
}
function findById(id) {
    return payoutModelHistory.findByPk(id);
}
function deleteById(id) {
    return payoutModelHistory.destroy({ where: { id: id } });
}
function create(data) {
    // connectdb();
    payoutModelHistory.sync({ force: true })
        .then((result) => {
            console.log(result, "===============");
            console.log(`Database & tables created!`);
            var paymentModel = new payoutModelHistory({
                id: data.id,
                entity: data.entity,
                fund_account_id: data.fund_account_id,
                amount:data.amount,
                currency:data.currency,
                fees: data.fees,
                tax: data.tax,
                status:data.status,
                utr:data.utr,
                mode:data.mode,
                purpose:data.purpose,
                reference_id:data.reference_id,
                narration:data.narration,
                batch_id: data.batch_id || "null",
                status_details:data.status_details,
                created_at: data.created_at,
            });
            return paymentModel.save();
        });
}
function updatePayment(data, id) {
    var updatePayment = {
        title: data.title,
        technologies: data.technologies,
        description: data.description,
        budget: data.budget,
        contact_email: data.contact_email
    };
    return updatePayment.update(updatePayment, { where: { id: id } });
}
module.exports = payoutDao;