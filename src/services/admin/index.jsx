import { createAdmin, validateCredentials, validateToken } from "./api";
// Haciendo llamadas al backend
export const handleCreateAdmin = async (AdminItem) => {
  try {
    const response = await createAdmin(AdminItem);
    console.log("Nuevo usuario creado exitosamente...");
    return response;
  } catch (e) {
    throw e;
  }
}

export const handleValidateCredentials = async (username, password) => {
  try {
    const response = await validateCredentials(username, password);
    console.log("Leyendo credenciales...");
    return response;
  } catch (e) {
    if (e.response && e.response.status === 401) {
      console.error("Credenciales no válidas...");
      return null
    }
    console.error("Error al validar credenciales...")
    throw e;
  }
}

export const handleValidateToken = async (token) => {
  try {
    const response = await validateToken(token);
    return response;
  } catch (e) {
    throw e;
  }
}
