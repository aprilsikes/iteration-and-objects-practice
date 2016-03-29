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
});
