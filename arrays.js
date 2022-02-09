//la méthode ns permet de chercher un élément unique dans notre tableau et de retouner cet élément

const videos = ["Apprendre Javascript", "Apprendre le Piano", "Vidéo de Football"];

const search = videos.find(function(bruno){
    return bruno.includes("Football")
})

console.log(search);//m'affiche Vidéo de Football 