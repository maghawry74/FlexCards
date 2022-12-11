$(function () {
  let imgs = $("img")
  imgs.click(function () {
    imgs.each((para) => {
      $(imgs.eq(para)).css({ "flex-grow": "1", filter: "blur(1px)" })
    })
    $(this).css({ "flex-grow": "10", filter: "blur(0)" })
  })
})
