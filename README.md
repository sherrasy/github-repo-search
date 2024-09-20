# github-repo-search

Web-приложение для поиска репозиториев GitHub, включающее следующие функции:

- поиск по тексту из строки запроса в репозиториях, поддержзивается валидация на заполнение поля запроса;
    <details>
      <summary> 👀 Показать </summary>
      <p>
           <img src="https://github.com/user-attachments/assets/8aba0c52-d716-4dc1-bf69-7df020bf9a98" width='700'>
           <img src="https://github.com/user-attachments/assets/3cdc0ad2-057a-4bc0-a805-09c0a2ecabf1" width='700'>
           <img src="https://github.com/user-attachments/assets/29990c39-fa4b-406e-a7f5-e11bbae7d280" width='700'>
      </p>
    </details>
    
- отображение информации о выбранном репозитории;
    <details>
      <summary> 👀 Показать </summary>
      <p>
           <img src="https://github.com/user-attachments/assets/4a9dfe01-9478-466a-884b-d99cfcc9e766" width='700'>
      </p>
    </details>

- сортировку по полям "Число звезд", "Число форков", "Дата обновления", а также пагинацию
    <details>
      <summary> 👀 Показать </summary>
      <p>
           <img src="https://github.com/user-attachments/assets/4640b3ab-7bdd-4d67-8d89-7239045d4e68" width='700'>
           <img src="https://github.com/user-attachments/assets/edcd0049-9a98-4939-8eb5-b5b3f14dd734" width='700'>
      </p>
    </details>

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
