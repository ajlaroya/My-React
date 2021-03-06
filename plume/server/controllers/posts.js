import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  const { id } = req.params

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  const { page } = req.query

  try {
    // limit = no. of posts, startIndex gets index of every page
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; 
    
    const total = await PostMessage.countDocuments({})
    const posts = await PostMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

    res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)} );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query

  try {
    // i = ignore case, RegExp makes it easier to search mongoose db
    const title = new RegExp(searchQuery, 'i');

    // $or = match one or two queries: title or tags
    const posts = await PostMessage.find({ $or: [{ title }, { tags: { $in: tags.split(',')}}]})
  
    res.json({ data: posts })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPost = (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  // if user is not authenticated
  if (!req.userId) return res.json({ message: "User not authenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);

  // who liked a certain post
  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // like the post
    post.likes.push(req.userId);
  } else {
    // dislike a post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  // grab post from database
  const post = await PostMessage.findById(id);

  // push comment to post
  post.comments.push(value);

  // update database so post reflects new comment
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })

  res.json(updatedPost);
}
