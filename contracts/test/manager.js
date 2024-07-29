const GameManager = artifacts.require("GameManager");

contract("GameManager", accounts => {
  it("should create a new game", async () => {
    const instance = await GameManager.deployed();
    await instance.createGame("chess", { from: accounts[0] });
    const game = await instance.getGameDetails(1);
    assert.equal(game.gameType, "chess");
  });

  it("should allow a second player to join the game", async () => {
    const instance = await GameManager.deployed();
    await instance.joinGame(1, { from: accounts[1] });
    const game = await instance.getGameDetails(1);
    assert.equal(game.player2, accounts[1]);
  });

  it("should allow players to make moves", async () => {
    const instance = await GameManager.deployed();
    await instance.makeMove(1, "e4", { from: accounts[0] });
    const game = await instance.getGameDetails(1);
    assert.equal(game.moves[0], "e4");
  });

  it("should allow players to end the game", async () => {
    const instance = await GameManager.deployed();
    await instance.endGame(1, accounts[0], { from: accounts[0] });
    const game = await instance.getGameDetails(1);
    assert.equal(game.winner, accounts[0]);
  });
});
