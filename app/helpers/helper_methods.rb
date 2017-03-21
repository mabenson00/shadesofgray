def find_user
  User.find(session[:user])
end

def logged_in?
 !!session[:user]
end
