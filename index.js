// Import stylesheets
import './style.css'
import liff from "@line/liff"

const body = document.getElementById("body")

//profile Element
const pictureUrl = document.getElementById("pictureUrl")
const userId = document.getElementById("userId")
const displayName = document.getElementById("displayName")
const statusMessage = document.getElementById("statusMessage")
const email = document.getElementById("email")

const btnShare = document.getElementById("btnShare")

async function main () {
  liff.ready.then(() => {
    if(liff.getOS == "android"){
      body.style.backgroundColor = "#888888"
    }
    if(liff.isInClient()){
      getUserProfile()
    }
    btnShare.style.display = "block"
  })

  await liff.init({liffId: "1654917792-7xVpeYNa"})
}
main();

async function getUserProfile() {
  const profile = await liff.getProfile()
  pictureUrl.src = profile.pictureUrl
  userId.innerHTML = "<b>UserId: </b>" + profile.userId
  displayName.innerHTML = "<b>displayName: </b>" + profile.displayName
  statusMessage.innerHTML = "<b>statusMessage: </b>" + profile.statusMessage
  email.innerHTML = "<b>email: </b>" + liff.gerDecodedIDToken().email
}

async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type:"text",
      text:"This msg was shared by LIFF"
    }
  ])
  if(result){
    alert("msg was shared!")
  }else{
    alert("SharedTargetPicker was cancelled by user")
  }
}

// btnShare.onclick = () => {
//   shareMsg()
// }
// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;