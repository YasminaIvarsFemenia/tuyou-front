import * as types from "./types";
import { fetchFriends, fetchPublications, fetchProfile, sendFriendshipRequestAPI, editProfileAPI, 
  createPublicationAPI, searchAPI, sendFriendshipAcceptAPI, sendLike, deletePublicationAPI } from "../api";

const createPublicationRequest = () => ({
  type: types.PUBLICATION_NEW_REQUEST,
});
const createPublicationSuccess = (publication) => ({
  type: types.PUBLICATION_NEW_SUCCESS,
  payload: publication
});
const createPublicationFailure = (error) => ({
  type: types.PUBLICATION_NEW_FAILURE,
  payload: error,
});

export const createPublication = (idUsuario, text) => (dispatch) => {
  dispatch(createPublicationRequest());
  createPublicationAPI(
    idUsuario,
    text,
    (newPublication) => {
      dispatch(createPublicationSuccess(newPublication));
    },
    (err) => {
      dispatch(createPublicationFailure(err));
    });
};

const deletePublicationRequest = () => ({
  type: types.PUBLICATION_DELETE_REQUEST,
});
const deletePublicationSuccess = (publication) => ({
  type: types.PUBLICATION_DELETE_SUCCESS,
  payload: publication
});
const deletePublicationFailure = (error) => ({
  type: types.PUBLICATION_DELETE_FAILURE,
  payload: error,
});

export const deletePublication = (idUsuario, idPublicacion) => (dispatch) => {
  dispatch(deletePublicationRequest());
  deletePublicationAPI(
    idUsuario,
    idPublicacion,
    (newPublication) => {
      dispatch(deletePublicationSuccess(newPublication));
    },
    (err) => {
      dispatch(deletePublicationFailure(err));
    });
};

const getProfileRequest = () => ({
  type: types.PROFILE_REQUEST,
});
const getProfileSuccess = (profile) => ({
  type: types.PROFILE_SUCCESS,
  payload: profile
});
const getProfileFailure = (error) => ({
  type: types.PROFILE_FAILURE,
  payload: error,
});

export const getProfile = (idUsuario) => (dispatch) => {
  dispatch(getProfileRequest());
  fetchProfile(
    idUsuario,
    (profile) => {
      dispatch(getProfileSuccess(profile));
    },
    (err) => {
      dispatch(getProfileFailure(err));
    });
};

const getPublicationRequest = () => ({
  type: types.PUBLICATION_REQUEST,
});
const getPublicationSuccess = (publications) => ({
  type: types.PUBLICATION_SUCCESS,
  payload: publications
});
const getPublicationFailure = (error) => ({
  type: types.PUBLICATION_FAILURE,
  payload: error,
});

export const getPublications = (idUsuario) => (dispatch) => {
  dispatch(getPublicationRequest());
  fetchPublications(
    idUsuario,
    (publications) => {
      dispatch(getPublicationSuccess(publications));
    },
    (err) => {
      dispatch(getPublicationFailure(err));
    });
};

const getFriendsRequest = () => ({
  type: types.FRIENDS_REQUEST,
});
const getFriendsSuccess = (friends) => ({
  type: types.FRIENDS_SUCCESS,
  payload: friends
});
const getFriendsFailure = (error) => ({
  type: types.FRIENDS_FAILURE,
  payload: error,
});

export const getFriends = (idUsuario) => (dispatch) => {
  dispatch(getFriendsRequest());
  fetchFriends(
    idUsuario,
    (friends) => {
      dispatch(getFriendsSuccess(friends));
    },
    (err) => {
      dispatch(getFriendsFailure(err));
    });
};



const editProfileRequest = () => ({
  type: types.PROFILE_UPDATE_REQUEST,
});
const editProfileSuccess = (user) => ({
  type: types.PROFILE_UPDATE_SUCCESS,
  payload: user
});
const editProfileFailure = (error) => ({
  type: types.PROFILE_UPDATE_FAILURE,
  payload: error,
});



export const editProfile = (idUser, perfil) => (dispatch) => {
  dispatch(editProfileRequest());
  editProfileAPI(
    idUser,
    perfil,
    (perfil) => {
      dispatch(editProfileSuccess(perfil));
    },
    (err) => {
      dispatch(editProfileFailure(err));
    });
};

const searchPeopleRequest = () => ({
  type: types.SEARCH_PEOPLE_REQUEST,
});
const searchPeopleSuccess = (people) => ({
  type: types.SEARCH_PEOPLE_SUCCESS,
  payload: people
});
const searchPeopleFailure = (error) => ({
  type: types.SEARCH_PEOPLE_FAILURE,
  payload: error,
});

export const searchPeople = (idUser, text) => (dispatch) => {
  dispatch(searchPeopleRequest());
  searchAPI(
    idUser,
    text,
    (people) => {
      dispatch(searchPeopleSuccess(people));
    },
    (err) => {
      dispatch(searchPeopleFailure(err));
    });
};

const friendshipRequest = () => ({
  type: types.FRIENDSHIP_REQUEST,
});
const friendshipSuccess = (amigos) => ({
  type: types.FRIENDSHIP_SUCCESS,
  payload: amigos
});
const friendshipFailure = (error) => ({
  type: types.FRIENDSHIP_FAILURE,
  payload: error,
});

export const sendFriendship = (idRequester, idTo, estado) => (dispatch) => {
  dispatch(friendshipRequest());
  sendFriendshipRequestAPI(
    idRequester, idTo, estado,
    (amigos) => {
      dispatch(friendshipSuccess(amigos));
    },
    (err) => {
      dispatch(friendshipFailure(err));
    });
};

const friendshipAcceptRequest = () => ({
  type: types.FRIENDSHIP_ACCEPT_REQUEST,
});
const friendshipAcceptSuccess = (amigos) => ({
  type: types.FRIENDSHIP_ACCEPT_SUCCESS,
  payload: amigos
});
const friendshipAcceptFailure = (error) => ({
  type: types.FRIENDSHIP_ACCEPT_FAILURE,
  payload: error,
});

export const acceptFriendship = (idRequester, idTo, estado) => (dispatch) => {
  dispatch(friendshipAcceptRequest());
  sendFriendshipAcceptAPI(
    idRequester, idTo, estado,
    (amigos) => {
      dispatch(friendshipAcceptSuccess(amigos));
    },
    (err) => {
      dispatch(friendshipAcceptFailure(err));
    });
};

const likeItRequest = () => ({
  type: types.LIKE_IT_REQUEST,
});
const likeItSuccess = (publicaciones) => ({
  type: types.LIKE_IT_SUCCESS,
  payload: publicaciones
});
const likeItFailure = (error) => ({
  type: types.LIKE_IT_FAILURE,
  payload: error,
});

export const likeIt = (idRequester, idTo) => (dispatch) => {
  dispatch(likeItRequest());
  sendLike(
    idRequester, idTo,
    (publicaciones) => {
      dispatch(likeItSuccess(publicaciones));
    },
    (err) => {
      dispatch(likeItFailure(err));
    });
};