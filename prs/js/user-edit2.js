let url = "http://localhost:8080";

let user = null;

$().ready(() => {
  console.log("jQuery is ready");
  $("#get").click(() => {
    getUser();
  });
});

const getUser = () => {
  let userId = $("#eid").val();
  userGetByPK(userId);
};

const userGetByPK = (id) => {
  $.getJSON(`${url}/users/${id}`)
    .done((res) => {
      user = res.data;
      display();
      console.debug("JR: ", res);
    })
    .fail((err) => {
      console.error(err);
    });
};

const display = () => {
  $("#eusername").val(user.userName);
  $("#epassword").val(user.password);
  $("#efirstname").val(user.firstName);
  $("#elastname").val(user.lastName);
  $("#ephonenumber").val(user.phoneNumber);
  $("#eemail").val(user.email);
  $("#eisreviewer").prop("checked", user.reviewer);
  $("#eisadmin").prop("checked", user.admin);
};
