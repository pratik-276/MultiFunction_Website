

var http = new XMLHttpRequest();
http.open('GET','http://5d76bf96515d1a0014085cf9.mockapi.io/video',true)
http.onload = function() {
    var data = JSON.parse(this.response);
    var videoPlayer = document.getElementById('video-player');
    var videoTitle = document.getElementById('video-title');
    var videoDescription = document.getElementById('video-description');
    var viewsCount = document.getElementById('views-count');
    var thumb = document.getElementsByClassName('thumbnail');
    var thumbnail = [];
    for(var i=0;i<6;i++){
        thumbnail.push(thumb[i]);
    }
    thumbnail.map((item,index) => {
        item.addEventListener('click', function(){
            videoPlayer.src = "https://player.vimeo.com/video/" + data[index].vimeoId;
            videoTitle.innerHTML = data[index].title;
            videoDescription.innerHTML = data[index].description;
            viewsCount.innerHTML = data[index].views;
        });
    });
}
http.send();