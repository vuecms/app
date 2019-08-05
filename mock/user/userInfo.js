module.exports = {
  api: '/api/v1.0/user/getUserInfo',
  response: function (req, res) {
    res.json({
      'dept': '航空产品研发部',
      'email': 'jjfeng@travelsky.com',
      'name': '江俊丰',
      'no': '090558',
      'pic': '/empImg/3c7d777ac26589c8ccdafae16c6393b2.gif'
    })
  }
}
