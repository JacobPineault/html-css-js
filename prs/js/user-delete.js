let url = "http://localhost:8080";

let user = null;

$().ready(() => {
  $("#get").click(() => {
    getUser();
  });
  $("#delete").click(() => {
    remove(user);
  });
});

const remove = (user) => {
  $.ajax({
    method: "DELETE",
    url: `${url}/users/${user.id}`,
    contentType: "application/json",
  })
    .done((res) => {
      console.log("User Deleted", res);
    })
    .fail((err) => {
      console.log("ERROR: ", err);
    });
};

const getUser = () => {
  let userId = $("#userid").val();
  userGetByPK(userId).done((user) => {
    console.log("User", user);
    display(user.data);
  });
};

const userGetByPK = (id) => {
  $.getJSON(`${url}/users/${id}`)
    .done((res) => {
      user = res.data;
      display(user);
      console.debug("JR: ", res);
    })
    .fail((err) => {
      console.error(err);
    });
};

const display = (user) => {
  $("#eid").text(user.id);
  $("#eusername").text(user.userName);
  $("#efullname").text(user.firstName + " " + user.lastName);
  $("#ephonenumber").text(user.phoneNumber);
  $("#eemail").text(user.email);
  $("#eisreviewer").prop("checked", user.reviewer);
  $("#eisadmin").prop("checked", user.admin);
};
