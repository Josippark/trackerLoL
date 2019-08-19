const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:server/:profile', async (req,res) =>{
    try {
        const headers = {
            'X-Riot-Token':process.env.RIOT_API_KEY
        }

        const  {server, profile} = req.params;

        let url = '';

        switch(server){
            case 'eune':
                url= process.env.RIOT_EUNE_SERVER_URL;
                break;
            case 'euw':
                url= process.env.RIOT_EUW_SERVER_URL;
                break;
            default:
                url= process.env.RIOT_EUNE_SERVER_URL;
        }


        const response = await fetch(`${url}/lol/summoner/v4/summoners/by-name/${profile}`,{headers})
        const data = await response.json();


        if(data.status && data.status.status_code === 404){
            return res.status(404).json({
                message:"Username not found"
            })
        }
        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "server error"
        })
    }
})


module.exports = router;