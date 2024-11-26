const admin_model_js = require("../model/admin_model_js");

module.exports = {

    async c_CreatGift(req,res){
        
        
        let{gift_name, gift_group, gift_number} = req.body;
        let gift_list = new Date();
        let gift_use_list = new Date();

        let[ resuit, err ] = await admin_model_js.m_CreateBook(gift_name, gift_group, gift_number, gift_list, gift_use_list);

        if(err){
            res.json({success: false,err:err} );
         }

        res.json({success : true });
    },
    async c_GetGiftList(req,res){
        let[ resuit, err ] = await admin_model.m_GetGiftList();
        res.json(result);
    }

}

