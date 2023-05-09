import countTime from '../countTime';

describe('countTime', () => {
  it('should get 1', () => {
    expect(countTime('23:30')).toEqual(1);
  });

  it('should get 2', () => {
    expect(countTime('?5:00')).toEqual(2);
  });

  it('should get 100', () => {
    expect(countTime('0?:00')).toEqual(10);
  });

  it('should get 100', () => {
    expect(countTime('0?:0?')).toEqual(100);
  });

  it('should get 1440', () => {
    expect(countTime('??:??')).toEqual(1440);
  });
});
