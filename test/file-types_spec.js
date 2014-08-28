var expect = chai.expect;

describe('fileType', function() {
  it('returns the type of the file', function() {
    expect(fileType('application/msword')).to.eq('doc');
    expect(fileType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')).to.eq('xls');
    expect(fileType('application/zip')).to.eq('zip');
    expect(fileType('audio/MP4A-LATM')).to.eq('audio');
    expect(fileType('audio/mp4')).to.eq('audio');
  });
});
