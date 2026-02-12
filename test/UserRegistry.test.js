const { expect } = require("chai");

describe("UserRegistry", function () {
  let registry, owner, a1, a2;

    beforeEach(async () => {
    [owner, a1, a2] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory("UserRegistry");
    registry = await Factory.deploy();
  });
  
    it("registers user correctly", async () => {
            await registry.connect(a1).register("Alice", 25);
            const user = await registry.users(a1.address);

    expect(user.name).to.equal("Alice");
    expect(user.age).to.equal(25);
    expect(user.exists).to.equal(true);
    expect(await registry.getUserCount()).to.equal(1);
    expect(await registry.getUserByIndex(0)).to.equal(a1.address);


                
    })

    it("reverts on duplicate registration", async () => {
            await registry.connect(a1).register("Alice", 25);
            await expect(
               registry.connect(a1).register("Alice2", 30)).to.be.revertedWith("User already registered");
                    
    });


})