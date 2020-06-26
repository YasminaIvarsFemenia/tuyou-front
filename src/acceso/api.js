export const tryLogin = (user, onResponseOk, onResponseError) => {
    const params = {};
    params.mail = user.mail;
    params.pwd = user.pwd;
    return fetch("http://localhost:8080/rest/user",
        {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const register = (userRegister, onResponseOk, onResponseError) => {
    const params = {};
    params.name = userRegister.name;
    params.surname = userRegister.surname;
    params.studies = userRegister.studies;
    params.birthday = userRegister.birthday;
    params.birthplace = userRegister.birthplace;
    params.mail = userRegister.email;
    params.pwd = userRegister.password;
    return fetch("http://localhost:8080/rest/user/add",
        {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};