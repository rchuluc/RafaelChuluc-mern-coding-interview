export default class Environment {
  static backendApi = process.env.BACKEND_API || "http://localhost:3001/v1";
}
