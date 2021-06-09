import { response } from 'express';

import { createClient } from "@supabase/supabase-js";

import fetch from 'node-fetch';

module.exports = async (req, res, next) => {
    const { body } = req
    console.log("HHEEEEEEERERERE")
    var tagBody = {
        "ticket": {
            "priority": "urgent"
            //need to add in a way to define current user otherwise appears as undefined
        }
    }

    var myHeaders = new fetch.Headers();
    myHeaders.append("Authorization", `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKb2huRG9lIiwiaXNzIjoxNjIyNzgyNTQ3LCJleHAiOjE2MjI4Njg5NDcsImlhdCI6MTYyMjc4MjU0N30.PN9wz8irrwAIBkohISm_-DsjKVuGwVv7hdtlDcMNzozqMiE2ztoqxoMj9KNbUmc1asqIua1Lm2h22U441LPLE2KgqeaE_P3che7ecsLMLbw0Vr81rnB0rFHl3Dgft1TtdXobZIJZzcLXfDFZIdIhCmthi93TYSndla3eXuJy_ZktajIdxh2XRJ5e-9cZrmbfB-OaUng1VfankCwdxmCtmbL4Cg17sbsl0vY8T2bJN_4MLAyrunzlYBn16z68xOXEXNkd3rPOjEqrLPNXH0tw5yKpdmW2SqTDMaqStwfPLMzUD3wNOag2nTnpDJ1yIEEqPgBWTsUwH6aDMzfExGgdyjkEsedlpkJFDYacYXCM0G5tTePfn2WaZe1ZwsQShrJFjhl7gWlO6pgkZZpSiGHOVoAGqkrYV3-u77D5dZ3BO3i-hbNtnKx7hVI4u7hminLhaYxuxs9SLFBYIYLDJtnw8picqpHpqUy0rSAi_h04Doz3NK_n11HKpKqntWDEOUJoyTI0VuUzkLApvGf_ME5VUS2f-LWcikwcG8ISipBwEb4Z3Br0kGrxfSF-PR8MzYc4EnilonURfKYZ4bmDqlx0EnxCf1QGqRojFEDXnruZMdaVorLybqv3SuZGzqgmKPy9gXyM94J_R6KHYLcsciwHcF1hKY0FuwjY7-6Fk9bPWSg`);
    myHeaders.append("Content-Type", "application/json")


    console.log("Sending priority....")
    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(tagBody),
    };
    // Don't use this in production!

    fetch(`https://api.useparagon.com/projects/8e2ac7c3-6825-4ab2-8c86-6e148dd00ecf/sdk/proxy/zendesk/v2/tickets/10`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(JSON.parse(result)))
        .catch(error => console.log('error', error));


}