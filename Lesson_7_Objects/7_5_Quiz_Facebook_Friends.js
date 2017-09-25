/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Anthony",
    friends: 2,
    messages: ["hi!", "bye", "good morning!", "good night!"],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
        return message;
    },
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1);
        return index;
    },
    addFriend: function (addF) {
        facebookProfile.friends ++;
        return addF;
    },
    removeFriend: function (removeF) {
        facebookProfile.friends --;
        return removeF;
    },
};
console.log(facebookProfile.messages);
console.log(facebookProfile.deleteMessage(0));
console.log(facebookProfile.messages);