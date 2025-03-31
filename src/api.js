import axios from "axios";

const api = axios.create({
  baseURL: "https://news-backend-vtec.onrender.com/api",
});

export const getArticles = async () => {
  const {data} = await api.get("/articles");
  return data.articles;
};

export const getArticleById = async (article_id) => {
  const {data} = await api.get(`/articles/${article_id}`);
  return data.article;
};

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

