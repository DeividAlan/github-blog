## Description

This project, an application was developed that integrates with the GitHub API to retrieve user profile information, including image, number of followers, name, and other details, as well as to display issues from a selected repository. The issues are presented in a summarized form and can be filtered, and the application also provides the ability to view a complete post on a dedicated page. These functionalities were implemented to showcase skills in fetching and displaying API data, offering a robust demonstration of competencies in developing this type of application.

## Requirements

- Node

## Installation


```bash
# Dependency installation
$ npm install

# .env
Create a .env based on .env.example and fill it with desired github information.
```
## Warning

The GitHub API has a limit of 10 requests per minute if you don't set up a private key. You can have up to 30 requests per minute for free by configuring a private key, you can see it in the documentation: https://docs.github.com/pt/rest/search#rate-limit

## Running the app

```bash
$ npm run dev
```
