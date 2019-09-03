const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')



router.get('/', (req, res) => {
    let queryText = 'SELECT feeling, understanding, support, comment FROM "feedback" ';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting feedback', error);
      res.sendStatus(500);
    });
  });

router.post('/', (req,res) => {
    let feedback = req.body

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES($1, $2, $3, $4);`;
        pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new feedback`, error);
            res.sendStatus(500);
        });
});

module.exports = router;