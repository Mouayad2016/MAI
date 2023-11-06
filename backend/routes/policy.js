const express = require("express");
const router = express.Router();
const privacyPolicyController = require("../controllers/policy");
router.get("/policies/latest", privacyPolicyController.getLatestPrivacyPolicy);

// Create a Privacy Policy
router.post("/policies", privacyPolicyController.createPrivacyPolicy);

// Get all Privacy Policies
router.get("", privacyPolicyController.getAllPrivacyPolicies);

// Get a Privacy Policy by id
router.get("/policies/:id", privacyPolicyController.getPrivacyPolicyById);

// Update a Privacy Policy
router.put("/policies/:id", privacyPolicyController.updatePrivacyPolicy);

// Delete a Privacy Policy
router.delete("/policies/:id", privacyPolicyController.deletePrivacyPolicy);

module.exports = router;