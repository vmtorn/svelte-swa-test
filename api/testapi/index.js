async function doCalc(op, a, b) {
    switch (op) {
        case "add": 
            return a+b;
        case "mul": 
            return a*b
    }
    return undefined
}

module.exports = async function httpTrigger (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const op = req.body?.op
    const a = req.body?.a
    const b = req.body?.b

    let resp = {
        op: op,
        a: a,
        b: b,
        val: await doCalc(op, parseFloat(a), parseFloat(b))
    }
    context.log('Executed workload', resp)

    context.res = {
        body: resp
    }
    /*const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {       
        body: responseMessage
    };*/
};

