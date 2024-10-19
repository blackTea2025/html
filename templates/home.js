document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.image-container img');
    var currentIndex = 0;
    var intervalId;

    // 设置所有图片的初始透明度为0
    images.forEach(function(image) {
        image.style.opacity = '0';
    }
    );

    // 显示指定索引的图片并设置透明度渐变
    function showImage(index) {
        // 获取当前图片元素
        var currentImage = images[currentIndex];
        // 获取新图片元素
        var newImage = images[index];
        
        // 将当前显示的图片透明度设置为0
        currentImage.style.opacity = '0';
        // 显示新的图片
        newImage.style.display = 'block';
        
        // 渐变透明度
        var opacity = 0;
        var opacityInterval = setInterval(function() {
            opacity += 0.5; // 每次透明度增加
            newImage.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(opacityInterval); // 清除设置透明度的定时器
                // 更新当前索引
                currentIndex = index;
            }
        }, 10); // (时间)增加一次透明度
    }

    // 切换到下一张图片
    function nextImage() {
        var nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
        clearInterval(intervalId);
        startSlideshow();
    }

    // 切换到上一张图片
    function prevImage() {
        var prevIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(prevIndex);
        clearInterval(intervalId);
        startSlideshow();
    }

    // 添加左箭头点击事件监听器
    document.querySelector('.arrow.left').addEventListener('click', prevImage);

    // 添加右箭头点击事件监听器
    document.querySelector('.arrow.right').addEventListener('click', nextImage);

    // 启动自动切换
    function startSlideshow() {
        intervalId = setInterval(nextImage, 5000);
    }

    // 显示第一张图片并启动自动切换
    showImage(0);
    startSlideshow();
});

document.addEventListener("DOMContentLoaded", function () {
    var courses = document.querySelectorAll('.course');

    courses.forEach(function (course) {
        // 添加鼠标移入移出事件
        course.addEventListener('mouseover', function () {
            course.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.2)";
        });

        course.addEventListener('mouseout', function () {
            course.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });

        // 为课程添加点击事件，弹出详细信息
        course.addEventListener('click', function () {
            alert("更多课程详情即将上线！");
        });
    });

    // 用户评价区添加淡入动画效果
    var testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(function (testimonial, index) {
        testimonial.style.opacity = 0;
        testimonial.style.transition = "opacity 1s ease";
        setTimeout(function () {
            testimonial.style.opacity = 1;
        }, index * 500);  // 每个评价延迟0.5秒淡入
    });
});
