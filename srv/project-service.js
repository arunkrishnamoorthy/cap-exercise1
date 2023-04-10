const cds = require('@sap/cds');
const ProjectLog = cds.log('Projects');
const { Projects, Customer } = cds.entities;

module.exports = async (srv) => {

    srv.before('CREATE','Projects', async (req) => {
        ProjectLog.log('Creation of Entity Projects with', req.data);
        // Validate Customer. 
        // const customerData = await SELECT.one.from(Customer).where({ID: req.data.customer_ID});
        // const project = await SELECT.from(Projects);
        const customerDataQuery = cds.read(Customer, {ID: req.data.customer_ID});
        const customerData = await cds.run(customerDataQuery);
        ProjectLog.log('Customer Name', customerData.name);
    });

}