class TimeOffEntriesController < ApplicationController
  
  load_and_authorize_resource through: :current_user, except: [:bulk_new, :bulk_create]
  layout 'non_landing'

  def index
  end

  def new
  end

  def bulk_new
  end

  def bulk_create
    binding.pry
    redirect_to bulk_new_time_off_entries_path
  end

  def edit
    if @time_off_entry.status == 'Approved'
      redirect_to time_off_entries_path, notice: "You can't edit an approved request."
    end
  end

  def create
    @time_off_entry.status = 'Pending'
    if @time_off_entry.save
      redirect_to time_off_entries_path, notice: 'Time off successfully requested!'
    else
      render :new
    end
  end

  def update
    if @time_off_entry.status == 'Approved'
      redirect_to time_off_entries_path, notice: "You can't update an approved request."
    else
      if @time_off_entry.update_attributes(params[:time_off_entry])
        redirect_to time_off_entries_path, notice: "Time off request successfully deleted."
      else
        render :edit
      end
    end
  end

  def destroy
    if @time_off_entry.status == 'Approved'
      redirect_to time_off_entries_path, notice: "You can't delete an approved request."
    else
      @time_off_entry.destroy
      redirect_to time_off_entries_path, notice: "Time off request successfully deleted."
    end
  end
end
