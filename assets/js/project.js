let projects = []

function addProject() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let image = document.getElementById('upload-image').files[0];

    image = URL.createObjectURL(image)

    let project = {
        
    title: title,
    content: content,
    image: image,
    author: 'Muhammad Rizzki',
    postedAt: new Date()
    
    }

    projects.push(project)

    renderProject()
}

function renderProject() {
    
    let projectContainer = document.getElementById('kartu')

    projectContainer.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="assets/image/profil.jpg" class="card-img-top" alt="..." style="
        height: 250px; 
        border: 8px solid white;
        border-radius: 20px;">
    <div class="card-body">
        <Span class="card-title" style="font-size: 18px; font-weight: 700;">title</span>
        <p style="color: gray;">durasi: </p>
        <p class="card-text" id="content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="card-icon">
            <i class="fa-brands fa-google-play"></i>
            <i class="fa-brands fa-android"></i>
            <i class="fa-brands fa-java"></i>
        </div>
        <div class="card-button">
        <a href="#" class="btn btn-left">Edit</a>
        <a href="#" class="btn btn-right">Delete</a>
        </div>
    </div>
</div>`

    for (let i = 0; i < projects.length; i++) {
        projectContainer.innerHTML += `<div class="card" style="width: 18rem;">
        <img src=${projects[i].image} class="card-img-top" alt="..." style="
            height: 250px; 
            border: 8px solid white;
            border-radius: 20px;">
        <div class="card-body">
            <a href="project-detail.html" class="card-title" style="font-size: 18px; font-weight: 700; text-decoration: none; color: black;">${projects[i].title}</a href="#">
            <p style="color: gray;">durasi: ${getFullTime(projects[i].postedAt)} | ${projects[i].author} </p>
            <p class="card-text" id="content">${projects[i].content}</p>
            <div class="card-icon">
                <i class="fa-brands fa-google-play"></i>
                <i class="fa-brands fa-android"></i>
                <i class="fa-brands fa-java"></i>
            </div>
            <div class="card-button">
            <a href="#" class="btn btn-left">Edit</a>
            <a href="#" class="btn btn-right">Delete</a>
            </div>
        </div>
    </div> `
        
    } 
}

let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Oktober',
    'November',
    'December'
]

function getFullTime(time) {
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hour = time.getHours()
    let minute = time.getMinutes()

    let fullTime = `${date} ${month[monthIndex] } ${year} ${hour} : ${minute} WIB`

    return   fullTime
}

function getDistanceTime() {



    let distance = end - start //milisecond

    let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000))

    if (dayDistance !=0) {
        return dayDistance + 'Hari'
    } else {
        let hourDistance = Math.floor(distance / (60 * 60 * 1000))
        
        if (hourDistance !=0) {
            return hourDistance + 'Jam'
        } else {
            let minuteDistance = Math.floor(distance / (60 * 1000))

            if (minuteDistance !=0) {
                return minuteDistance + 'Menit'
            } else {
                let secondDistance = Math.floor(distance / 1000)
                
                return secondDistance + 'second Ago'
            }
        }
    }
}


