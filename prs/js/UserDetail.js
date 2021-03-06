let url = "http://localhost:8080";

$().ready(() => {
  //console.log("jQuery is ready!");
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
  $("#efullname").text(user.firstName + " " + user.lastName);
  $("#ephonenumber").text(user.phoneNumber);
  $("#eemail").text(user.email);
  $("#ereviewer").text(user.reviewer);
  $("#eadmin").text(user.admin);
};
