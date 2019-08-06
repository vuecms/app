module.exports = {
  api: '/api/v1.0/user/getUserInfo',
  response: function (req, res) {
    res.json({
      'dept': '产品研发部',
      'email': 'andy@tt.com',
      'name': 'andy',
      'no': 'A06988',
      'pic': '/empImg/3c7d777ac26589c8ccdafae16c6393b2.gif'
    })
  }
}
