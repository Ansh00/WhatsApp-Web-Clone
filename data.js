let user = {
	id: 0,
	name: "Anshul",
	number: "+91 91111 40000",
	pic: "images/Anshul Profile.jpg 	"
};

let contactList = [
	{
		id: 0,
		name: "Anshul",
		number: "+91 91111 40000",
		pic: "images/Anshul Profile.jpg",
		lastSeen: "Apr 29 2021 17:58:02"
	},
	{
		id: 1,
		name: "Anirudh",
		number: "+91 98232 37261",
		pic: "images/Anirudh profile.jpg",
		lastSeen: "Apr 28 2021 22:18:21"
	},
	{
		id: 2,
		name: "Richa",
		number: "+91 72631 2937",
		pic: "images/Richa.jpg",
		lastSeen: "May 13 2021 19:23:16"
	},
	{
		id: 3,
		name: "Atul",
		number: "+91 98232 63547",
		pic: "images/Atul profile.jpg",
		lastSeen: "May 13 2021 11:16:42"
	},
	{
		id: 4,
		name: "Anjali",
		number: "+91 72781 38213",
		pic: "images/Anjali profile.jpg",
		lastSeen: "May 13 2021 17:28:10"
	}
];

let groupList = [
	{
		id: 1,
		name: "Web Dev Buddies",
		members: [0, 1, 3],
		pic: "images/Web Dev Buddy.jpg"
	}
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
	{
		id: 0,
		sender: 2,
		body: "Hii",
		time: "May 12, 2021 13:21:03",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 4,
		body: "Hii",
		time: "May 12, 2021 13:21:03",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 4,
		body: "Fine and you?",
		time: "May 13, 2021 23:21:03",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},

	{
		id: 1,
		sender: 0,
		body: "Hii",
		time: "May 12, 2021 13:22:03",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	
	{
		id: 2,
		sender: 0,
		body: "how you doin'?",
		time: "May 12, 2021 18:15:23",
		status: 2,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 3,
		sender: 3,
		body: "i'm fine...wat abt u?",
		time: "May 12, 2021 21:05:11",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	
	{
		id: 5,
		sender: 3,
		body: "anyone online?",
		time: "May 12, 2021 18:20:11",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 6,
		sender: 1,
		body: "have you seen Godzilla vs Kong?",
		time: "May 12, 2021 17:23:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 7,
		sender: 0,
		body: "are you going to the party tonight?",
		time: "May 12, 2021 14:11:21",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 8,
		sender: 2,
		body: "no, i've some work to do..are you?",
		time: "May 13, 2021 08:22:12",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 9,
		sender: 0,
		body: "yup",
		time: "May 13, 2021 23:31:23",
		status: 1,
		recvId: 2,
		recvIsGroup: false
	},
	
	{
		id: 10,
		sender: 0,
		body: "Hii",
		time: "May 13, 2021 22:41:55",
		status: 2,
		recvId: 4,
		recvIsGroup: false
	},
	
	{
		id: 10,
		sender: 0,
		body: "How's You?",
		time: "May 13, 2021 22:41:55",
		status: 2,
		recvId: 4,
		recvIsGroup: false
	},
	{
		id: 11,
		sender: 1,
		body: "yeah, i'm online",
		time: "May 14 2021 17:10:21",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	}
];

let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};