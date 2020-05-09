describe("Maths Test:", () => {
  let num;
  let name;

  //Create/Assign the values
  beforeEach(() => {
    num = 10;
    name = "car";
  });

  //Dispose objects
  afterEach(() => {
    num = 0;
    name = "";
  });

  //TestCase 01
  it("Compare Two Numbers", () => {
    //expect(num).not.toEqual(10);
    expect(num).toEqual(10);
  });

  //TestCase 02
  it("Compare Two Strings", () => {
    expect(name).toEqual("car");
  });
});
