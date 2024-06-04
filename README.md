
# Technology Stack

    - NestJS (Backend Framework)
    - PostgreSQL (Database)
    - TypeORM (ORM)

# Controllers

    - UserController: Handles user-related CRUD operations.
    - WalletAddressController: Handles wallet address-related CRUD operations.

## API Endpoints

### Users

    - GET /users: Retrieves all users from the database.
        Response: An array of User objects.

    - GET /users/:id: Retrieves a specific user based on the provided ID.
        Path Parameter: id (number) - Unique identifier of the user.
        Response: A single User object.

    - POST /users: Creates a new user.
        Request Body: A User object containing user details.
            Properties:
                username (string): Username for the user (unique).
                email (string): Email address for the user (unique).
                password (string): User's password.
        Response: The newly created User object.

    - PUT /users/:id: Updates an existing user.
        Path Parameter: id (number) - Unique identifier of the user.
        Request Body: A User object containing updated user details.
        Response: The updated User object.

    - DELETE /users/:id: Deletes a user.
        Path Parameter: id (number) - Unique identifier of the user.
        Response: No content (status code 204).

### Wallet Addresses:

    - GET /wallet-addresses: Retrieves all wallet addresses from the database.
        Response: An array of WalletAddress objects.

    - GET /wallet-addresses/:id: Retrieves a specific wallet address based on the provided ID.
        Path Parameter: id (number) - Unique identifier of the wallet address.
        Response: A single WalletAddress object.

    - POST /wallet-addresses: Creates a new wallet address associated with a user.
        Request Body: A WalletAddress object containing wallet address details.
            Properties:
                address (string): User's wallet address.
        Response: The newly created WalletAddress object.

    - PUT /wallet-addresses/:id: Updates an existing wallet address.
        Path Parameter: id (number) - Unique identifier of the wallet address.
        Request Body: A WalletAddress object containing updated wallet address details.
        Response: The updated WalletAddress object.

    - DELETE /wallet-addresses/:id: Deletes a wallet address.
        Path Parameter: id (number) - Unique identifier of the wallet address.
        Response: No content (status code 204

## Please see comments in code for more details.