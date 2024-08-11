# github-repo-search

Web-приложение для поиска репозиториев GitHub.

В ветке `main` запросы написаны с использованием **axios** на **GitHub Rest API**.

В ветке `graphql` запросы с помощью **graphql-request** на **GitHub GraphQL API**.

> Перед запуском необходимо добавить .env по примеру .env.example, так как необходима авторизация перед запросом к API.

### Запуск приложения

```bash
cd github-repo-search
npm i
npm run dev
```

Приложение будет доступно на `http://localhost:4001/github-repo-search/`

### Из MUI использованы:

- Chip - для отображения языка и топиков репозитория;
- Rating - для отображения звезды в деталях;
- Button - кнопка поиска;
- DataGrid - для отображения таблицы результатов.
