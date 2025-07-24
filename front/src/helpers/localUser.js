function getUserIdFromLocalStorage() {
  try {
    const storedUserJSON = localStorage.getItem("user");
    if (!storedUserJSON) return null;
    const parseUser = JSON.parse(storedUserJSON);
    if (parseUser?.user.id) return parseUser.user.id;
  } catch (error) {}
}

export default getUserIdFromLocalStorage;
