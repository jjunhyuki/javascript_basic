
//passport's strategy pattern 
var passport = require('passport')
		, LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
	function(username, password, done) { 
        User.findOne({username: username}, function(err,user) {
            if(err) {return done(err); }
            if(!user) {
                return done(null, false, { message: 'Incorrect UserName.'});
            }
            if( !user.vaildPassword(password)) {
                return done(null, false, { message: 'Incorrect password.'});
            }
            return done(null, user);
        })
    }
));
