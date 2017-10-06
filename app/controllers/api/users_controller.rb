class Api::UsersController < ApiController
  respond_to :json
  skip_before_action :restrict_access, :only => [:create]

  def index
    respond_with :api, User.all
  end

  def create
    respond_to do |format|
      format.json {
        @user = User.new(user_params)
        if @user.save
          render json: @user, status: :created, location: nil
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      }
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
  end

  def destroy
    User.destroy(params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :user_type)
    end
end
