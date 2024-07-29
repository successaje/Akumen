const UserManager = artifacts.require("UserManager");

contract("UserManager", accounts => {
  it("should register a new user", async () => {
    const instance = await UserManager.deployed();
    await instance.registerUser("finisher", "Hello, I'm Finisher", "finisher.jpg", { from: accounts[0] });
    const user = await instance.users(accounts[0]);
    assert.equal(user.username, "finisher");
  });

  // rest.....

});
