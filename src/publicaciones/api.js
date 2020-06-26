export const createPublicationAPI = (idUsuario, text, onResponseOk, onResponseError) => {
    const params = {
        text
    };
    return fetch("http://localhost:8080/rest/user/publications/" +idUsuario +"/new",
        {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const deletePublicationAPI = (idUsuario, idPublicacion, onResponseOk, onResponseError) => {
    return fetch("http://localhost:8080/rest/user/"+idUsuario+"/publications/" +idPublicacion +"/delete",
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const editProfileAPI = (idUser, profile, onResponseOk, onResponseError) => {
    const params = {
        ...profile
    };
    return fetch("http://localhost:8080/rest/user/profile/" + idUser+ "/edit",
        {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const fetchProfile = (idUser, onResponseOk, onResponseError) => {
    return fetch("http://localhost:8080/rest/user/profile/"+idUser,
        {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const fetchPublications = (idUser, onResponseOk, onResponseError) => {
    return fetch("http://localhost:8080/rest/user/publications/"+idUser,
    {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const fetchFriends = (idUser, onResponseOk, onResponseError) => {
    return fetch("http://localhost:8080/rest/user/friends/"+idUser,
        {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const searchAPI = (idUser, text, onResponseOk, onResponseError) => {
    return fetch("http://localhost:8080/rest/user/"+idUser+"/search?q="+text,
    {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const sendFriendshipRequestAPI = (idRequester, idTo, estado, onResponseOk, onResponseError) => {
    const params = {
        idUserTo: idTo,
        estado
    };
    console.log(idRequester);
    console.log(idTo);
    console.log(estado);
    return fetch("http://localhost:8080/rest/user/friends/"+ idRequester +"/request",
        {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const sendFriendshipAcceptAPI = (idResponser, idTo, estado, onResponseOk, onResponseError) => {
    const params = {
        idUserTo: idTo,
        estado
    };
    return fetch("http://localhost:8080/rest/user/friends/"+ idResponser +"/response",
        {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};

export const sendLike = (idUser, idPubli, onResponseOk, onResponseError) => {
    return fetch("http://localhost:8080/rest/user/"+idUser+"/publication/" + idPubli,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then((data) => onResponseOk(data))
        .catch((err) => onResponseError());
};