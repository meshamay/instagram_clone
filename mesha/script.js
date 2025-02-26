const posts = [
    {
        name:"Connor Botts",
        location:"United State",
        icon:"img/alone_is_everything.png.jpg",
        avatar:"avatar/connor-botts.png.jpg",
        like:"4",
        comment:"naman",

    },
    {
        name:"Omid Armin",
        location:"London U.K",
        icon:"img/edsa_traffic.png.jpg",
        avatar:"avatar/omid-armin.png.jpg",
        like:"9",
        comment:"e naman",


    },
    {
        name:"Richard Jaimes.png.jpg",
        location:"Mandaluyong City ",
        icon:"img/creativity.png.jpg",
        avatar:"avatar/richard-jaimes.png.jpg",
        like:"7",
        comment:"ate naman",


    }
]

const section=document.getElementById("section-content")

function pushPost(){
    posts.push({
        name:"Mesha  barcebas",
        location:"Mandaluyong ",
        icon:"",
        avatar:"",
        like:"7",
        comment:"ate naman",

    }
)}

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
                            <h1 id="heart-button">${posts[i].like}</h1>
        <p class="comment-button">${posts[i].comment}</p>
                </div>
            </div>
            
        `
    }
}
renderImgs()