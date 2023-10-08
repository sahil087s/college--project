import express from 'express';
const upperBodyRoute = express.Router();
// streches:partName
// body-weight:partName
// barbell:partName
// cabels:partName
// featured:partName
upperBodyRoute.get('/:partName', (req, res) => {
    const targetPart = req.params.partName;
    const allParts = {
        biceps: 'https://en.wikipedia.org/wiki/Bicep_curl#:~:text=A%20bicep%20curl%20usually%20starts,weight%20to%20the%20starting%20position.',
        chest: "#chest"
    }
    const data = {
        message: `${allParts[targetPart]}`
    }
    res.send(data);
})

export default upperBodyRoute;