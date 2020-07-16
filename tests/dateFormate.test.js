import dateFormate from '../src/dateFormate';
test('test dateFormate', () => {
    expect(dateFormate('2020-07-16', 'yyyy-MM-dd')).toBe('2020-07-16');
});
