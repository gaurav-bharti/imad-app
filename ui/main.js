console.log('Loaded!');

var button = dcument.getElementById('counter');
button.onClick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
	if(request.readyState === XMLHttpRequest.DONE) {
		if(request.status === 200) {
			var counter = request.responseText;
			var span = document.getElementById('count');
			span.innerHTML = counter.toString();
		}
	}
};

request.open('GET', 'http://http://gauravbharti4991.imad.hasura-app.io/counter', true);
request.send(null);
};

submit.onClick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    var nameInput = documnet.getElementById('name');
    var name = nameInput.value;
	if(request.readyState === XMLHttpRequest.DONE) {
		if(request.status === 200) {
			var names = request.responseText;
			names = JSON.parse(names);
			var list = '';
			for(var i=0; i<names.length; i++) {
			    list += '<li>'+names[i]+'</li>';
			}
			var ul = documnet.getElementById('namelist');
			ul.innerHTML = list;
		}
	}
};

request.open('GET', 'http://http://gauravbharti4991.imad.hasura-app.io/submit-name?name='+name, true);
request.send(null);
};