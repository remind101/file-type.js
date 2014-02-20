/*! file-type.js - v0.0.1 - 2014-02-20 */(function(global) {
  var TYPES = {
    doc: [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ],
    xls: [
      'application/excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ],
    ppt: [
      'application/powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ],
    pdf: [
      'application/pdf'
    ],
    zip: [
      'application/zip'
    ],
    txt: [
      'text/plain'
    ]
  }

  /**
   * Determines the file type for the given mime type.
   *
   * @example
   *
   *  FileTypes.type('application/msword')
   *  # => 'doc'
   *
   * @param {String} contentType - The mime type of the file
   *
   * @return {String} The type of file.
   */
  function fileType(contentType) {
    var found;

    for (var type in TYPES) {
      var contentTypes = TYPES[type];

      for (var i = 0; i < contentTypes.length; i++) {
        if (contentType === contentTypes[i]) {
          found = type;
        }
        
        if (found) {
          break;
        }
      }

      if (found) {
        break;
      }
    }

    return found;
  };

  global.fileType = fileType
})(this);
