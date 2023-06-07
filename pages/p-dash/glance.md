---
permalink: "/glance/"

#layout: dashing/gridster
layout: dashing/gridstack

# board is 12 column wide by default
# tv = 1920 x 1080 - each widget = 370 x 340
# = 5 cols x 3 rows
# wh = #colm #row
# xy = pos 1-based

title: Demo Dashboard
message: >
  curl -d '{ "auth_token": "YOUR_AUTH_TOKEN", "text": "Hey, Look what I can do!" }' \http://<%=request.host%>:<%=request.port%>/widgets/welcome

dashboard:
  grid: [5,3]
  static: true

  xcomponents:
  -
    gwh: [2,2]
    gxy: [1,1]
    type: 'item 1 is very nice'
  -
    gwh: [4,2]
    gxy: [3,1]
    type: 'item 2 is very wise'
  -
    gwh: [4,1]
    gxy: [1,3]
    type: 'item 3 is naughty and cutest'
  -
    gwh: [2,1]
    gxy: [5,3]
    type: 'item 4 is wonderful so far'

  components:
  -
    gwh: [1,1]
    gxy: [2,1]
    type: 'clock'
    data:
      icon: "clock-o"
  -
    gwh: [1,1]
    gxy: [1,1]
    type: 'image'
    data:
      image: "/assets/kacemay.jpg"
  -
    gwh: [2,1]
    gxy: [3,1]
    type: 'text'
    data:
      id: "welcome"
      title: "Hello"
      text: "This is your shiny new 1080p dashboard."
      moreinfo: "Protip: You can drag the widgets around!"
  -
    gwh: [1,1]
    gxy: [2,2]
    type: 'meter'
    data:
      id: "synergy"
      title: "Synergy"
      min: "0"
      max: "100"
  -
    gwh: [1,1]
    gxy: [3,2]
    type: 'meter'
    data:
      id: "synergy"
      moreinfo: "In sync with my neighbour!"
      title: "Synergy"
      min: "0"
      max: "100"
  -
    gwh: [1,2]
    gxy: [1,2]
    type: 'list'
    data:
      id: "buzzwords"
      unordered: "true"
      title: "Buzzwords"
      moreinfo: "# of times said around the office"
  -
    gwh: [1,1]
    gxy: [5,1]
    type: 'number'
    data:
      id: "karma"
      title: "Karma"
      bgcolor: "#96bf48"
      icon: "heart"
      junk2: i(class="fa fa-heart icon-background"
  -
    gwh: [2,2]
    gxy: [4,2]
    type: 'graph'
    data:
      id: "convergence"
      title: "Convergence"
      bgcolor: "#47bbb3"
  -
    gwh: [2,1]
    gxy: [2,3]
    type: 'comments'
    data:
      id: "twitter_mentions"
      moreinfo: "Tweets tagged with #todayilearned"
      bgcolor: "#ff9618"
      icon: "twitter"
      junk2: i(class="fa fa-twitter icon-background")

---
