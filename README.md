## DEMO
movie-app.oceceli.com/discover


# Installation

## Firstly
You'll need a themoviedb API key. 

When you acquire the key, rename .env.example to .env and place it in the root directory with filename
```
/.env
API_TOKEN=<Your token>
```
<br/>

Make sure to install the dependencies:
```
npm install
```


## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Docker
Enter your API key in the Dockerfile

The image output will be ~70mb in size
```bash
docker image build --tag movie-app .
docker container run -d -p 3000:3000 movie-app
```
