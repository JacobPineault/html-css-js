let url = "http://localhost:8080";

let jsonresp;

$().ready(() => {
  console.log("jQuery is ready!");

  $.getJSON(`${url}/users/`)
    .done((res) => {
      jsonresp = res;
      display();
      console.log(res);
    })
    .fail((error) => {
      console.error(error);
    });
});

const display = () => {
  let tbody = $("tbody");
  for (let user of jsonresp.data) {
    let tr = $("<tr></tr>");
    let tdId = $(`<td>${user.id}</td>`);
    let tdUsername = $(`<td>${user.userName}</td>`);
    let tdFullname = $(`<td>${user.firstName} ${user.lastName}</td>`);
    let tdPhonenumber = $(`<td>${user.phoneNumber}</td>`);
    let tdEmail = $(`<td>${user.email}</td>`);
    // let tdReviewer = $(`<td>${user.reviewer ? "Yes" : "No"}</td>`);
    // let tdAdmin = $(`<td>${user.admin ? "Yes" : "No"}</td>`);
    tr.append(tdId);
    tr.append(tdUsername);
    tr.append(tdFullname);
    tr.append(tdPhonenumber);
    tr.append(tdEmail);
    // Shorthand - eliminate the creation of variable
    tr.append($(`<td>${user.reviewer ? "Yes" : "No"}</td>`));
    tr.append($(`<td>${user.admin ? "Yes" : "No"}</td>`));
    tbody.append(tr);
  }
};
