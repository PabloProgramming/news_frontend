import axios from "axios";

const api = axios.create({
  baseURL: "https://news-backend-vtec.onrender.com/api",
});

export const getArticles = async (slug, searchParams) => {
  const params = new URLSearchParams(searchParams);
  if (slug) params.set("topic", slug);
  const {data} = await api.get(`/articles?${params.toString()}`);
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
  const {data} = await api.patch(`/articles/${article_id}`, {inc_votes});
  return data.updatedArticle;
};
export const patchCommentVotesById = async (inc_votes, comment_id) => {
  const {data} = await api.patch(`/comments/${comment_id}`, {inc_votes});
  return data.updatedComment;
};
export const postCommentByArticleId = async (article_id, username, body) => {
  const {data} = await api.post(`/articles/${article_id}/comments`, {
    username,
    body,
  });
  return data.newComment;
};

export const deleteCommentByCommentId = async (comment_id) => {
  await api.delete(`/comments/${comment_id}`);
};

export const getTopics = async () => {
  const {data} = await api.get(`/topics`);
  return data.topics;
};

export const getUsers = async () => {
  const {data} = await api.get(`/users`);
  return data.users;
};


