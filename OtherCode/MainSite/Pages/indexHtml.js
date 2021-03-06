let userGroups;
	let user = class {
		constructor(username, userId, loginStatus) {
			this.username = username;
			this.userGroups = []
			this.userLinks = []
			this.otherUserdata;
			this.userGroupsId = []
		}

	};
	let currUser = new user("", "", false)
	function getUserData() {
		
		$.ajax({
			url: 'http://localhost:3000/userData',
			type: 'GET',
			async: false,
			dataType: 'json',
			success: function (data) {
			
				userGroups = data[0]
				// location.href="/";
				currUser.username = userGroups.name

				currUser.loginStatus = true;
				console.log(currUser)

			},
			error: function (data) {
				console.log(data)
				console.log("error")
			}
		});

	}
	function getUserGroups() {

		let stuffToReturn
		$.ajax({
			url: 'http://localhost:3000/userGroups',
			type: 'GET',
			async: false,
			dataType: 'json',
			success: function (data) {
			

				for (let i in data) {
					currUser.userGroups[i] = data[i].groupName
					currUser.userGroupsId[i] = data[i]._id
					let arrayOfLinks = data[i].links
					currUser.userLinks[i] = arrayOfLinks

				}
				stuffToReturn = data;
				// location.href="/";
			},
			error: function (data) {
				console.log(data)
			}
		});
		return stuffToReturn;

	}
	function displayUserGroups() {
		let groupListScroll = document.createElement("DIV")
		let groupInfo = document.createElement("DIV")
		groupListScroll.id = "group-scroll-box"
		groupInfo.id = "info-box"

		document.getElementById("groups").appendChild(groupListScroll)
		document.getElementById("groups").appendChild(groupInfo)

		for (let i in currUser.userGroups) {
			let appendGroupName = document.createElement("P")
			appendGroupName.innerHTML = currUser.userGroups[i]
			appendGroupName.className = "groupName"
			appendGroupName.id = currUser.userGroupsId[i]
		
			document.getElementById("group-scroll-box").append(appendGroupName)
			document.getElementById(appendGroupName.id).addEventListener("click", function(){
				document.getElementById("info-box").innerHTML = ""
						let arrayToSearch = currUser.userGroupsId.indexOf(appendGroupName.id)
					
						for(let j in currUser.userLinks[arrayToSearch]){
						let appendLink = document.createElement("P")
						appendLink.className = "linkName"
							appendLink.innerHTML = currUser.userLinks[arrayToSearch][j].link
							document.getElementById("info-box").appendChild(appendLink)
						}
				
			})
			
		}
	}
	function displayHomeData(){
	
		
		let createGroup = document.createElement("div")
		createGroup.id = "group-input"
		createGroup.innerHTML = "<input id = \"group-name\" placeholder = \"Enter the groups name!\"> <button id = \"submit-group\">Submit</button>"
		document.getElementById("groups").appendChild(createGroup)
		let linksAddedDiv = document.createElement("div")
		linksAddedDiv.id = "links-add-div"
		document.getElementById("groups").appendChild(linksAddedDiv)

		let linksAdded = document.createElement("P")
		let numLinks = 0
		for(let i in currUser.userLinks){
			numLinks = numLinks + currUser.userLinks[i].length
		}
		console.log(numLinks)
		linksAdded.innerHTML = "<span class = \"home-info\">This month you have added </span>"+numLinks +" links"+"<br>"+"<span class = \"home-info\">This month you have been a member of  </span>"+currUser.userLinks.length +" groups"
		console.log(currUser.userLinks)
		document.getElementById("links-add-div").appendChild(linksAdded)
		document.getElementById("submit-group").onclick = function(){
				submitNewGroup(document.getElementById("group-name").value)
		}
	}
	function updateUserAccount(groupId){
		let data = {
			"groupId":groupId
		}
		$.ajax({
			url: 'http://localhost:3000/updateUserGroups',
			type: 'post',
			async: false,
			data:data,
			dataType: 'json',
			success:function(data){
				console.log("yay!")

			}, 
			error:function(data){

			}
		})
	}
	
	function submitNewGroup(newGroupName){		
		let data = {
			'groupName':newGroupName
		}
		
		
		console.log("showing")
		$.ajax({
			url: 'http://localhost:3000/addGroup',
			type: 'post',
			async: false,
			data:data,
			dataType: 'json',
			success:function(data){
			
				updateUserAccount(data.groupId)
				getUserData()
				getUserGroups()

			}, 
			error:function(data){

			}
		})
	}
	getUserData()
	getUserGroups()

	if (!currUser.loginStatus) {
		document.getElementById("slide-item-4").onclick = function () {
			location.href = "/login"
		}
	} else {
		document.getElementById("slide-item-4").onclick = function () {
			location.href = "/logout"
		}
		document.getElementById("login-logout").innerHTML = "Logout"
	}
	if(currUser.loginStatus){
	displayHomeData()
	}
	
	console.log(currUser.loginStatus)

	if (currUser.loginStatus) {
		document.getElementById("slide-item-2").onclick = function () {
			document.getElementById("groups").innerHTML = ""
			
			displayUserGroups()
		}

		document.getElementById("slide-item-1").onclick = function () {
			document.getElementById("groups").innerHTML = ""
			displayHomeData()
			
		}
		

		

	}




