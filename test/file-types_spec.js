var expect = chai.expect;

describe('fileType', function() {
  it('returns the type of the file', function() {
    expect(fileType('application/msword')).to.eq('doc');
  });
});
