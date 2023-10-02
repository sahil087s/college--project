import express from 'express';
const headRoute = express.Router();

headRoute.get('/:partName', (req, res) => {
    const data = {
        message: `this is ${req.params.partName} from head`
    }
    res.send(data);
})

export default headRoute;