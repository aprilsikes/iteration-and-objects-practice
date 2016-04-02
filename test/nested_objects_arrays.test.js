var fs = require('fs');
var obj = fs.readFileSync('./bin/data.json');
var data = JSON.parse(obj);
var assert = require('assert');
var getData = require('../nested_objects_arrays');

describe('NestedObjects', function () {
  describe('#curriculum', function () {
    it('returns curriculums and their lesson names', function () {
      var expectedOutput = {
        "Orientation" : [
          "Name Games",
          "Mind Maps",
          "Sequence Diagrams"
        ],
        "Rails Basics" : [
          "Controllers",
          "Models",
          "Views",
          "Migrations"
        ],
        "CRUD" : [
          "Create",
          "Read",
          "Update",
          "Delete"
        ]
      };
      var actual = getData.curriculum(data)
      assert.deepEqual(actual, expectedOutput);
    });

  })
  describe('#lessonOccurrences', function () {
    it('returns lessons and the dates they occurred', function () {
      var expectedOutput = {
        "Orientation" : {
          "Name Games" : [
            "2013-05-08",
            "2013-06-08",
            "2013-07-08",
            "2013-08-08"
          ],
          "Mind Maps" : [
            "2013-09-08",
            "2013-10-08",
            "2013-11-08",
            "2013-12-08"
          ],
          "Sequence Diagrams" : [
            "2014-01-08",
            "2014-02-08",
            "2014-03-08",
            "2014-04-08"
          ]
        },
        "Rails Basics" : {
          "Controllers" :[
            "2013-05-08",
            "2013-06-08",
            "2013-07-08",
            "2013-08-08",
          ],
          "Models" : [
            "2013-09-08",
            "2013-10-08",
            "2013-11-08",
            "2013-12-08"
          ],
          "Views" : [
            "2014-01-08",
            "2014-02-08",
            "2014-03-08",
            "2014-04-08"
          ],
          "Migrations" : [
            "2014-05-08",
            "2014-06-08",
            "2014-07-08",
            "2014-08-08"
          ]
        },
        "CRUD" : {
          "Create" :  [
            "2013-05-08",
            "2013-06-08",
            "2013-07-08",
            "2013-08-08"
          ],
          "Read" :  [
            "2013-09-08",
            "2013-10-08",
            "2013-11-08",
            "2013-12-08"
          ],
          "Update" : [
            "2014-01-08",
            "2014-02-08",
            "2014-03-08",
            "2014-04-08"
          ],
          "Delete" : [
            "2014-05-08",
            "2014-06-08",
            "2014-07-08",
            "2014-08-08"
          ]
        }
      };
      var actual = getData.lessonOccurrences(data)
      assert.deepEqual(actual, expectedOutput);
    });

  })
});
