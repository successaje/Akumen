const StreamingManager = artifacts.require("StreamingManager");

contract("StreamingManager", accounts => {
  it("should create a new stream", async () => {
    const instance = await StreamingManager.deployed();
    await instance.createStream("Game Stream", "Playing chess", { from: accounts[0] });
    const stream = await instance.getStreamDetails(1);
    assert.equal(stream.title, "Game Stream");
  });

  it("should allow the content creator to add viewers", async () => {
    const instance = await StreamingManager.deployed();
    await instance.addViewer(1, accounts[1], { from: accounts[0] });
    const stream = await instance.getStreamDetails(1);
    assert.equal(stream.viewers[0], accounts[1]);
  });

  it("should allow the content creator to add subscribers", async () => {
    const instance = await StreamingManager.deployed();
    await instance.addSubscriber(1, accounts[2], { from: accounts[0] });
    const stream = await instance.getStreamDetails(1);
    assert.equal(stream.subscribers[0], accounts[2]);
  });

  it("should allow the content creator to end the stream", async () => {
    const instance = await StreamingManager.deployed();
    await instance.endStream(1, { from: accounts[0] });
    const stream = await instance.getStreamDetails(1);
    assert.equal(stream.isActive, false);
  });
});
