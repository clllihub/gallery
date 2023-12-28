// JavaScript 代码
// 图片列表数组
var images = [
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/24.jpg",
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/23.jpg",
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/3.jpg",
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/23.jpg",
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/29.jpg",
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/19.jpg",
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/30.jpg",
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/49.jpg",
    "https://ossoososssn.oss-cn-beijing.aliyuncs.com/images/life/photo/1/50.jpg",

    // 可以继续添加更多图片的 URL
];

var currentIndex = 0; // 当前显示的图片索引

// 切换图片的函数
function changeImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("image").src = images[currentIndex];
}

// 设置定时器，每隔1.4秒切换一次图片
setInterval(changeImage, 2300);
// 利用用户与页面的第一次交互来播放音乐
function playMusic() {
    var audio = document.getElementById('background-music');
    // 如果音乐尚未播放，则尝试播放音乐
    if (audio.paused) {
        audio.play();
    }
    // 移除事件监听器，以便只尝试播放音乐一次
    document.removeEventListener('click', playMusic);
}

// 添加事件监听器到document，当用户首次点击时尝试播放音乐
document.addEventListener('click', playMusic);