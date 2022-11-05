const video = document.querySelector('video')
const playPause = document.querySelector('.play-pause')

// play pause control
function togglePlayPause(){
    if(video.paused){
        playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`
        video.play()
    } else{
        playPause.innerHTML = `<i class="fa-solid fa-play"></i>`
        video.pause()
    }
}

video.addEventListener('click', ()=>{
    togglePlayPause()
})

playPause.addEventListener('click', ()=>{
    togglePlayPause()
})

// volume control
const volumeIcon = document.querySelector('.volume-icon')
const volumeProgress = document.querySelector('.volume-progress')

function toggleVolumeIcon(){
    
    let isMute = volumeIcon.getAttribute('data-mute')

    if (isMute === 'true') {
        volumeIcon.setAttribute('data-mute','false')
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
        video.volume = volumeProgress.value
    } else {
        volumeIcon.setAttribute('data-mute','true')
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
        video.volume = 0
    }
}

volumeProgress.addEventListener('input', ()=>{
    let rangeVolume = volumeProgress.value
    video.volume = rangeVolume

    if (rangeVolume < 0.1) {
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    } else if(rangeVolume< 0.3) {
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-low"></i>`
    } else {
        volumeIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
    }
})

volumeIcon.addEventListener('click', ()=>{
    toggleVolumeIcon()
})

// fullscreen control
const fullscreen = document.querySelector('.fullscreen')
const videoWrapper = document.querySelector('.video-wrapper')

function toggleZoom(){
    let zoom = fullscreen.getAttribute('data-zoom')
    if (zoom === 'true') {
        fullscreen.setAttribute('data-zoom','false')
        document.exitFullscreen()
        fullscreen.innerHTML = `<i class="fa-solid fa-compress"></i>`
    } else {
        fullscreen.setAttribute('data-zoom','true')
        video.requestFullscreen()
        fullscreen.innerHTML = `<i class="fa-solid fa-expand"></i>`
    }
}

fullscreen.addEventListener('click', ()=>{
    toggleZoom()
})

// time progress control
const inputProgressVideo = document.querySelector('.input-progress-video')
const current = document.querySelector('.current')
const duration = document.querySelector('.duration')

video.addEventListener('timeupdate', ()=>{

    const tp = (video.currentTime/video.duration)*100
    inputProgressVideo.value = tp
    inputProgressVideo.style.setProperty('--seek-before-width', `${tp}%`);
    current.textContent = convertTime(Math.round(video.currentTime))
    duration.textContent = convertTime(Math.round(video.duration))

})

inputProgressVideo.addEventListener('input', ()=>{

    video.currentTime = (video.duration /100)*inputProgressVideo.value

})

const convertTime = (seconds) =>{
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)
    min = min<10 ? '0'+min : min
    sec = sec<10 ? '0'+sec : sec

    return `${min}:${sec}`
        
}

// time hover control
const timeHover = document.querySelector('.time-hover')
inputProgressVideo.addEventListener('mousemove', (e)=>{

    let time = (video.duration/100)*(e.offsetX/e.target.clientWidth)*100
    timeHover.textContent = convertTime(Math.round(time))
    timeHover.style.display = 'block'
    timeHover.style.left = (e.offsetX/e.target.clientWidth)*100 + '%'
})

inputProgressVideo.addEventListener('mouseout', (e)=>{

    timeHover.style.display = 'none'
    
})