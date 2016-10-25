/*1.*/

var dataSkills = _.map(data,"skills");
dataSkills = ((_.sortBy(_.uniq(_.flattenDeep(dataSkills)), function(o) { return o.toLowerCase(); })));
console.log(dataSkills);


/*2.*/

var dataNames = _.flatMap(_.sortBy(data, function (o) { return o.friends.length; }), 'name');
console.log(dataNames);

/*3.*/
var friends = _.uniq(_.map(_.flattenDeep(_.map(data, 'friends')), 'name'));
console.log(friends);
