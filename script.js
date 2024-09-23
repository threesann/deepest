const img = document.getElementById("door") // imports door id as img
const open = document.getElementById("dooropen")
const close = document.getElementById("doorclose")


img.addEventListener("click",async(event)=>{ // adds event listener for click on img
    event.target.src = "assets/door_open.png" // changes img src
    open.play()
    await new Promise(r => setTimeout(r, 3000)) // timeout for 2s
    img.style.visibility = 'hidden';
    close.play()
    await new Promise(r => setTimeout(r, 5000)) // timeout for 2s
    window.location.assign("rooms/room.html") // changes page


})