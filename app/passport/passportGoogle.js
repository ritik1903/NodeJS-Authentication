const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const crypto = require('crypto');

passport.serializeUser((user , done) => {
	done(null , user);
})
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID:"592163564227-u0tqgpfepffvrcfbv0anrpq8pf8h9hfm.apps.googleusercontent.com",
	clientSecret:"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",
	callbackURL:"http://localhost:7500/users/auth/google/callback",
	passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
	console.log(profile);
	return done(null, profile);
}
));