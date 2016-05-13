var app = angular.module("spApp");

app.service("userService", function ($http) {
	
	this.updateMiddleName = function (middlename, cb) {
		
		$http.post("/middleName/" + middlename).success(function (output) {
			cb(output);
		})
	}
})