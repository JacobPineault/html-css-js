let url = "http://localhost:8080";

$().ready(() => {
  console.log("jQuery is ready!");
  $("#save").click(() => {
    console.log("inside click");
    let newUser = {};
    newUser.id = Number($("#eid").val());
    newUser.userName = $("#eusername").val();
    newUser.password = $("#epassword").val();
    newUser.firstName = $("#efirstname").val();
    newUser.lastName = $("#elastname").val();
    newUser.phoneNumber = $("#ephonenumber").val();
    newUser.email = $("#eemail").val();
    newUser.isReviewer = $("#eisreviewer").prop("checked");
    newUser.isAdmin = $("#eisadmin").prop("checked");
    console.log("User: ", newUser);
    $.ajax({
      method: "POST",
      url: `${url}/users/`,
      data: JSON.stringify(newUser),
      contentType: "application/json",
    })
      .done((res) => {
        console.log("User added!", res);
      })
      .fail(() => {
        console.error(err);
      });
  });
});
