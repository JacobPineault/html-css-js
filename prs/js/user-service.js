const userGetAll = () => {
  return $.getJSON(`${url}/users/`);
};

const userGetByPK = (id) => {
  return $.getJSON(`${url}/users/${id}`);
};

const userCreate = (user) => {
  $.ajax({
    method: "POST",
    url: `${url}/users/`,
    data: JSON.stringify(user),
    contentType: "application/json",
  })
    .done((res) => {
      console.log("User Inserted", res);
    })
    .fail((err) => {
      console.log("ERROR: ", err);
    });
};

const userChange = (user) => {
  $.ajax({
    method: "PUT",
    url: `${url}/users/`,
    data: JSON.stringify(user),
    contentType: "application/json",
  })
    .done((res) => {
      console.log("User Updated", res);
    })
    .fail((err) => {
      console.log("ERROR: ", err);
    });
};

const userRemove = (user) => {
  $.ajax({
    method: "DELETE",
    url: `${url}/users/${user.id}`,
    // data: JSON.stringify(user),
    contentType: "application/json",
  })
    .done((res) => {
      console.log("User Deleted", res);
    })
    .fail((err) => {
      console.log("ERROR: ", err);
    });
};
