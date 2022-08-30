import * as api from "../api";
export const Loginclerk = (user) => async (dispatch) => {
  try {
    const { data } = await api.LoginClerk(user);
    console.log(data);
    dispatch({ type: "LOGIN", payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllStudent = () => async (dispatch) => {
  try {
    const { data } = await api.allStudent();
    dispatch({ type: "FETCH_ALL", payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
export const getAllCk = () => async (dispatch) => {
  try {
    const { data } = await api.allClerk();
    dispatch({ type: "FETCH_C", payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
export const getAllApps = () => async (dispatch) => {
  try {
    const { data } = await api.allApps();
    dispatch({ type: "FETCH", payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const CreateStudent = (student) => async (dispatch) => {
  try {
    await api.newStudent(student);
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    console.log(id);

    await api.deletStduent(id);
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const findStudent = (id) => async (dispatch) => {
  try {
    const { data } = await api.studentById(id);
    dispatch({ type: "FETCHUSER", payload: data });
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const updateStudent = (student) => async (dispatch) => {
  try {
    console.log(student);
    const { data } = await api.updateStudent(student);
    // dispatch({ type: "NEW", payload: data });
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const createClerk = (clerk) => async (dispatch) => {
  try {
    await api.newClerk(clerk);
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const deleteClerk = (id) => async (dispatch) => {
  try {
    console.log(id);

    await api.deletClerk(id);
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const findClerk = (id) => async (dispatch) => {
  try {
    const { data } = await api.clerkById(id);
    dispatch({ type: "FETCH_C", payload: data });
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const updateClerk = (clerk) => async (dispatch) => {
  try {
    console.log(clerk);
    await api.updateClerk(clerk);
  } catch (err) {
    alert(err.response.data.message);
  }
};

export const deleteApp = (id) => async () => {
  try {
    console.log(id);

    await api.deletApp(id);
  } catch (err) {
    alert(err.response.data.message);
  }
};
