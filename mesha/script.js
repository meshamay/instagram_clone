const section = document.getElementById("section-content");

const modalPopUp = document.getElementById("form-container");
const plusBtn = document.getElementById("plus-button1").addEventListener('click',openModal);
const cancelButton = document.getElementById("cancel-btn").addEventListener('click',closeModal);
const addButton =document.getElementById("post-btn").addEventListener('click',addPost );

const inputLocation = document.getElementById("location");
const inputLink = document.getElementById("image-link");


const posts = [
    {
        name:"Connor Botts",
        location:"United State",
        icon:"img/alone_is_everything.png.jpg",
        avatar:"avatar/connor-botts.png.jpg",
        like:"8000",
        User:"girliepops_000",
        comment:"naman",

    },
    {
        name:"Omid Armin",
        location:"London U.K",
        icon:"img/edsa_traffic.png.jpg",
        avatar:"avatar/omid-armin.png.jpg",
        like:"9000",
        comment:"e naman",


    },
    {
        name:"Richard Jaimes.png.jpg",
        location:"Mandaluyong City ",
        icon:"img/creativity.png.jpg",
        avatar:"avatar/richard-jaimes.png.jpg",
        like:"7000",
        comment:"ate naman",


    }
]



function renderImgs(){
    for (let i = 0; i <posts.length; i++){
        let renderPosts = posts[i]

        section.innerHTML += `
        <section id="section-content">
   <div class="post" id="${posts[i].post}">
                <div class="post-info">
                    <img class="profile-pic" src="${posts[i].avatar}">
                    <div class="user-details">
                        <p class="username">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                <img class="post-image" src="${posts[i].icon}">
                
              <div class="like-comment-wrapper">
              <img class="btn" id="icon-heart" src="icon/icon-heart.png">
                    <img class="btn" id="icon-comment" src="icon/icon-comment.png" >
                    <img class="btn" id="icon-dm" src="icon/icon-dm.png" >
                        <div id="usercomments"
                        <p id=user-name> ${posts[i].User}</p>
                        <p id="comment-button">${posts[i].comment}</p>
                        </div>
                </div>
            </div>
            
        `
    }
}
renderImgs()

function closeModal(){
    modalPopUp.style.display = "none";
}

function openModal(){
    modalPopUp.style.display = "flex";
}

function addPost(){
    console.log("addPost")
    const inputLocationValue = inputLocation.value
    const inputLinkValue = inputLink.value

    const createPost = {
        name:"Connor Botts",
        location:inputLocationValue,
        icon:inputLinkValue,
        avatar:"avatar/connor-botts.png.jpg",
        like:"8000",
        comment:"naman",

    }
    posts.unshift(createPost)

    section.innerHTML = ``

    closeModal();

    renderImgs();
}