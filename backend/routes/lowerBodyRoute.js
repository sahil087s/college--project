import express from 'express';
const lowerBodyRoute = express.Router();

lowerBodyRoute.get('/:partName', (req, res) => {
    const data = {
        message: `this is ${req.params.partName} from lower body`
    }
    res.send(data);
})

export default lowerBodyRoute;