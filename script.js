document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.slider img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 5000);

    const scrollToTopButton = document.getElementById('scrollToTopButton');
    window.addEventListener('scroll', function() {
        scrollToTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
    });
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    showImage(currentIndex);
});
document.addEventListener("DOMContentLoaded", function () {
    const albums = document.querySelectorAll(".albums-slider img");
    const albumTitle = document.getElementById("album-title");
    const albumDesc = document.getElementById("album-desc");
    const prevAlbumBtn = document.querySelector(".prev-album");
    const nextAlbumBtn = document.querySelector(".next-album");

    const albumData = [
        {
            title: "Long.Live.ASAP (2013)",
            desc: "Дебютный студийный альбом A$AP Rocky, который включает хиты, такие как 'Goldie' и 'F***in' Problems', с участием звездных артистов."
        },
        {
            title: "At.Long.Last.ASAP (2015)",
            desc: "Второй альбом Rocky продемонстрировал более темное, психоделическое звучание с такими треками, как 'L$D' и 'Everyday'."
        },
        {
            title: "Testing (2018)",
            desc: "Экспериментальный третий альбом с яркими треками, такими как 'Praise the Lord (Da Shine)' и 'A$AP Forever'."
        }
    ];

    let currentAlbum = 0;

    function updateAlbum(index) {
        albums.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
        albumTitle.textContent = albumData[index].title;
        albumDesc.textContent = albumData[index].desc;
    }

    prevAlbumBtn.addEventListener("click", () => {
        currentAlbum = (currentAlbum - 1 + albums.length) % albums.length;
        updateAlbum(currentAlbum);
    });

    nextAlbumBtn.addEventListener("click", () => {
        currentAlbum = (currentAlbum + 1) % albums.length;
        updateAlbum(currentAlbum);
    });

    updateAlbum(currentAlbum); 
});
document.addEventListener("DOMContentLoaded", function () {
    const albums = document.querySelectorAll(".albums-slider img");
    const albumTitle = document.getElementById("album-title");
    const albumDesc = document.getElementById("album-desc");
    const videoPlayer = document.getElementById("video-player");

    const albumData = [
        {
            title: "Long.Live.ASAP (2013)",
            desc: "This debut studio album by A$AP Rocky features hits like 'Goldie' and 'F***in' Problems' with star-studded collaborations.",
            video: "https://player.vimeo.com/video/1035382952?h=a8c57f23f2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            
        },
        {
            title: "At.Long.Last.ASAP (2015)",
            desc: "Rocky's sophomore album showcased a darker, psychedelic sound with tracks like 'L$D' and 'Everyday'.",
            video: "https://player.vimeo.com/video/1035384233?h=beb636124f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            
        },
        {
            title: "Testing (2018)",
            desc: "An experimental third album with standout tracks like 'Praise the Lord (Da Shine)' and 'A$AP Forever'.",
            video: "https://www.youtube.com/embed/5v6JUzxWoGw?si=htT4l3p6xTfZQIZS"
        }
    ];

    function updateAlbum(index) {
        albums.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
        albumTitle.textContent = albumData[index].title;
        albumDesc.textContent = albumData[index].desc;
        videoPlayer.src = albumData[index].video;

        
        document.getElementById("videos").scrollIntoView({ behavior: "smooth" });
    }


    albums.forEach((album, index) => {
        album.addEventListener("click", () => {
            updateAlbum(index);
        });
    });

   
    updateAlbum(0);
});


