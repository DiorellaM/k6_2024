**How to install k6**

**For MacOS:**
brew install k6

**For Linux:**
sudo apt update
sudo apt install k6

**For Windows:**
Download the latest version from the official k6 website or install via Chocolatey
choco install k6

**How to run your tests with k6**

- cd the folder that your test is located
- In the terminal run: k6 run (name of file.js)

**Public endpoints that can be used:**
https://test-api.k6.io/

**How to connect with Grafana**

- Create a grafana account
- Go to k6
- Go to Home > Testing & synthetics > Performance > Settings
- Copy token
- In the terminal run: k6 login cloud --token (add token)
- k6 cloud test.js
