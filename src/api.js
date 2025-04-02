import axios from "axios";

const api = axios.create({
  baseURL: "https://news-backend-vtec.onrender.com/api",
});

export const getArticles = async () => {
    const { data } = await api.get("/articles");
    return data.articles;
};

export const getArticleById = async (article_id) => {
  const {data} = await api.get(`/articles/${article_id}`);
  return data.article;
};

export const getCommentsByArticleId = async (article_id) => {
  const {data} = await api.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const patchArticleVotesById = async (inc_votes, article_id) => {
  const { data } = await api.patch(`/articles/${article_id}`, { inc_votes });
  return data.updatedArticle;
}

export const postCommentByArticleId = async (article_id, username, body) => {
  const { data } = await api.post(`/articles/${article_id}/comments`, { username, body });
  return data.newComment;
}

// export const getUsers = () => {
//   console.log("getUsers Called");
//   return api.get("/users").then(({data: {users}}) => {
//     return users;
//   });
// };

// export const getItemsByCategoryName = (category) => {
//   console.log("getItemsByCategoryName Called");
//   return api
//     .get("/items" + (category ? `?category_name=${category}` : ""))
//     .then(({data: {items}}) => {
//       return items;
//     });
// };

// export const postCategory = (category_name) => {
//   console.log("postCategory Called");
//   return api
//     .post("/categories", {category_name: category_name})
//     .then(({data: {category}}) => {
//       return category;
//     });
// };

// export const postItem = ({
//   item_name,
//   description,
//   img_url,
//   price,
//   category_name,
//   listed_by,
// }) => {
//   console.log("postItem Called");
//   return api
//     .post("/items", {
//       item_name: item_name,
//       category_name: category_name,
//       description: description,
//       img_url: img_url,
//       price: price,
//       listed_by: listed_by,
//     })
//     .then(({data: {item}}) => {
//       return item;
//     });
// };

// export const getItemById = (item_id) => {
//   console.log("getItemById Called");
//   return api.get(`/items/${item_id}`).then(({data: {item}}) => {
//     return item;
//   });
// };


