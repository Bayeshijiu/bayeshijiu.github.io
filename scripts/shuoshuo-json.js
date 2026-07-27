hexo.extend.generator.register('shuoshuo-json', function (locals) {
  const shuoshuoData = hexo.locals.get('data').shuoshuo || []
  const list = shuoshuoData.slice(0, 5).map(item => ({
    date: item.date,
    content: item.content,
    tags: item.tags || []
  }))
  return {
    path: 'shuoshuo.json',
    data: JSON.stringify(list)
  }
})
