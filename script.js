function addEvent() {
    let eventname = document.getElementById("event-name").value;
    let eventdate = document.getElementById("event-date").value;
    let eventtime = document.getElementById("event-time").value;
    let eventlocation = document.getElementById("event-place").value;

    if (!eventname || !eventdate || !eventtime || !eventlocation) {
        window.alert("Please fill all the fields!");
        return;
    }

    let eventlist = document.getElementById("event-list");

    
    let eventcard = document.createElement("div");
    eventcard.className = "event-card";

    eventcard.innerHTML = `
        <h3>${eventname}</h3>
        <p>${eventdate} at ${eventtime}</p>
        <p>Location: ${eventlocation}</p>
        <button class='delete-btn' onclick='deleteEvent(this)'>Delete Event</button>
    `;

    eventlist.appendChild(eventcard);

    document.getElementById("event-name").value = "";
    document.getElementById("event-date").value = "";
    document.getElementById("event-time").value = "";
    document.getElementById("event-place").value = "";
}

function deleteEvent(button) {
    button.parentElement.remove();
}
