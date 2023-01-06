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

Question.create!([{
  title: "How do you charge and how much do you charge?",
  content: "We are a time-based billing company which basically means we charge you per hour that we work on your project. Although this changes from time to time, our current rate is $150.00/hour + applicable taxes. We typically work on your project and send you a bill at the end of the month.",
}, {
  title: "I don't have a lot of budget, will you take my project on?",
  content: "While there are a lot of factors that determine whether we will take a project on or not, low budget projects are not typically something we shy away from. Yes we do recommend having a good starting budget, but that being said we charge per hour and we will try to make something work with the budget you have. Come tallk to us - don't worry, you won't offend us. We've taking on projects as low as $500.00 to as high as hundreds of thousands of dollars.",
}, {
  title: "I know you charge per hour, but how much does it cost to develop a web application or a mobile application?",
  content: "It's a great question. As mentioned projects vary in cost by quite a bit depending on a lot of factors. For new projects, we like to start small with a minimum viable product - a simple, small version of what you're envisioning and build up from there incrementally. So how much would an MVP cost? Well that also depends on a lot of factors but for web applications, we say $5,000.00 to $10,000.00 is a good starting budget and for mobile applications, $10,000.00 to $15,000.00 is a good starting budget. Scared you don't have that much money? Not a problem, come and talk to us anyway. You might be surprised how far your money will go.",

}, {
  title: "Do you do Mobile Application Development? What about Web Design and Development?",
  content: "Yes we do! We call ourselves a Custom Software company because our skills span across multiple platforms. We can develop desktop applications, mobile applications, and web applications.",
}, {
  title: "How concrete should my project be when I come and talk to BiteSite?",
  content: "To be honest, it doesn't really matter. As long as you know that you have a problem that you want to solve and you think software might be a good route to solve it, come and talk to us. We'll help you decide before you sign anything whether we'd be a good fit and what the solution could look like. A lot of the times we'll even recommend better solutions than working with us.",
}, {
  title: "Do you only take customers in Ottawa, Canada?",
  content: "No. In fact some of our biggest customers are not in the Ottawa area. The type of software that we build is very conducive to working remotely.",
}, {
  title: "How often do I have to meet with BiteSite during my project?",
  content: "This is something we determine based on the project. Our biggest clients typically have a standing meeting once every week. Our smaller clients typically meet with us on a on-demand basis.",
}])
