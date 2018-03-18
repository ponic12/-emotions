const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

var request = require('request');


const fs = admin.firestore();

exports.emotionEvent = functions.firestore.document('/emotions/{eid}').onWrite(event => {
    const eid = event.params.eid;
    var info = event.data;
    var oldVal = event.data.previous.data();

    var newVal = {};
    try {
        newVal = info.data();
        console.log('newVal: ', newVal);
    }
    catch (e) {
        console.log('reg delete: ', oldVal);
    }
    if (newVal) {
        if (oldVal) { // UPDATE
            console.log('item update: ', newVal);
        }
        else {  // INSERT  
            var d = new Date(newVal.datetime);
            var yyyy = d.getFullYear();
            var sm = (d.getMonth() + 1); 
            var mm = ("0" + sm).slice(-2);
            var sd = d.getDate();
            var dd = ("0" + sd).slice(-2);
            var dstr = yyyy + mm + dd;
            var key = newVal.user + '_' + dstr;
            aggregateTotals(key, newVal.emotion);
        }
    }
    return true;
});

function aggregateTotals(key, emo) {
    var ref = fs.collection('totalsByDate').doc(key);
    ref.get()
        .then(doc => {
            var item = doc.data();
            //console.log('totalsByDate reg: ', item);

            if (item) {
                if (item[emo])
                    item[emo] = item[emo] + 1;
                else
                    item[emo] = 1;
                //console.log('update item: ', item);
                ref.set(item).then(c => console.log('FIN: update totalsByDate: ', key));
            }
            else {// NUEVO registro
                var x = {};
                x[emo] = 1;
                //console.log('insert item: ', x);
                ref.set(x).then(c => console.log('FIN: new totalsByDate: ', key));
            }
        })
        .catch(err => {
            console.log('Error: updating key totals:', err);
        });
    return ref;
}
















// exports.saveEmotion = functions.https.onRequest((request, response) => {
//     var emotion = request.query.emotion;
//     var user = request.query.user;
//     var payload = {};
//     if (emotion) {
//         // if (emotion == 'love'){
//         //     var lover = request.query.lover;
//         //     payload.lover = lover;
//         // }
//         var datetime = new Date().getTime();
//         payload.datetime = datetime;
//         payload.user = user;
//         payload.emotion = emotion;
//         saveEvent(payload, response);
//     }
// });
// exports.emotionByDay = functions.https.onRequest((request, response) => {
//     var yyyy = parseInt(request.query.yyyy, 10);
//     var mm = parseInt(request.query.mm, 10);
//     var dd = parseInt(request.query.dd, 10);

//     var d = new Date().setHours(0, 0, 0, 0); //time ms format 00:00hs
//     if (!isNaN(dd) && !isNaN(mm) && !isNaN(yyyy))
//         d = new Date(yyyy, mm - 1, dd).setHours(0, 0, 0, 0);

//     const t = addDays(d, 1);
//     const dstr = new Date(d);
//     console.log('date: ', dstr);

//     var totAwareness = 0;
//     var totGratitude = 0;
//     var totComplain = 0;
//     var totGoodThings = 0;
//     var totLove = 0;
//     var totHealth = 0;

//     const fs = admin.firestore();
//     fs.collection('emotions')
//         .where('datetime', '>', d)
//         .where('datetime', '<', t)
//         .get()
//         .then(items => {
//             const counter = items.size;
//             console.log('items.size: ', counter);
//             items.forEach((item) => {
//                 var info = item.data();
//                 if (info) {
//                     if (info.emotion == 'awareness') totAwareness++;
//                     if (info.emotion == 'gratitude') totGratitude++;
//                     if (info.emotion == 'complain') totComplain++;
//                     if (info.emotion == 'goodthings') totGoodThings++;
//                     if (info.emotion == 'love') totLove++;
//                     if (info.emotion == 'health') totHealth++;
//                 }
//             });
//             fs.collection('emotionsByDay')
//                 .where('date', '==', d)
//                 .get()
//                 .then(abds => {
//                     if (abds.size == 0) {
//                         var o = {
//                             date: d,
//                             dateStr: dstr,
//                             total: counter,
//                             totalAwareness: totAwareness,
//                             totalGratitude: totGratitude,
//                             totalComplain: totComplain,
//                             totalGoodThings: totGoodThings,
//                             totalLove: totLove,
//                             totalHealth: totHealth
//                         };
//                         fs.collection('emotionsByDay').add(o)
//                             .then(function (x) {
//                                 console.log("New record: ", x.id);
//                                 var str =
//                                     "<div>Fecha: " + dstr + "</div>" +
//                                     "<div>----------------------------------------------</div>" +
//                                     "<div>Awareness : " + o.totalAwareness + "</div>" +
//                                     "<div>Gratitude : " + o.totalGratitude + "</div>" +
//                                     "<div>GoodThings: " + o.totalGoodThings + "</div>" +
//                                     "<div>Health    : " + o.totalHealth + "</div>" +
//                                     "<div>Love      : " + o.totalLove + "</div>" +
//                                     "<div>Complain  : " + o.totalComplain + "</div>" +
//                                     "<div>----------------------------------------------</div>";
//                                 response.send(fillHtml(str));
//                             })
//                             .catch(function (error) {
//                                 console.error("Error adding: ", error);
//                                 response.send(fillHtml("Error adding: " + error));
//                             });
//                     }
//                     else { // update emotionsByDay
//                         abds.forEach((item) => {
//                             var o = item.data();
//                             if (o) {
//                                 o.total = counter;
//                                 o.totalAwareness = totAwareness;
//                                 o.totalGratitude = totGratitude;
//                                 o.totalComplain = totComplain;
//                                 o.totalGoodThings = totGoodThings;
//                                 o.totalLove = totLove;
//                                 o.totalHealth = totHealth;

//                                 fs.collection('emotionsByDay').doc(item.id)
//                                     .set(o)
//                                     .then(x => {
//                                         console.log("Update record: ", x.id);
//                                         var str =
//                                             "<div>Fecha: " + dstr + "</div>" +
//                                             "<div>----------------------------------------------</div>" +
//                                             "<div>Awareness : " + o.totalAwareness + "</div>" +
//                                             "<div>Gratitude : " + o.totalGratitude + "</div>" +
//                                             "<div>GoodThings: " + o.totalGoodThings + "</div>" +
//                                             "<div>Health    : " + o.totalHealth + "</div>" +
//                                             "<div>Love      : " + o.totalLove + "</div>" +
//                                             "<div>Complain  : " + o.totalComplain + "</div>" +
//                                             "<div>----------------------------------------------</div>";
//                                         response.send(fillHtml(str));
//                                     })
//                                     .catch(error => {
//                                         console.log('Update error: ', error);
//                                         response.send(fillHtml('Error updating: ' + error));
//                                     });
//                             }
//                         });
//                     }
//                 });
//         })
//         .catch(function (error) {
//             console.error("Error saving day: ", error);
//             response.send(fillHtml("Error saving day: " + error));
//         });
// });

function saveEvent(payload, response) {
    const fs = admin.firestore();
    fs.collection('emotions').add(payload)
        .then(function (docRef) {
            console.log(payload.emotion + " Id: ", docRef);
            var str =
                "<div>Fecha: " + new Date(payload.datetime) + "</div>" +
                "<div>----------------------------------------------</div>" +
                "<div>Saved OK: " + payload.emotion + "</div>";
            response.send(fillHtml(str, payload.emotion));
        })
        .catch(function (error) {
            console.error("Err: ", error);
            response.send(fillHtml('Error saving ' + payload.emotion, payload.emotion));
        });
}
function addDays(d, days) {
    var x = new Date(d);
    x.setDate(x.getDate() + days);
    return x.getTime();
}
function fillHtml(str, emotion) {
    var color = 'Gray';
    if (emotion == 'gratitude') color = 'Gold';
    if (emotion == 'awareness') color = 'Magenta';
    if (emotion == 'complain') color = 'Black';
    if (emotion == 'love') color = 'Red';
    if (emotion == 'goodthings') color = 'LimeGreen';
    if (emotion == 'health') color = 'DodgerBlue';

    var html =
        "<html style='background:" + color + ";color:white;text-shadow:1px 1px 1px #555'>" +
        "  <head>" +
        "    <style>" +
        "      html, body, .container {" +
        "          height: 100%;" +
        "      }" +
        "      .container {" +
        "          font-family:'Comic Sans MS', cursive, sans-serif;" +
        "          font-weight:bold;" +
        "          font-size:48px;" +
        "          display: flex;" +
        "          align-items: center;" +
        "          justify-content: center;" +
        "      }" +
        "    </style>" +
        "  </head>" +
        "  <body>" +
        "    <div class='container'> " +
        "      <div>" + str + "</div>" +
        "    </div>" +
        "  </body>" +
        "</html>";
    return html;
}

