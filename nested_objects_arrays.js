function curriculum(data) {
  var curriculums = data.units;
  console.log(curriculums);
  var rObj = {};
  curriculums.forEach(function (obj) {
    rObj[obj.name] = obj.lessons.map(function (lessonNames) {
      return lessonNames.name;
    })
  })
  console.log(rObj);
  return rObj;

}
// data["units"][0]["lessons"][1]["name"] = mind maps
// var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
// var reformattedArray = kvArray.map(function(obj){
//    var rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;

function lessonOccurrences(data) {
  var curriculums = data.units;
  console.log(curriculums);
  var rObj = {};
  curriculums.forEach(function (obj) {
    rObj[obj.name] = {};
    obj.lessons.forEach(function (obj2) {
      console.log(obj2);
      console.log("*********");
      console.log(obj2.occurrences);
      rObj[obj.name][obj2.name] = Object.keys(obj2.occurrences);
      // return obj2.occurrences;
      console.log("^^^^^^^^^");
      console.log(rObj);
    })
  })
  return rObj;
}

module.exports = {
  curriculum: curriculum,
  lessonOccurrences: lessonOccurrences
}
