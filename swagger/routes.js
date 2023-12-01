/**
 * @swagger
 * /api/v1/game:
 *   get:
 *     summary: Get all games
 *     description: Retrieve a list of all games.
 *     responses:
 *       '200':
 *         description: A list of games successfully retrieved.
 *         content:
 *           application/json:
 *             example:
 *               status: successfully fetched all games
 *               results: 3
 *               data:
 *                 games:
 *                   - _id: "656a150364b49579bf5ab106"
 *                     Name: "Bubble Up"
 *                     Url: "www.BubbleUp.com"
 *                     Author: "Sunny Dubey"
 *                     Published_Date: "2023-12-01T18:50:57.310Z"
 *                   - _id: "656a2b3d17422a4290ea57c5"
 *                     Name: "Candy Crush"
 *                     Url: "www.candyCrush.com"
 *                     Author: "Shivam Dubey"
 *                     Published_Date: "2023-12-01T18:48:09.237Z"
 *                   - _id: "656a2b5217422a4290ea57c7"
 *                     Name: "Temple Run"
 *                     Url: "www.templeRun.com"
 *                     Author: "Sejal Dubey"
 *                     Published_Date: "2023-12-01T18:48:09.237Z"
 *       '404':
 *         description: No games found.
 *         content:
 *           application/json:
 *             example:
 *               status: No games in the database!
 *               error: Game not found
 */

/**
 * @swagger
 * /api/v1/game:
 *   post:
 *     summary: Create a new game
 *     description: Create a new game with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             Name: "New Game"
 *             Url: "www.newGame.com"
 *             Author: "New Author"
 *     responses:
 *       '201':
 *         description: New game successfully created.
 *         content:
 *           application/json:
 *             example:
 *               status: successfully created new game
 *               data:
 *                 game:
 *                   _id: "newGameId"
 *                   Name: "New Game"
 *                   Url: "www.newGame.com"
 *                   Author: "New Author"
 *                   Published_Date: "2023-12-07T16:45:00.000Z"
 *       '400':
 *         description: Bad request. Please provide values for Name, Url, and Author.
 *         content:
 *           application/json:
 *             example:
 *               status: Please provide values for Name, Url, Author, and Published_Date!
 *               error: Bad request
 */

/**
 * @swagger
 * /api/v1/game/{id}:
 *   get:
 *     summary: Get a single game by ID
 *     description: Retrieve details of a specific game by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the game to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Details of the game successfully retrieved.
 *         content:
 *           application/json:
 *             example:
 *               status: successfully fetched the game
 *               data:
 *                 game:
 *                   _id: "656a150364b49579bf5ab106"
 *                   Name: "Bubble Up"
 *                   Url: "www.BubbleUp.com"
 *                   Author: "Sunny Dubey"
 *                   Published_Date: "2023-12-01T18:50:57.310Z"
 *       '404':
 *         description: Game not found.
 *         content:
 *           application/json:
 *             example:
 *               status: Game not found
 *               error: Game with the provided ID not found

 *   patch:
 *     summary: Update a game by ID
 *     description: Update details of a specific game by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the game to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             Name: "Updated Bubble Up"
 *             Url: "www.updatedBubbleUp.com"
 *             Author: "Updated Sunny Dubey"
 *     responses:
 *       '200':
 *         description: Game successfully updated.
 *         content:
 *           application/json:
 *             example:
 *               status: successfully updated the game
 *               data:
 *                 game:
 *                   _id: "656a150364b49579bf5ab106"
 *                   Name: "Updated Bubble Up"
 *                   Url: "www.updatedBubbleUp.com"
 *                   Author: "Updated Sunny Dubey"
 *                   Published_Date: "2023-12-01T18:50:57.310Z"
 *       '404':
 *         description: Game not found.
 *         content:
 *           application/json:
 *             example:
 *               status: Game not found
 *               error: Game with the provided ID not found

 *   delete:
 *     summary: Delete a game by ID
 *     description: Delete a specific game by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the game to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Game successfully deleted.
 *       '404':
 *         description: Game not found.
 *         content:
 *           application/json:
 *             example:
 *               status: Game not found
 *               error: Game with the provided ID not found
 */
