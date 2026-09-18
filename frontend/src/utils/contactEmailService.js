/**
 * InGage EduTech - Contact Email Service (Compatibility Layer)
 * Proxies requests to the central frontend API service in src/services/api.js.
 */

export {
  API_BASE_URL as BACKEND_API_URL,
  fileToBase64,
  submitContact as sendContactMessage,
  checkHealth,
  submitApplication,
} from "../services/api.js";

import api from "../services/api.js";
export default api;
