
// Milestone 1
// creiamo il array di oggetti
const posts=[
    {
        idPost:10,
        
        pictureProfile:'https://media.istockphoto.com/photos/elephants-fear-of-mice-picture-id155439372?b=1&k=20&m=155439372&s=170667a&w=0&h=4BMK9d2lxIvBFNRDx-T_JproEaxG2O1P38XudI2Wfkg=',
        
        date:'01-11-2022',
        
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        
        image: 'https://images.unsplash.com/photo-1641157141085-8454fbc33f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
        
        likes: 0,
    }
];


//Milestone 2
// stampiamo i post nel feed
// prima prendiamo dal HTML il container dove saranno stampati i post

const containerPosts = document.getElementById('container');

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    containerPosts.innerHTML+= `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.pictureProfile}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">Phil Mangione</div>
                    <div class="post-meta__time">${post.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${post.text}</div>
        <div class="post__image">
            <img src="${post.image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${post.idPost}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
}

// Milestone 3
// il colore del tasto 'Mi Piace' cambia colore appena viene cliccato

const likeButton = document.querySelector('.js-like-button');
likeButton.addEventListener('click', function(){
    
})