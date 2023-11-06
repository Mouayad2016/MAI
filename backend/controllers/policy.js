const db = require("../models");

module.exports = privacyPolicyController = {

    // Create a Privacy Policy
    async createPrivacyPolicy(req, res) {
        try {
            const policy = {
                text: req.body.text,
            };
            const newPolicy = await db.privacy_policies.create(policy);
            return res.status(200).json(newPolicy);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },

    // Get all Privacy Policies
    async getAllPrivacyPolicies(req, res) {
        try {
            const policies = await db.privacy_policies.findAll();
            return res.status(200).json(policies);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },
    // Get the latest Privacy Policy
    async getLatestPrivacyPolicy(req, res) {
        try {
            const latestPolicy = await db.privacy_policies.findAll({
                limit: 1,
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            if (!latestPolicy) return res.status(404).json({ error: 'No policy found' });
            return res.status(200).json(latestPolicy);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },

    // Get a Privacy Policy by id
    async getPrivacyPolicyById(req, res) {
        try {
            const policy = await db.privacy_policies.findByPk(req.params.id);
            if (!policy) return res.status(404).json({ error: 'Policy not found' });
            return res.status(200).json(policy);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },

    // Update a Privacy Policy
    async updatePrivacyPolicy(req, res) {
        try {
            const policy = await db.privacy_policies.findByPk(req.params.id);
            if (!policy) return res.status(404).json({ error: 'Policy not found' });
            const updatedPolicy = await policy.update({
                text: req.body.text,
            });
            return res.status(200).json(updatedPolicy);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },

    // Delete a Privacy Policy
    async deletePrivacyPolicy(req, res) {
        try {
            const policy = await db.privacy_policies.findByPk(req.params.id);
            if (!policy) return res.status(404).json({ error: 'Policy not found' });
            await policy.destroy();
            return res.status(200).json({ message: 'Policy deleted' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },
};