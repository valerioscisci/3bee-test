# Getting started

- This repository uses pnpm (follow the instructions here https://pnpm.io/installation)
- Run `pnpm` in your terminal to install all the dependencies
- Run `pnpm dev` in your terminal to start your dev server

# Task

Create a TicTacToe app like this:

![image](./example.png)

## Requirements

You **must** follow this implementation:

```jsx
export default function Home() {
  const handleChange = (
    boardState,
    currentPlayer
  ) => {
    // check if there are other moves available
    // fetch api to check if there is a winner
    // if winner open modal to show who is the winner
    // if no winner but moves available keep going
    // if no winner and no move is available show modal
    // post the Final Board state tu a fake API fake.api.3bee/board
  };

  return (
    <>
      <main>
        <Gameboard onChange={handleChange}>
          {(i) => <BoardBlock index={i} />}
        </Gameboard>
      </main>
    </>
  );
}
```

- No other props are allowed on the Gameboard and BoardBlock components. (Tip: You can use context internally)

- Setup a get-winner endpoint in the api folder to check if someone won or it's a draw.

- Fetch results from the endpoint on every change (Bonus points if you manage to use react query mutations)

- Bonus points if you manage to do some tests

- Explain how to move from SINGLE console player to a multiplayer version (remote)

###

In order to allow a multiplayer experience we could create a random generated url that the first player could share with the other.
Afterwards, we might limit the number of players per page to 2 and than use websockets to allow the two players browsers to receive the updated state after one player does his move. To make the game more engaging we might add a scoreboard to track how many games each player won.

###

- Use Tailwind

- Use Typescript

- After deploy
