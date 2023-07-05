<img align="right" width="30%" src="/src/assets/logo.png"></img>

<h3 align="middle">
<a href="https://github.com/FontysIPost/FIPost/wiki">Wiki</a>
<a>•</a>
<a href="https://github.com/FontysIPost/FIPost/blob/dev/.github/CONTRIBUTING.md">Contributing</a>
<a>•</a>
<a href="https://discord.gg/3xFK8ZAA3d">Contact</a>
</h3>

# 📬 Frontend - Fontys Internal Post (FIPost)
Frontend repository of [FIPost](https://github.com/FontysIPost/FIPost) made with VueJS

## ⚒️ Development
### 📐Stack
- **Node version:** 14.15.5
- **NPM version:** 6.14.11
- [VueJS](https://vuejs.org/guide/introduction.html) - HTML/[SCSS](https://sass-lang.com/documentation/syntax)/JavaScript and [TypeScript](https://www.typescriptlang.org/docs/)
>Upgrading node to later versions will crash.

## 🏁 Getting Started
1. Clone the repository:
```sh
git clone --recursive https://github.com/FontysIPost/Frontend.git
```
2. Install dependencies:
```sh
# Check which node you're using: node -v
# Install nvm(node version manager) to quickly change node versions
# To install node version: nvm install 14.15.5
# To switch node version: nvm use 14.15.5
npm i
```
___
3. Copy `.env.example` and paste it as `.env` and populate these ports (make sure it's in the root directory of the `ui`):
```dotenv
VUE_APP_API_GATEWAY=https://Localhost:44311
VUE_APP_URL=Localhost:8080
```
___
4. Run the frontend UI and open `http://localhost:8080/` when ready:
```sh
npm run serve
```
>Make sure to run the backend in order to use and access the functionality
___
___
## 📦Getting Started with Docker [might be outdated]
The docker image used in this build uses a Nginx webserver to serve the SPA VueJS content on port `80`.

### Build
Choose on of the following.

#### Default build
```sh
docker build -t ui .
```

#### Custom build
Replace example.nl with your custom urls.

```sh
docker build -t ui --build-arg VUE_APPURL=www.example.nl --build-arg VUE_APP_APIGATEWAY=gateway.example.nl .
```

### Run
```sh
docker run -p 8080:80 --name ui-app ui
```
