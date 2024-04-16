/*点击显示文字和详细图的功能代码*/
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function (e) {
        e.preventDefault();
        const detailImage = document.getElementById('detailImage');
        const detailText = document.getElementById('detailText');
        const detailView = document.getElementById('detailView');

        detailImage.src = this.dataset.detail;
        detailText.textContent = this.dataset.info;
        detailView.style.display = 'block';
    });
});

/*两图自动切换
var flag = true;
            var change = function(){
             var img = document.getElementById("img");
                 if(flag){
                         img.src="zongtu.jpg";
                         flag = false;
                }else{
                         img.src="zongtu2.png";
                         flag = true;
                }
        }
        setInterval(() => {
            change();
        }, 1000);
*/

// 一个关闭详细视图的功能
detailView.addEventListener('click', function() {
    this.style.display = 'none';
});
