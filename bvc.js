function Registration()
{
var name =
document.forms.RegForm.Name.value;
var email =
document.forms.RegForm.EMail.value;
var phone =
document.forms.RegForm.MobileNumber.value;
var gender =
document.forms.RegForm.Gender.value;
var favoritesports =
document.forms.RegForm.FavoriteSports.value;
// Javascript reGex for Name validation
var regName = /\d+$/g;
//Javascript reGex for Email Validation.
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
// Javascript reGex for Phone Number validation.
var regPhone=/^\d{10}$/;
if (name == "" || regName.test(name))
 {
window.alert("Please enter your name properly.");
name.focus();
return false;
}
if (email == "" || !regEmail.test(email)) {
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if (phone == "" || !regPhone.test(phone))

{
alert("Please enter valid Mobile Number.");
phone.focus();
return false;
}
if (gender == "")
{
alert("Please enter your Gender");
gender.focus();
return false;
}
if(gender.length <4){
alert("Gender should be atleast 4 character long");
gender.focus();
return false;
}
if (favoritesports == "")
{
window.alert("Please enter your Favorite Sports.");
favoritesports.focus();
return false;
}
}