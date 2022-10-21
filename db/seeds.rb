# Create Roles
["admin", "staff", "supervisor"].each do |role_name|
  Role.create(name: role_name)
end

Product.create!([{
  title: "Cambue",
  body: "Cambue is a web application that helps small businesses control their costs and plan their revenue. It was built on ideas that came from internal tools.",
  link: "https://www.cambue.com/",
  image: "/images/cambue.png",
},
                 {
  title: "Estimation Poker",
  body: "Estimation Poker is a web and mobile app that we built to help estimate cards in our Scrum Express process. It's a web app that integrates optionally with Trello and allows users to submit their estimations.",
  link: "https://estimationpoker.herokuapp.com/",
  image: "/images/estimation_poker.png",
},
                 {
  title: "Deployem",
  body: "Deployem is a simple Ruby gem that simplifies Rails app deployments to Heroku. It works best with a GitFlow strategy and ensures you don't forget to run your database migrations.",
  link: "https://rubygems.org/gems/deployem",
  image: "/images/deployem.png",
},
                 {
  title: "Career",
  body: "Career is a Rails Engine that supercharges your background jobs. It provides persistent data around your background jobs.",
  link: "https://rubygems.org/gems/career",
  image: "/images/no_image.jpg",

},
                 {
  title: "CNTDWN2",
  body: "CNTDWN2 is an iOS app that allows you to keep track of your upcoming events.",
  link: "https://apps.apple.com/bs/app/cntdwn2/id1448328439",
  image: "/images/countdown.png",
},
                 {
  title: "FigStrap",
  body: "FigStrap is a front-end framework meant to bridge the gap between developers and designers who use Figma.",
  link: "https://github.com/bitesite/figstrap",
  image: "/images/no_image.jpg",

},
                 {
  title: "ReadySetShow",
  body: "ReadySetShow is a setlist manager to simplify your shows.",
  link: "https://apps.apple.com/ca/app/readysetshow/id1567640908",
  image: "/images/rss.png",
},
                 {
  title: "FallowField",
  body: "Fallowfield is an iOS that lets you convert focal lengths of lenses to different cameras.",
  link: "https://apps.apple.com/ca/app/fallowfield/id1211828192",
  image: "/images/fallowfield.png",
},
                 {
  title: "Trello Views",
  body: "A Chrome extension to give you customized views of Trello columns.",
  link: "https://chrome.google.com/webstore/detail/trello-views/ljfoaeaaojcefkmljglbbphcoclnodnm",
  image: "/images/trello_views.png",
}])
