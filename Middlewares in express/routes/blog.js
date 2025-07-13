const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Blog Middleware Activated');
    next();
})
router.get('/', (req, res) => {
    console.log('Blog Home Page Accessed');
    res.send('Blog Home Page');
}
);

router.get('/about', (req, res) => {
    console.log('About Page Accessed');
    res.send('About the Blog');
});

module.exports = router;