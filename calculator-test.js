
describe("calculateMonthlyPayment()", function() {
  it('should calculate the monthly rate correctly', function () {
  const values = { amount: 12500, years: 7, rate: 7};
  const expectedResult = "188.66";
  const monthly = calculateMonthlyPayment(values);
  expect(monthly).toEqual(expectedResult);
});
});


describe("calculateMonthlyPayment()", function() {
  it("should return a result with 2 decimal places", function() {
  const values = {amount: Math.random()*10000, years: Math.random()*100, rate: Math.random()*100};
  const monthlyPayment = calculateMonthlyPayment(values);
  expect(monthlyPayment).toMatch(/^\d+.\d{2}$/);
  });
  });

/// etc
