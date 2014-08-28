(function(global) {
  var TYPES = {
    doc: [
      /^application\/msword$/,
      /^application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document$/
    ],
    xls: [
      /^application\/excel$/,
      /^application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet$/
    ],
    ppt: [
      /^application\/powerpoint$/,
      /^application\/vnd\.openxmlformats-officedocument\.presentationml\.presentation$/
    ],
    pdf: [
      /^application\/pdf$/
    ],
    zip: [
      /^application\/zip$/
    ],
    txt: [
      /^text\/plain$/
    ],
    audio: [
      /^audio\/.*$/
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
        if (contentTypes[i].test(contentType)) {
          return type;
        }
      }
    }
  };

  global.fileType = fileType
})(this);
