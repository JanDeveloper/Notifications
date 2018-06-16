import reqwest from "reqwest";

const METHOD_KEY = "method";
const TYPE_KEY = "dataType";

const JSON_VALUE = "json";
const GET = "GET";

class Rest {

    doGet( url ) {
        const requestOptions = {
            url,
            [ TYPE_KEY ]: JSON_VALUE,
            [ METHOD_KEY ]: GET
        };
        return reqwest(requestOptions);
    }
}

export default new Rest();
