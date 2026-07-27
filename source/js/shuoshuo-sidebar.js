(function () {
  function renderSidebarShuoshuo () {
    var aside = document.getElementById('aside-content')
    if (!aside) return

    if (document.getElementById('card-shuoshuo')) return

    fetch('/shuoshuo.json')
      .then(function (res) { return res.json() })
      .then(function (data) {
        if (!data || !data.length) return

        var items = data.slice(0, 3)

        var card = document.createElement('div')
        card.className = 'card-widget card-shuoshuo'
        card.id = 'card-shuoshuo'

        var headline = '<div class="item-headline"><i class="fas fa-comment-dots"></i><span>最新动态</span></div>'

        var listHtml = '<div class="shuoshuo-sidebar-list">'
        items.forEach(function (item) {
          var date = new Date(item.date)
          var dateStr = date.getFullYear() + '-' +
            String(date.getMonth() + 1).padStart(2, '0') + '-' +
            String(date.getDate()).padStart(2, '0')

          var content = item.content.replace(/\n/g, ' ').trim()
          if (content.length > 80) content = content.substring(0, 80) + '...'

          listHtml += '<div class="shuoshuo-sidebar-item" onclick="window.location.href=\'/shuoshuo/\'">'
          listHtml += '<div class="shuoshuo-sidebar-date"><i class="far fa-clock"></i>' + dateStr + '</div>'
          listHtml += '<div class="shuoshuo-sidebar-content">' + content + '</div>'
          listHtml += '</div>'
        })
        listHtml += '</div>'

        var footer = '<div class="shuoshuo-sidebar-footer"><a href="/shuoshuo/">查看全部 →</a></div>'

        card.innerHTML = headline + listHtml + footer

        var recentPost = aside.querySelector('.card-recent-post')
        if (recentPost && recentPost.parentNode) {
          recentPost.parentNode.insertBefore(card, recentPost)
        } else {
          var sticky = aside.querySelector('.sticky_layout')
          if (sticky) {
            sticky.insertBefore(card, sticky.firstChild)
          } else {
            aside.appendChild(card)
          }
        }
      })
      .catch(function () {})
  }

  renderSidebarShuoshuo()

  document.addEventListener('pjax:complete', renderSidebarShuoshuo)
})()
