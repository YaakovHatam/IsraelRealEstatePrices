var page = 2;

var bodyData = {
    "MoreAssestsType": 0, "FillterRoomNum": 0,
    "GridDisplayType": 0, "ResultLable": "ירושלים", "ResultType": 1,
    "ObjectID": "3000", "ObjectIDType": "text", "ObjectKey": "UNIQ_ID",
    "DescLayerID": "SETL_MID_POINT",
    "Alert": null, "X": 220187.31682654,
    "Y": 632016.6760939, "Gush": "",
    "Parcel": "", "showLotParcel": false, "showLotAddress": false,
    "OriginalSearchString": "ירושלים",
    "MutipuleResults": false, "ResultsOptions": null, "CurrentLavel": 2,
    "Navs": [],
    "QueryMapParams": {
        "QueryToRun": null, "QueryObjectID": "3000", "QueryObjectType": "number",
        "QueryObjectKey": "SETL_CODE", "QueryDescLayerID": "KSHTANN_SETL_AREA", "SpacialWhereClause": null
    }, "isHistorical": false,
    "PageNo": page,
    "OrderByFilled": "DEALDATETIME",
    "OrderByDescending": true,
    "Distance": 0
}
fetch("https://www.nadlan.gov.il/Nadlan.REST/Main/GetAssestAndDeals", {
    "headers": {
        "content-type": "application/json;charset=UTF-8"
    },
    "body": JSON.stringify(bodyData),
    "method": "POST",
    "credentials": "include"
}).then(res => res.json()).then(res => download('page' + page, convertToCSV(res.AllResults)));

function convertToCSV(arr) {
    const array = [Object.keys(arr[0])].concat(arr)

    return array.map(it => {
        return Object.values(it).toString()
    }).join('\n')
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
