const img = document.getElementById("door") // imports door id as img

img.addEventListener("click",async(event)=>{ // adds event listener for click on img
    event.target.src = "assets/door_open.png" // changes img src

    await new Promise(r => setTimeout(r, 5000)) // timeout for 5s
    window.location.assign("rooms/room.html") // changes page


})

