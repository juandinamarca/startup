var listBlockedUsers = Backbone.Collection.extend({
	model: tweet,
});

var listp = new listBlockedUsers();

listp.add([{'id':8105922,'name':'@Clarin'},{'id':560669494,'name':'@JoseMaríaListorti'}]);
