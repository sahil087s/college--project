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
        chest: "https://en.wikipedia.org/wiki/List_of_weight_training_exercises#:~:text=Pectorals%20(chest),-Smith%20machine%20bench&text=The%20bench%20press%20or%20dumbbell,lower%20back%20muscles%2C%20and%20traps."
    }
    const data = {
        message: `${allParts[targetPart]}`
    }
    res.send(data);
})

export default upperBodyRoute;