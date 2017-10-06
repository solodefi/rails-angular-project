class Api::ApiTokensController < ApiController
  respond_to :json

  skip_before_action :restrict_access, :only => [:create]

  def create
    searched_user = User.find_by_email(login_params[:email])
    if searched_user
       authenticated_user = searched_user.authenticate(login_params[:password])
    end
    respond_to do |format|
      format.json {
        if authenticated_user
          @api_token = ApiToken.create(user: authenticated_user)
          puts "token create"
          puts authenticated_user.user_type
          render :json => {
            :user_id => authenticated_user.id, :email => authenticated_user.email, :token => @api_token.token, :user_type => authenticated_user.user_type
          }
        else
          head :unauthorized
        end
      }
    end
  end

  def destroy
    authenticated_user = ApiToken.where(:token => @token).first.try(:user)
    if (authenticated_user)
      authenticated_user.api_tokens.destroy_all
    end
    render :json => {:success => true}
  end

  private

  def login_params
    params.require(:login).permit(:email, :password)
  end
end
