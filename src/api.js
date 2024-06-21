import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const fetchJobPosts = () => axios.get(`${API_URL}/jobposts/`);
export const fetchResumes = () => axios.get(`${API_URL}/resumes/`);
export const createResume = (resume) =>
  axios.post(`${API_URL}/resumes/`, resume);
