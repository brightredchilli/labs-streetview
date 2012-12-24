//google streetview model.


//at the very core we have some kind of matrix that shows us the map strucutre
//we can keep this in a very large array which we reference by x and y...
//


var models;

$.getJSON("data.json", function(json) {
  models = json;
});


function getPanoModelForId(pano_id) {
  return models[pano_id];
}
