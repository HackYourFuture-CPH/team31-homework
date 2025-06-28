const friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }];

  const whosOnline = (friends) => {
      const friendsStatus = {
        online: [],
        offline: [],
        away: []
      }

          for (let i=0; i<friends.length; i++){
            const friend = friends[i];
            if(friend.status === 'online' && friend.lastActivity <= 10){
              friendsStatus.online.push(friend.username)
          } else if(friend.status === 'offline'){
            friendsStatus.offline.push(friend.username)
          } else if(friend.status === 'online' && friend.lastActivity > 10){
            friendsStatus.away.push(friend.username)
          }
      }
      if (!friendsStatus.online.length){
        delete friendsStatus.online
      }
      if (!friendsStatus.offline.length){
        delete friendsStatus.offline
      }
      if (!friendsStatus.away.length){
        delete friendsStatus.away
      }

      return friendsStatus
    } 

  console.log(whosOnline(friends));