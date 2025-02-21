# webhook-notifications
Real-time notification server using Express and Socket.IO. Handles HTTP requests and WebSocket connections, allowing clients to receive unique user IDs and real-time notifications. Includes middleware for logging and request validation.

#Setup 
Follow these steps to get the project up and running in your local environment or server.

## Step 1: Clone the Repository
First, clone this repository to your local machine or server.
```bash
git clone https://github.com/your-username/repository-name.git
```
## Step 2: Navigate to the Project Directory
Change to the project directory.
```bash
cd repository-name
```
## Step 3: Install Dependencies
Install the required dependencies using npm.
```bash
npm install
```
## Step 4: Start the Server
You can start the server manually using:
```bash
npm install
```
## Step 5: Set Up the Server with PM2
 1.  Install PM2 globally (if you don't have it already):
```bash
npm install pm2 -g
```
 2. Start the server with PM2:
```bash
pm2 start server.js --name "notification-webhook"
```
 3. To ensure PM2 starts your application on server restarts, use:
```bash
pm2 startup
pm2 save
```
## Step 6: Verify the Server is Running
You should be able to access the application at http://localhost:8000 and send POST requests to /notifications for testing the webhook.
