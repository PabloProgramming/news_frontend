# 📰 NC News Frontend

Welcome to the **NC News Frontend** — a responsive and dynamic web application built with **React.js**. It serves as the frontend interface for the **NC News API**, allowing users to explore articles, topics, and comments in an intuitive way.

## 🚀 Features

✔ **🗞️ Browse Articles** – View all news articles  
✔ **🔍 Search by Title** – Instant navigation with search functionality  
✔ **🗃️ Filter by Topic** – Easily find articles by category  
✔ **👍 Vote on Articles** – Upvote/downvote your favorite content  
✔ **💬 Manage Comments** – View, post, and delete comments  
✔ **👤 Explore Users** – See all registered users  
✔ **⚠️ Custom 404 Page** – Handles invalid routes gracefully  

## 🛠️ Tech Stack

- **React.js** – Frontend library  
- **React Router** – Client-side routing  
- **Axios** – API communication  
- **Vite** – Fast development & build tool  
- **CSS** – Styling  
- **React Spinners** – Loading indicators  

## 📁 Project Structure
src/
├── api/ # Axios helper functions
├── components/ # Reusable React components
├── hooks/ # Custom hooks (e.g., useVote)
├── styles/ # CSS files
└── App.jsx # Main app & routes

Copy

## 🔗 API Reference

All data is fetched from the **NC News Backend API**. Key endpoints:

| Endpoint | Description |
|----------|-------------|
| `/articles` | Fetch all articles |
| `/articles/:article_id` | Fetch article by ID |
| `/articles/title/:title` | Search by title |
| `/topics` | Fetch available topics |
| `/users` | Fetch users |

### Implemented Routes
```bash
<Routes>
  <Route path="/" element={<Articles />} />
  <Route path="/articles/:article_id" element={<Article />} />
  <Route path="/topics" element={<Topics />} />
  <Route path="topics/:slug/articles" element={<Articles />} />
  <Route path="/users" element={<Users />} />
  <Route path="/*" element={<NotFoundPage />} />
  <Route path="/404" element={<NotFoundPage />} />
</Routes>
```

## 🧪 Getting Started
Clone the repository
```bash
Copy
git clone https://github.com/your-username/nc-news-frontend.git
cd nc-news-frontend
Install dependencies
```

```bash
Copy
npm install
Start the development server
```
```bash
Copy
npm run dev
The app will run locally at: http://localhost:5173/
```

🤝 Contributing
Feel free to fork this repo and submit a pull request!
Your contributions are welcome and appreciated 🙌

📄 License
This project is open-source and available under the MIT License.

👨‍💻 Author
Pablo Montalvo Tercero
Java Developer | React Enthusiast | Open Source Contributor

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
