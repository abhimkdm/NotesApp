import { ReversePipe } from "./reverse.pipe";

describe("Custom Reverse Pipe:", () => {
  let reversePipe;

  beforeEach(() => {
    reversePipe = new ReversePipe();
  });

  afterEach(() => {
    reversePipe = null;
  });

  it("Should reverse a given string", () => {
    expect(reversePipe.transform("hello")).toEqual("olleh");
  });
});
