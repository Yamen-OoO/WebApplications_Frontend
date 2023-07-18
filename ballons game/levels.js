let Levels = {
    easy:{
        railPoints:7,
        BoxMovmentSpeed:1000,
        BoxMovmentNumber:110,
        BallonSpeed:{
            max:100,
            min:50
        },
        MusicUrl:"/sounds/gamebackgroundmusic.mp3",
        BackgroundImg:"/imgs/land2.jpg",
        lifesNumber:3
    },

    medium:{
        railPoints:10,
        BoxMovmentSpeed:700,
        BoxMovmentNumber:150,
        BallonSpeed:{
            max:100,
            min:50
        },
        MusicUrl:"/sounds/medium.mp3",
        BackgroundImg:"/imgs/land4.jpg",
        lifesNumber:2
    },

    hard:{
        railPoints:12,
        BoxMovmentSpeed:500,
        BoxMovmentNumber:200,
        BallonSpeed:{
            max:70,
            min:50
        },
        MusicUrl:"/sounds/background music.mp3",
        BackgroundImg:"/imgs/land3.jpg",
        lifesNumber:1
    },
}
export default Levels