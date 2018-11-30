import axios from 'axios';

const API = axios.create({ baseURL: process.env.SERVER || 'http://localhost:5000/' });

const api = {
  /**
   * Register a new user
   * @public
   * @param {Object} user
   * @param {string} user.username
   * @param {string} user.email
   * @param {string} user.password
   * @returns {Promise}
   */
  register: async ({ username, email, password }) => {
    try {
      const res = await API.post('auth/register', {
        username,
        email,
        password,
      });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  },
  /**
   * User log in
   * @public
   * @param {Object} credentials
   * @param {string} username
   * @param {string} password
   * @returns {Promise}
   */
  login: async ({ username, password }) => {
    try {
      const res = await API.post('/auth/login', {
        username,
        password,
      });
      API.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

      return true;
    } catch (error) {
      return false;
    }
  },
  /**
   * User logout
   * @public
   */
  logout: () => {
    API.defaults.headers.common.Authorization = undefined;
    return {
      success: true,
      message: 'Successfully logged out',
    };
  },
  /**
   * Fetch categories
   * @public
   * @returns {Promise} Array of categories
   */
  getCategories: async () => {
    try {
      const res = await API.get('/resources/categories');
      return res.data;
    } catch (error) {
      return ({ categories: ['Fetch error'] });
    }
  },
  /**
   * Fetch resources
   * @public
   * @param {string} [category]
   * @returns {Promise} Array of resources
   */
  getResources: async (category = undefined) => {
    try {
      const res = await API.get('/resources', { category });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  },
  /**
   * Fetch one resource
   * @public
   * @param {string} resourceId
   * @returns {Promise} resource object
   */
  getOneResource: async (resourceId) => {
    try {
      const res = await API.get(`/resources/${resourceId}`);
      return res.data.resource;
    } catch (error) {
      return error.response.data;
    }
  },
  /**
   * Submit a new resource
   * @private
   * @param {object} resource
   * @param {string} resource.name
   * @param {string} resource.link
   * @param {string} resource.category
   * @param {string} [resource.desc]
   * @returns {Promise}
   */
  submitResource: async ({ name, link, category, desc = '' }) => {
    try {
      const res = await API.post('/resources', { name, link, category, desc });
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  },
};

export default api;
