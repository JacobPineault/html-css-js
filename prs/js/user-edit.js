let url = "http://localhost:8080";
let user;

$().ready(() => {
  console.log("jQuery is ready!");
  $("#get").click(() => {
    let userId = $("#userid").val();
    $.getJSON(`${url}/users/${userId}`).done((res) => {
      let jsonresp = res;
      display(jsonresp);
    });
  });
});

const display = (jsonresp) => {
  let user = jsonresp.data;
  $("#eid").text(user.id);
  $("#eusername").text(user.userName);
  $("#epassword").text(user.password);
  $("#efullname").text(user.firstName + " " + user.lastName);
  $("#ephonenumber").text(user.phoneNumber);
  $("#eemail").text(user.email);
  $("#ereviewer").text(user.reviewer);
  $("#eadmin").text(user.admin);
};

// $().ready(() => {
//   console.log("jQuery is ready!");
// });

$().ready(() => {
  console.log("edit is ready");
  $("#savechanges").click(() => {
    console.log("inside edit click");
    //let user;
    let userId = $("#userid").val();
    $.getJSON(`${url}/users/${userId}`).done((res) => {
      let jsonresp = res;
      //display(jsonresp);
    });
    // let newUser = {};
    user.id = $("#eid").val();
    user.userName = $("#newUserName").val();
    user.password = $("#newPassword").val();
    user.firstName = $("#newFirstName").val();
    user.lastName = $("#newLastName").val();
    user.phoneNumber = $("#newPhoneNumber").val();
    user.email = $("#newEmail").val();
    user.isReviewer = $("#eisreviewer").prop("checked");
    user.isAdmin = $("#eisadmin").prop("checked");
    console.log("User: ", user);
    $.ajax({
      method: "PUT",
      url: `${url}/users/${userId}`,
      data: JSON.stringify(user),
      contentType: "application/json",
    })
      .done((res) => {
        console.log("User updated!", res);
      })
      .fail(() => {
        console.error(err);
      });
  });
});
