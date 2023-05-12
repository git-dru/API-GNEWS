# <Project Name>

<Provide a brief description of your project here.>

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [API KEY](#api-key)
3. [Usage](#usage)
4. [EndPoints](#endpoints)
5. [Built With](#built-with)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This is a list of things you need to have prior to installing the project.

- Node.js
- npm

### Installation

- git clone

```sh
https://github.com/git-dru/API-GNEWS.git
```

- Navigate into the project directory:

```sh
cd API-GNEWS
```

- Install the dependencies:

```sh
npm install
```

## API KEY

You will need a GNews API key to make requests. You can obtain an API key by signing up at https://gnews.io/docs/v4#introduction.

Once you have the API key, create a .env file in the root directory of the project and add your GNews API key like so:

```sh
GNEWS_API_KEY=<your_gnews_api_key>
```

Replace <your_gnews_api_key> with the actual key.

## USAGE

Start the server:

```sh
node index.js
```

## Endpoints

Fetch N news articles:

```sh
GET /api/article?count=N
```

Search articles by keyword:

```sh
GET /api/article/search?search=SEARCH

```

Search articles by title:

```sh
GET /api/article/title?title=TITLE
```

Search articles by author:

```sh
GET /api/article/author?author=AUTHOR_NAME
```

All endpoints support caching, so repeated requests for the same data will not trigger additional calls to the GNews API.

## Built With

- Node.js
- Express.js
- Axios
- node-cache
