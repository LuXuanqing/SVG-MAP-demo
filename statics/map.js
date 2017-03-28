// close the panel
function closeAllPanel() {
  $('.panel-box').slideUp()
  // 清空搜索栏文字
  $('#search').attr('value','')
}

// 点击叉叉图标收回panel
var closeBtn = $('#close-btn')
closeBtn.click(function() {
  closeAllPanel()
  closeBtn.fadeOut()
})

// 灯-点击事件
$('#poes>g').click(function() {
  closeAllPanel()
  $('#close-btn').fadeIn()
  $('#search').attr('value', 'POE智能灯')
  $('.panel-poe').slideDown()
})

// 摄像头点击事件
$('#cameras>g').click(function() {
  closeAllPanel()
  $('#close-btn').fadeIn()
  $('#search').attr('value', '监控摄像头')
  $('.panel-camera').slideDown()
})

// 区域点击事件
$('#areas>polygon').click(function() {
  closeAllPanel()
  $('#close-btn').fadeIn()
  $('#search').attr('value', '口腔综合科')
  $('.panel-area').slideDown()
})

// 显示隐藏灯图标
$('#show-poes').click(function() {
  console.log('poe')
  $('#poes').toggle()
})
// 显示隐藏摄像头
$('#show-cameras').click(function() {
  $('#cameras').toggle()
})
// 显示隐藏区域名称
$('#show-area-names').click(function() {
  $('#area-names').toggle()
})
