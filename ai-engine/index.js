const express = require('express');
const app = express();
const port = 5000;

app.get('/recommendations/:userId', (req, res) => {
    const { userId } = req.params;
    // Mock recommendations
    res.json({
        userId,
        recommendations: [
            { productId: "P1001", score: 0.95 },
            { productId: "P1002", score: 0.89 },
            { productId: "P1003", score: 0.87 }
        ]
    });
});

app.listen(port, () => {
    console.log(`AI Engine listening on port ${port}`);
});
