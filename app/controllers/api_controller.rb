class ApiController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :restrict_access
  
  private
  
  def restrict_access
    authenticate_or_request_with_http_token do |token, options|
      @token = token
      ApiToken.exists?(token: @token)
    end
  end
end
  