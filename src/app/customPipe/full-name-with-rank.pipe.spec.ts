import { FullNameWithRankPipe } from './full-name-with-rank.pipe';

describe('FullNameWithRankPipe', () => {
  it('create an instance', () => {
    const pipe = new FullNameWithRankPipe();
    expect(pipe).toBeTruthy();
  });
});
