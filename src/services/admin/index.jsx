import { createAdmin, validateCredentials, validateToken } from "./api";
// Haciendo llamadas a la api
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
