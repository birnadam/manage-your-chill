const router = require('express').Router();
const chillController = require("../../controllers/chillerController");

const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

// /api/c

router.route('/')//uses Passport JWT as its auth method.
    .post(authMiddleware.requireAuth, chillController.addChiller);

router.route('/getchillers')//uses Passport JWT as its auth method.
    .post(authMiddleware.requireAuth, chillController.getChillersForUser);



module.exports = router;
