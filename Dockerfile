FROM cypress/included:13.7.3

WORKDIR /e2e

RUN npm install -D typescript @types/node @types/cypress