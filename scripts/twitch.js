
// load the list on page load

// make the list smoothly glide populate downwards automatically when it has loaded

// sort buttons. have an arrow pointing down populate when clicked on

// when a channel online, have a little description of the current content, and a picture symbol to indcate that they are online

// have search bar, where user can type a term, and the list automatically changes as more is typed
//instant text search

//have some sort of highlight for the buttons when clicked.


// mobile first design
//minimal jquery

//a picture for each channel is populated, in circle, to left
//on load, check if each is broadcasting or not
// if broadcasting, change a symbol to indicate that it is (green circle)
// if broadcasting, populate a small description about what is playing
    //make it so the description ends with .. and space, no matter how big the window

// click on any channel on list, be be taken by link to that channel on twitch.tc


//API calls
//https://wind-bow.gomix.me/twitch-api/streams/hearthstonefr



//GET LOGO
//https://wind-bow.gomix.me/twitch-api/users/freecodecamp
//{"display_name":"FreeCodeCamp","_id":79776140,"name":"freecodecamp","type":"user","bio":"We help you learn to code, then practice by building projects for nonprofits. Learn Full-stack JavaScript, build a portfolio, and get a coding job by joining our open source community at https://freecodecamp.com","created_at":"2015-01-14T03:36:47Z","updated_at":"2017-02-26T16:32:27Z","logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png","_links":{"self":"https://api.twitch.tv/kraken/users/freecodecamp"}}



var channelArray = ["ESL_SC2", "freecodecamp", "OgamingSC2", "cretetion", "habathcx", "RobotCaleb", "noobs2ninjas","hearthstonefr"]; //8];//

var counterUser = 1;
var counterStatus = 1;

//POPULATE LOGO and NAME

var populateLogo = function(jsonObj) {
    var logoURL = jsonObj.logo;
    var name = jsonObj.display_name;
    //var bio = jsonObj.bio; $('#ch-desc'+counterUser).text(bio);
    var callName = jsonObj.name;
    
    $('#ch-logo'+counterUser).css('background','url("'+logoURL+'")');
    $('#ch-logo'+counterUser).css('background-size','cover');
    $('#ch-logo'+counterUser).css('background-position','center');
    
    $('#ch-title'+counterUser).text(name); 
    counterUser++;
}

//POPULATE STATUS and DESC
var populateStatus = function(jsonObj) {
    var stream = jsonObj.stream;
    var link = jsonObj._links.self;
    
    var viewers = jsonObj.stream.viewers; 
    //could be cool to use. maybe in the circle
    
    if (stream != null) {
        $('#ch-status'+counterStatus).css('background-color','green');
        
        var status = jsonObj.stream.channel.status;
        $('#ch-desc'+counterStatus).text(status);
        
        $('.test-p').text(status); //TEST
    }
    counterStatus++;
}

// PAGE LOAD
for (let i=1; i<channelArray.length+1; i++) {
    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+channelArray[i-1], populateLogo);
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+channelArray[i-1], populateStatus); 
}

/*

// Now using `then`
function getLogo(vUrl){
  return $.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+channelArray[i]).then(function(jsonObj){
    return {
      logoURL:jsonObj.jsonObj.logo,
      name:jsonObj.display_name
    }
  });
}

//and in your call will listen for the custom deferred's done
getLogo('the_vurl_').then(function(returndata){
  //received data!
});

//OR 

function getThumbnail(vUrl,callback) {
    $.getJSON("http://api.embed.ly/1/oembed?key=:key&url="+vurl,function(returndata){
        callback(returndata);
    });
}
getThumbnail('the_vurl_',function(returndata){
    //received data!
});
*/
    

    






                    

