
const AthenaExpress = require("athena-express");
const AWS = require("aws-sdk");


export default async function handler(req, res) {
    console.log('Starting lambda exec')
    const athenaExpressConfig = {
        aws: AWS,
        s3: "s3://front-end-pocs/"
    };

    const athenaExpress = new AthenaExpress(athenaExpressConfig); 
    

    const query = `SELECT acc_int, any_index_flag, perc_prem, accrued_int_perc, amount_outstanding_global_agg, aggregation_level, amount_outstanding FROM "test_resource_link_to_index_data_rs"."bloomberg_daily" LIMIT 5`


    try {
        console.log('Inside Try Block')
        let data = await athenaExpress.query(query);
        const response = {
            statusCode: 200,
            // body: JSON.stringify(data),
            body: JSON.stringify(data, (key, value) =>
                typeof value === 'bigint' ? value.toString() : value 
            ),
            headers: {
                "Content-Type" : "application/json",
                "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
                "Access-Control-Allow-Methods" : "OPTIONS,POST,GET",
                "Access-Control-Allow-Credentials" : true,
                "Access-Control-Allow-Origin" : "*",
                "X-Requested-With" : "*"
            },
        };
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({ response })
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).end(error.message);
    }




    // try {
    //     console.log('Inside Try Block')
    //     let data = await athenaExpress.query(query);
    //     console.log(data);
    //     const response = {
    //         statusCode: 200,
    //         // body: JSON.stringify(data),
    //         body: JSON.stringify(data, (key, value) =>
    //             typeof value === 'bigint' ? value.toString() : value 
    //         ),
    //         headers: {
    //             "Content-Type" : "application/json",
    //             "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    //             "Access-Control-Allow-Methods" : "OPTIONS,POST,GET",
    //             "Access-Control-Allow-Credentials" : true,
    //             "Access-Control-Allow-Origin" : "*",
    //             "X-Requested-With" : "*"
    //         },
    //     };
    //     console.log('returning response')
        
    //     return response;
    // } catch(err) {
    //     console.log(err);
    // }
    
    console.log('end');

    
}


